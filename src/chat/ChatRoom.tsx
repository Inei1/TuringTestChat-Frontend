import { useCallback, useEffect, useState } from 'react';
import { Socket } from 'socket.io-client';
import { DefaultEventsMap } from '@socket.io/component-emitter';
import { Box } from '@mui/material';
import { ChatActive } from './ChatActive';
import { ChatEnd } from './ChatEnd';
import { useLocation, useNavigate } from 'react-router-dom';
import { ChatHeader } from './ChatHeader';
import { Helmet } from 'react-helmet-async';
import { LeaveChatDialog } from './LeaveChatDialog';

export interface ChatRoomProps {
  socket: Socket<DefaultEventsMap, DefaultEventsMap>;
}

export const ChatRoom = (props: ChatRoomProps) => {

  const navigate = useNavigate();

  const { roomId, endChatTime, endResultTime, canSend, goal } = useLocation().state;
  const [chatActive, setChatActive] = useState(true);
  const [resultOver, setResultOver] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false);

  const onLeave = useCallback((e: BeforeUnloadEvent) => {
    e.preventDefault();
    // You cannot specify a message in modern browsers, so return an empty string.
    e.returnValue = "";
  }, []);

  const onVisibilityChange = useCallback((e: any) => {
    window.removeEventListener("beforeunload", onLeave);
    window.removeEventListener("visibilitychange", onVisibilityChange);
    window.removeEventListener("popstate", onPopState);
    props.socket.disconnect();
  }, []);

  const onPopState = useCallback((e: PopStateEvent) => {
    if (window.confirm("Leaving will cause you to lose 5 detection exp and 5 deception exp. Are you sure you want to leave?")) {
      window.removeEventListener("beforeunload", onLeave);
      window.removeEventListener("visibilitychange", onVisibilityChange);
      window.removeEventListener("popstate", onPopState);
      props.socket.disconnect();
      navigate("/home");
    } else {
      window.history.pushState(null, "", null);
    }
  }, []);

  useEffect(() => {
    if (!resultOver) {
      window.addEventListener("beforeunload", onLeave);
      window.addEventListener("visibilitychange", onVisibilityChange)
      window.addEventListener("popstate", onPopState);
    } else {
      window.removeEventListener("beforeunload", onLeave);
      window.removeEventListener("visibilitychange", onVisibilityChange);
      window.removeEventListener("popstate", onPopState);
    }
  }, [resultOver]);


  useEffect(() => {
    props.socket.on("endChat", () => setChatActive(false));
  }, [props.socket]);

  return (
    <Box sx={{
      minHeight: "100vh",
      backgroundColor: "secondary.main",
      background: "radial-gradient(circle, rgba(19,42,122,1) 0%, rgba(29,29,29,1) 100%)",
      backgroundPosition: "center",
      backgroundSize: "100vw",
      backgroundPositionY: 60,
      maxWidth: "100vw",
    }}>
      <Helmet>
        <title>Chatting | Turing Test Chat</title>
      </Helmet>
      <LeaveChatDialog
        onLeave={onLeave}
        onVisibilityChange={onVisibilityChange}
        onPopState={onPopState}
        onClose={() => setDialogOpen(false)}
        open={dialogOpen}
        socket={props.socket} />
      <ChatHeader
        chatActive={chatActive}
        goal={goal}
        endChatTime={endChatTime}
        setDialogOpen={setDialogOpen} />
      <ChatActive
        socket={props.socket}
        chatActive={chatActive}
        roomId={roomId}
        canSend={canSend}
        goal={goal}
        endChatTime={endChatTime} />
      {!chatActive && <ChatEnd
        resultOver={resultOver}
        setResultOver={setResultOver}
        socket={props.socket}
        endResultMillis={endResultTime - Date.now()}
        chatActive={chatActive}
        setChatActive={setChatActive}
        roomId={roomId}
        goal={goal} />}
    </Box>
  );
};
