import { useCallback, useEffect, useState } from 'react';
import { Socket } from 'socket.io-client';
import { DefaultEventsMap } from '@socket.io/component-emitter';
import { Box, Button, Grid, Typography } from '@mui/material';
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

  const { endChatTime, endResultTime, canSend, goal, user } = useLocation().state;
  const [chatActive, setChatActive] = useState(true);
  const [resultOver, setResultOver] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [otherLeft, setOtherLeft] = useState(false);
  const [selfDisconnect, setSelfDisconnect] = useState(true);

  const onLeave = useCallback((e: BeforeUnloadEvent) => {
    if (!resultOver) {
      localStorage.setItem("detection", String(Number(localStorage.getItem("detection")) - 4));
      localStorage.setItem("detectionLosses", String(Number(localStorage.getItem("detectionLosses")) + 1));
      localStorage.setItem("deception", String(Number(localStorage.getItem("deception")) - 2));
      localStorage.setItem("deceptionLosses", String(Number(localStorage.getItem("deceptionLosses")) + 1));
    }
  }, [resultOver]);

  const onPopState = useCallback((e: PopStateEvent) => {
    if (!resultOver) {
      alert("Lost 4 detection exp and 2 deception exp for leaving.");
      window.removeEventListener("beforeunload", onLeave);
      window.removeEventListener("popstate", onPopState);
      localStorage.setItem("detection", String(Number(localStorage.getItem("detection")) - 4));
      localStorage.setItem("detectionLosses", String(Number(localStorage.getItem("detectionLosses")) + 1));
      localStorage.setItem("deception", String(Number(localStorage.getItem("deception")) - 2));
      localStorage.setItem("deceptionLosses", String(Number(localStorage.getItem("deceptionLosses")) + 1));
    }
    props.socket.disconnect();
    navigate("/home");
  }, [navigate, onLeave, props.socket, resultOver]);

  useEffect(() => {
    if (!resultOver) {
      window.addEventListener("beforeunload", onLeave);
      window.addEventListener("popstate", onPopState);
    } else {
      window.removeEventListener("beforeunload", onLeave);
      window.removeEventListener("popstate", onPopState);
    }
    return () => {
      setTimeout(() => {
        window.removeEventListener("beforeunload", onLeave);
        window.removeEventListener("popstate", onPopState);
      }, 100);
    }
  }, [resultOver, onLeave, onPopState]);

  useEffect(() => {
    if (selfDisconnect === true) {
      // window.removeEventListener("beforeunload", onLeave);
      // window.removeEventListener("popstate", onPopState);
    }
  }, [selfDisconnect]);

  useEffect(() => {
    if (props.socket.connected) {
      setSelfDisconnect(false);
    } else {
      setSelfDisconnect(true);
    }
  }, []);

  useEffect(() => {
    props.socket.on("endChat", () => setChatActive(false));
  }, [props.socket]);

  useEffect(() => {
    props.socket.on("disconnect", () => { setSelfDisconnect(true); });
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
        setChatActive={setChatActive}
        canSend={canSend}
        goal={goal}
        endChatTime={endChatTime}
        otherLeft={otherLeft}
        setOtherLeft={setOtherLeft}
        user={user} />
      {!chatActive && <ChatEnd
        resultOver={resultOver}
        setResultOver={setResultOver}
        socket={props.socket}
        endResultMillis={endResultTime - Date.now()}
        chatActive={chatActive}
        setChatActive={setChatActive}
        goal={goal}
        otherLeft={otherLeft}
        user={user} />}
      {selfDisconnect &&
        <Grid container justifyContent={"center"} direction="column">
          <Typography variant="h4">Lost connection to chat</Typography>
          <Button variant="contained" onClick={() => navigate("/home")} sx={{ my: 3, height: 75, fontSize: 30 }}>Return to home</Button>
        </Grid>}
    </Box>
  );
};
