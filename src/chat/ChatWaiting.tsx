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

  useEffect(() => {
    props.socket.on("foundChat", () => { setChatFound(true) });
    props.socket.on("startChat", () => navigate("/chat"))
  }, [props.socket]);

  useEffect(() => {
    props.socket.connect();
    props.socket.emit("startRoom", localStorage.getItem("user"));
    //socket.emit("userWaiting", localStorage.getItem("user"));
  }, []);

  const ready = () => {
    props.socket.emit("readyChat");
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
              {chatFound && <Timer setChatActive={() => null} sx={{}} seconds={30} />}
            </Grid>
            {chatFound && <Button
              variant="contained"
              sx={{ width: "100%", height: 75, fontSize: 30 }} onClick={ready}>Go To Chat</Button>}
          </Grid>
        </Container>
      </Box>
      <Footer />
    </>
  );
};
