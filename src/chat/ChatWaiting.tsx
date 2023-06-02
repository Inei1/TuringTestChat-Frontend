import { DefaultEventsMap } from '@socket.io/component-emitter';
import { useNavigate } from 'react-router-dom';
import { Socket } from 'socket.io-client';
import { Box, Button, Container, Grid, Typography } from '@mui/material';
import { Footer } from '../homepage/Footer';
import { useCallback, useEffect, useState } from 'react';
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
  const [selfDisconnect, setSelfDisconnect] = useState(false);
  const [user, setUser] = useState("");

  const onLeave = useCallback((e: BeforeUnloadEvent) => {
    if (chatFound && !chatExpired) {
      localStorage.setItem("detection", String(Number(localStorage.getItem("detection")) - 2));
      localStorage.setItem("deception", String(Number(localStorage.getItem("deception")) - 1));
      localStorage.setItem("detectionLosses", String(Number(localStorage.getItem("detectionLosses")) + 1));
      localStorage.setItem("deceptionLosses", String(Number(localStorage.getItem("deceptionLosses")) + 1));
    }
  }, [chatFound, chatExpired]);

  const onPopState = useCallback((e: PopStateEvent) => {
    if (chatFound && !chatExpired) {
      localStorage.setItem("detection", String(Number(localStorage.getItem("detection")) - 2));
      localStorage.setItem("deception", String(Number(localStorage.getItem("deception")) - 1));
      localStorage.setItem("detectionLosses", String(Number(localStorage.getItem("detectionLosses")) + 1));
      localStorage.setItem("deceptionLosses", String(Number(localStorage.getItem("deceptionLosses")) + 1));
    }
    window.removeEventListener("beforeunload", onLeave);
    window.removeEventListener("popstate", onPopState);
    props.socket.disconnect();
  }, [onLeave, props.socket, chatFound, chatExpired]);

  useEffect(() => {
    setTimeout(() => {
      if (!props.socket.connected) {
        setSelfDisconnect(true);
      }
    }, 1000);
  }, [props.socket]);

  useEffect(() => {
    props.socket.on("foundChat", (data) => {
      setChatFound(true);
      setChatWaitingEnd(data.endTime);
      setUser(data.name);
    });
  }, [props.socket]);

  useEffect(() => {
    window.addEventListener("beforeunload", onLeave);
    window.addEventListener("popstate", onPopState);
    return () => {
      setTimeout(() => {
        window.removeEventListener("beforeunload", onLeave);
        window.removeEventListener("popstate", onPopState);
      }, 100);
    }
  }, [onLeave, onPopState]);

  useEffect(() => {
    props.socket.off("readyExpired");
    props.socket.on("readyExpired", () => {
      if (!chatAccepted) {
        localStorage.setItem("detection", String(Number(localStorage.getItem("detection")) - 2));
        localStorage.setItem("deception", String(Number(localStorage.getItem("deception")) - 1));
        localStorage.setItem("detectionLosses", String(Number(localStorage.getItem("detectionLosses")) + 1));
        localStorage.setItem("deceptionLosses", String(Number(localStorage.getItem("deceptionLosses")) + 1));
      }
      setChatExpired(true);
    });
  }, [props.socket, chatAccepted]);

  useEffect(() => {
    props.socket.on("otherWaitingLeft", () => {
      setChatExpired(true);
      setChatAccepted(true);
    });
  });

  /* eslint-disable react-hooks/exhaustive-deps */
  useEffect(() => {
    props.socket.once("startChat", (data) => {
      window.removeEventListener("beforeunload", onLeave);
      window.removeEventListener("popstate", onPopState);
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
    setTimeout(() => props.socket.emit("readyChat", { user: user }), 1000);
  }

  const returnHome = () => {
    props.socket.disconnect();
    window.removeEventListener("beforeunload", onLeave);
    window.removeEventListener("popstate", onPopState);
    navigate("/home");
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
        <Container component="section">
          <Grid
            container
            direction="column"
            alignItems="center"
            justifyContent="center">
            {!chatFound && !selfDisconnect && <Typography variant="h1">Waiting for chat</Typography>}
            {chatFound && <Typography variant="h1">Chat found</Typography>}
            {selfDisconnect && <Typography variant="h2">Lost connection to the server.</Typography>}
            <Grid item>
              {chatFound && !chatExpired && <Timer millis={chatWaitingEnd - Date.now()} />}
            </Grid>
            {chatFound && !chatAccepted && !chatExpired && <Button
              variant="contained"
              sx={{ width: "100%", height: 75, fontSize: 30 }} onClick={ready}>Go To Chat</Button>}
            {chatAccepted && !chatExpired && <Typography variant="h3" sx={{ my: 5 }}>Waiting for other chatter</Typography>}
            {chatExpired && !chatAccepted && <Typography variant="h3" sx={{ my: 5 }}>Your chat has expired and you have lost two detection exp and one deception exp.</Typography>}
            {chatExpired && chatAccepted && <Typography variant="h3" sx={{ my: 5 }}>The other chatter has not accepted, please return to home.</Typography>}
            {(chatExpired || selfDisconnect) && <Button variant="contained" onClick={returnHome}
              sx={{ width: "100%", height: 75, fontSize: 30 }}>Return to home</Button>}
            {!chatFound && !selfDisconnect && <Button variant="contained" onClick={returnHome}
              sx={{ width: "100%", height: 75, fontSize: 30 }}>Cancel</Button>}
          </Grid>
        </Container>
      </Box>
      <Footer />
    </>
  );
};
