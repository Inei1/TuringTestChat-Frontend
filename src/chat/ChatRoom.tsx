import { useEffect, useState } from 'react';
import { Socket } from 'socket.io-client';
import { DefaultEventsMap } from '@socket.io/component-emitter';
import bgpng from "../img/TTCbgplainv1.png";
import bgwebp from "../img/TTCbgplainv1.webp";
import { Box, Grid, Typography } from '@mui/material';
import { Header } from '../Header';
import { Timer } from './Timer';
import { ChatActive } from './ChatActive';
import { ChatEnd } from './ChatEnd';
import { useLocation } from 'react-router-dom';

export interface ChatRoomProps {
  socket: Socket<DefaultEventsMap, DefaultEventsMap>;
}

export const ChatRoom = (props: ChatRoomProps) => {

  const { roomId, endChatTime, endResultTime, canSend, goal } = useLocation().state;

  useEffect(() => {
    props.socket.on("endChat", () => setChatActive(false));
  }, [props.socket])

  const [chatActive, setChatActive] = useState(true);

  return (
    <>
      <Box sx={{
        minHeight: "100vh",
        backgroundColor: "secondary.main",
        background: `url(${bgwebp}), url(${bgpng})`,
        backgroundPosition: "center",
        backgroundSize: "100vw",
        backgroundPositionY: 60,
        maxWidth: "100vw",
      }}>
        <Header />
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
    </>
  );
};
