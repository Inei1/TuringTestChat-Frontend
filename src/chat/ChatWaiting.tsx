import { DefaultEventsMap } from '@socket.io/component-emitter';
import { useNavigate } from 'react-router-dom';
import { Socket, io } from 'socket.io-client';
import { Header } from '../Header';
import { Box, Button, Container, Grid, Typography } from '@mui/material';
import logopng from "../img/TTCbgplainv1.png";
import logowebp from "../img/TTCbgplainv1.webp";
import { Footer } from '../homepage/Footer';
import { useEffect, useState } from 'react';
import { Timer } from './Timer';

export interface ChatWaitingProps {
  socket: Socket<DefaultEventsMap, DefaultEventsMap>;
}

export const ChatWaiting = (props: ChatWaitingProps) => {
  const navigate = useNavigate();

  const [chatFound, setChatFound] = useState(false);
  const [chatWaitingEnd, setChatWaitingEnd] = useState(-1);
  const [chatAccepted, setChatAccepted] = useState(false);
  const [chatExpired, setChatExpired] = useState(false);
  const [roomId, setRoomId] = useState("");

  useEffect(() => {
    props.socket.on("foundChat", (data) => { setChatFound(true); setChatWaitingEnd(data.endTime) });
    let newRoomId = "";
    props.socket.on("roomFound", (data) => {
      newRoomId = data.roomId;
      setRoomId(data.roomId);
    })
    props.socket.on("startChat", (data) => navigate("/chat", { state: { roomId: newRoomId, endChatTime: data.endChatTime, endResultTime: data.endResultTime } }));
    props.socket.on("readyExpired", () => {
      if (!chatAccepted) {
        setChatExpired(true);
      }
    });
  }, [props.socket]);

  const ready = () => {
    setChatAccepted(true);
    props.socket.emit("readyChat", { user: localStorage.getItem("user"), roomId: roomId });
  }

  return (
    <>
      <Box sx={{
        minHeight: "100vh",
        backgroundColor: "secondary.main",
        background: `url(${logowebp}), url(${logopng})`,
        backgroundPosition: "center",
        backgroundSize: "100vw",
        backgroundPositionY: 60,
        maxWidth: "100vw",
      }}>
        <Header />
        <Container component="section">
          <Grid
            container
            direction="column"
            alignItems="center"
            justifyContent="center">
            {!chatFound && <Typography variant="h1">Waiting for chat</Typography>}
            {chatFound && <Typography variant="h1">Chat found</Typography>}
            <Grid item>
              {chatFound && !chatExpired && <Timer sx={{}} millis={chatWaitingEnd - Date.now()} />}
            </Grid>
            {chatFound && !chatAccepted && !chatExpired && <Button
              variant="contained"
              sx={{ width: "100%", height: 75, fontSize: 30 }} onClick={ready}>Go To Chat</Button>}
            {chatAccepted && !chatExpired && <Typography variant="h3" sx={{my: 5}}>Waiting for other player</Typography>}
            {chatExpired && !chatAccepted && <Typography variant="h3" sx={{my: 5}}>Your chat has expired and you have lost one credit.</Typography>}
            {chatExpired && chatAccepted && <Typography variant="h3" sx={{my: 5}}>The other player has not accepted, please return to home.</Typography>}
            {chatExpired && <Button variant="contained" onClick={() => navigate("/home")}
              sx={{ width: "100%", height: 75, fontSize: 30 }}>Return to home.</Button>}
            {!chatFound && <Button variant="contained" onClick={() => {
              navigate("/home");
              props.socket.disconnect();
            }}
              sx={{ width: "100%", height: 75, fontSize: 30 }}>Cancel</Button>}
          </Grid>
        </Container>
      </Box>
      <Footer />
    </>
  );
};
