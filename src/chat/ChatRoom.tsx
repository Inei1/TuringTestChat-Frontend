import { useEffect, useState } from 'react';
import { Socket } from 'socket.io-client';
import { DefaultEventsMap } from '@socket.io/component-emitter';
import bgpng from "../img/TTCbgplainv1.png";
import bgwebp from "../img/TTCbgplainv1.webp";
import { Box } from '@mui/material';
import { Header } from '../Header';
import { Timer } from './Timer';
import { ChatActive } from './ChatActive';
import { ChatEnd } from './ChatEnd';
import { useLocation } from 'react-router-dom';

export interface ChatRoomProps {
  socket: Socket<DefaultEventsMap, DefaultEventsMap>;
}

export const ChatRoom = (props: ChatRoomProps) => {

  const { roomId } = useLocation().state;

  const [chatActive, setChatActive] = useState(true);
  const [chatSeconds, setChatSeconds] = useState(-1);
  const [endSeconds, setEndSeconds] = useState(-1);

  useEffect(() => {
    props.socket.on("newUserResponse", (data) => setChatSeconds(data));
    props.socket.on("timeOver", (data) => setChatActive(data));
    props.socket.on("beginPost", (data) => setEndSeconds(data));
  }, [props.socket]);

  useEffect(() => {
    props.socket.emit("newUser", localStorage.getItem("user"));
  });

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
        {chatActive && <Timer
          seconds={chatSeconds}
          sx={{ position: "fixed", top: "10%", left: 0, ml: 5 }}
          setChatActive={setChatActive} />}
        <ChatActive socket={props.socket} chatActive={chatActive} roomId={roomId} />
        <ChatEnd socket={props.socket} chatActive={chatActive} setChatActive={setChatActive} roomId={roomId} />
      </Box>
    </>
  );
};
