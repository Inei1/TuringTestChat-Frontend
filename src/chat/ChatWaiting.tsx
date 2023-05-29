import { DefaultEventsMap } from '@socket.io/component-emitter';
import { useNavigate } from 'react-router-dom';
import { Socket } from 'socket.io-client';
import { Header } from '../Header';
import { Box, Button, Container, Grid, Typography } from '@mui/material';
import { Footer } from '../homepage/Footer';
import { useEffect, useState } from 'react';
import { Timer } from './Timer';
import { Helmet } from 'react-helmet-async';

export interface ChatWaitingProps {
  socket: Socket<DefaultEventsMap, DefaultEventsMap>;
}

export const ChatWaiting = (props: ChatWaitingProps) => {
  const navigate = useNavigate();

  const [chatFound, setChatFound] = useState(false);
  const [chatWaitingEnd, setChatWaitingEnd] = useState(-1);
  const [chatAccepted, setChatAccepted] = useState(false);
  const [chatExpired, setChatExpired] = useState(false);
  const [user, setUser] = useState("");

  useEffect(() => {
    props.socket.on("foundChat", (data) => {
      setChatFound(true);
      setChatWaitingEnd(data.endTime);
      setUser(data.name);
    });
  }, [props.socket]);

  useEffect(() => {
    props.socket.on("readyExpired", () => {
      if (!chatAccepted) {
        setChatExpired(true);
      }
    });
  }, [props.socket, chatAccepted]);

  /* eslint-disable react-hooks/exhaustive-deps */
  useEffect(() => {
    props.socket.once("startChat", (data) => {
      navigate("/chat", {
        state: {
          endChatTime: data.endChatTime,
          endResultTime: data.endResultTime,
          canSend: data.canSend,
          goal: data.goal,
          user: data.name,
        }
      });
    });
  }, []);
  /* eslint-enable react-hooks/exhaustive-deps */

  const ready = () => {
    setChatAccepted(true);
    props.socket.emit("readyChat", { user: user });
  }

  const cancelChat = () => {
    navigate("/home");
    props.socket.disconnect();
  }

  return (
    <>
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
          <title>Waiting for Chat | Turing Test Chat</title>
        </Helmet>
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
              {chatFound && !chatExpired && <Timer millis={chatWaitingEnd - Date.now()} />}
            </Grid>
            {chatFound && !chatAccepted && !chatExpired && <Button
              variant="contained"
              sx={{ width: "100%", height: 75, fontSize: 30 }} onClick={ready}>Go To Chat</Button>}
            {chatAccepted && !chatExpired && <Typography variant="h3" sx={{ my: 5 }}>Waiting for other player</Typography>}
            {chatExpired && !chatAccepted && <Typography variant="h3" sx={{ my: 5 }}>Your chat has expired and you have lost one credit.</Typography>}
            {chatExpired && chatAccepted && <Typography variant="h3" sx={{ my: 5 }}>The other player has not accepted, please return to home.</Typography>}
            {chatExpired && <Button variant="contained" onClick={() => navigate("/home")}
              sx={{ width: "100%", height: 75, fontSize: 30 }}>Return to home.</Button>}
            {!chatFound && <Button variant="contained" onClick={cancelChat}
              sx={{ width: "100%", height: 75, fontSize: 30 }}>Cancel</Button>}
          </Grid>
        </Container>
      </Box>
      <Footer />
    </>
  );
};
