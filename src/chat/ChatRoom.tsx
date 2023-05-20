import { useEffect, useState } from 'react';
import { Socket } from 'socket.io-client';
import { DefaultEventsMap } from '@socket.io/component-emitter';
import { Box } from '@mui/material';
import { ChatActive } from './ChatActive';
import { ChatEnd } from './ChatEnd';
import { useLocation } from 'react-router-dom';
import { ChatHeader } from './ChatHeader';
import { Helmet } from 'react-helmet-async';

export interface ChatRoomProps {
  socket: Socket<DefaultEventsMap, DefaultEventsMap>;
}

export const ChatRoom = (props: ChatRoomProps) => {

  const location = useLocation();

  const { roomId, endChatTime, endResultTime, canSend, goal } = useLocation().state;
  const [chatActive, setChatActive] = useState(true);

  useEffect(() => {
    props.socket.on("endChat", () => setChatActive(false));
  }, [props.socket]);

  useEffect(() => {
    console.log(location.pathname);
  }, [location]);

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
      <ChatHeader
        chatActive={chatActive}
        goal={goal}
        endChatTime={endChatTime} />
      <ChatActive
        socket={props.socket}
        chatActive={chatActive}
        roomId={roomId}
        canSend={canSend}
        goal={goal}
        endChatTime={endChatTime} />
      {!chatActive && <ChatEnd
        socket={props.socket}
        endResultMillis={endResultTime - Date.now()}
        chatActive={chatActive}
        setChatActive={setChatActive}
        roomId={roomId}
        goal={goal} />}
    </Box>
  );
};
