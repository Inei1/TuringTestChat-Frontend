"use client";

import { Box, Button, Container, FormControlLabel, FormGroup, Grid, Switch, Typography } from '@mui/material';
import { Footer } from '../../homepage/Footer';
import { useCallback, useContext, useEffect, useState } from 'react';
import { Timer } from '../../chat/Timer';
import { LoginContext, SocketContext } from '../_app';
import { Constants } from '../../Constants';
import { StatusCodes } from "http-status-codes";
import { useRouter } from 'next/router';
import Head from 'next/head';

export const ChatWaiting = () => {

  const { user, setUser } = useContext(LoginContext);

  const router = useRouter();

  const socket = useContext(SocketContext);

  const [chatFound, setChatFound] = useState(false);
  const [chatWaitingEnd, setChatWaitingEnd] = useState(-1);
  const [chatAccepted, setChatAccepted] = useState(false);
  const [chatExpired, setChatExpired] = useState(false);
  const [selfDisconnect, setSelfDisconnect] = useState(false);
  const [toggleError, setToggleError] = useState(false);

  const onPopState = useCallback((e: PopStateEvent) => {
    window.removeEventListener("popstate", onPopState);
    socket.disconnect();
  }, [socket, chatFound, chatExpired]);

  useEffect(() => {
    setTimeout(() => {
      if (!socket.connected) {
        setSelfDisconnect(true);
      }
    }, 1000);
  }, [socket]);

  useEffect(() => {
    socket.on("foundChat", (data) => {
      setChatFound(true);
      setChatWaitingEnd(data.endTime);
      if (user?.currentDailyCredits! > 0) {
        setUser({ ...user!, currentDailyCredits: user?.currentDailyCredits! - 1 });
      } else if (user?.permanentCredits! > 0) {
        setUser({ ...user!, permanentCredits: user?.permanentCredits! - 1 });
      }

      if (user?.playFoundSound) {
        const sound = new Audio("TTCNotification.mp3");
        sound.volume = 0.1;
        sound.play();
      }
    });
  }, [socket]);

  useEffect(() => {
    window.addEventListener("popstate", onPopState);
    return () => {
      setTimeout(() => {
        window.removeEventListener("popstate", onPopState);
      }, 100);
    }
  }, [onPopState]);

  useEffect(() => {
    socket.off("readyExpired");
    socket.on("readyExpired", () => {
      setChatExpired(true);
    });
  }, [socket]);

  useEffect(() => {
    socket.on("otherWaitingLeft", () => {
      setChatExpired(true);
      setChatAccepted(true);
    });
  });

  /* eslint-disable react-hooks/exhaustive-deps */
  useEffect(() => {
    socket.once("startChat", (data) => {
      window.removeEventListener("popstate", onPopState);
      router.push({
        pathname: "/chat", query: {
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
    // TODO: implement something better
    setTimeout(() => socket.emit("readyChat", { username: user?.username }), 1000);
  }

  const returnHome = () => {
    socket.disconnect();
    window.removeEventListener("popstate", onPopState);
    router.push("/home");
  }

  const toggleNotificationSound = async () => {
    const result = await fetch(Constants.BASE_URL + "settings/notifications/waiting", {
      method: "POST",
      credentials: "include",
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ playFoundSound: !user?.playFoundSound, username: user?.username }),
    });
    if (result.status === StatusCodes.OK) {
      setUser({ ...user!, playFoundSound: !user?.playFoundSound });
    } else {
      setToggleError(true);
    }
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
        <Head>
          <title>Waiting for Chat | Turing Test Chat</title>
        </Head>
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
            <FormGroup sx={{ mt: 2 }}>
              <FormControlLabel control={<Switch color="primary" onClick={toggleNotificationSound} checked={user?.playFoundSound} />} label="Play notification sound when chat found"></FormControlLabel>
            </FormGroup>
            {toggleError && <Typography>An unknown error occurred when toggling notification sounds</Typography>}
          </Grid>
        </Container>
      </Box>
      <Footer />
    </>
  );
};

export default ChatWaiting;
