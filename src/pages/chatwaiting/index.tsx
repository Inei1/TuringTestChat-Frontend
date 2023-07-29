"use client";

import { Box, Button, CircularProgress, Container, Grid, Typography } from '@mui/material';
import { useCallback, useContext, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Image from "next/image";
import NoSSRWrapper from '@/NoSSRWrapper';
import { LoginContext, SocketContext } from '../_app';

export const ChatWaiting = () => {

  const { user, setUser } = useContext(LoginContext);
  const socket = useContext(SocketContext);
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [warningMessage, setWarningMessage] = useState("");
  const [botClicks, setBotClicks] = useState(0);
  const [adblock, setAdblock] = useState(false);

  useEffect(() => {
    if (globalThis.ezstandalone) {
      ezstandalone.define(128, 129);
      if (!ezstandalone.enabled) {
        ezstandalone.enable();
        ezstandalone.display();
      } else {
        ezstandalone.refresh();
      }
    } else {
      setAdblock(true);
    }
  }, []);

  const onPopState = useCallback((e: PopStateEvent) => {
    socket.disconnect();
  }, [socket]);

  useEffect(() => {
    setBotClicks(Number(localStorage.getItem("botClicks")));
  }, []);

  useEffect(() => {
    window.addEventListener("popstate", onPopState);
    setTimeout(() => {
      setWarningMessage("This is taking a long time, you may need to leave and re-enter queue")
    }, 60000);
    return () => {
      setTimeout(() => {
        window.removeEventListener("popstate", onPopState);
      }, 100);
    }
  }, [onPopState]);

  useEffect(() => {
    socket.on("foundChat", (data) => {
      setLoading(true);
      if (user?.currentDailyCredits! > 0) {
        setUser({ ...user!, currentDailyCredits: user?.currentDailyCredits! - 1 });
        router.push({
          pathname: "/chat", query: {
            endChatTime: data.endChatTime,
            endResultTime: data.endResultTime,
            canSend: String(data.canSend),
            goal: data.goal,
            user: data.name,
          }
        }, "/chat");
      } else if (user?.permanentCredits! > 0) {
        setUser({ ...user!, permanentCredits: user?.permanentCredits! - 1 });
        router.push({
          pathname: "/chat", query: {
            endChatTime: data.endChatTime,
            endResultTime: data.endResultTime,
            canSend: String(data.canSend),
            goal: data.goal,
            user: data.name,
          }
        }, "/chat");
      } else {
        router.push({
          pathname: "/chat", query: {
            endChatTime: data.endChatTime,
            endResultTime: data.endResultTime,
            canSend: String(data.canSend),
            goal: data.goal,
            user: data.name,
          }
        }, "/chat");
      }
      setLoading(false);
    });
  }, [socket]);

  const returnHome = () => {
    setLoading(true);
    socket.disconnect();
    router.push("/home");
  }

  const updateBotClick = () => {
    localStorage.setItem("botClicks", String(botClicks + 1));
    setBotClicks(botClicks + 1);
  }

  return (
    <>
      <Box sx={{
        minHeight: "102.5vh",
        backgroundColor: "secondary.main",
        background: "radial-gradient(circle, rgba(19,42,122,1) 0%, rgba(29,29,29,1) 100%)",
        backgroundPosition: "center",
        backgroundSize: "100vw",
        backgroundPositionY: 60,
        maxWidth: "100vw",
        pt: 10
      }}>
        <Head>
          <title>Waiting for Chat | Turing Test Chat</title>
        </Head>
        <div id="ezoic-pub-ad-placeholder-128" />
        <Container component="section" sx={{ mt: adblock ? "0" : "20vh" }}>
          <Grid
            container
            direction="column"
            alignItems="center"
            justifyContent="center">
            <CircularProgress color="primary" />
            <Typography variant="h1" sx={{ fontSize: 18, mt: 3 }}>Waiting for chat</Typography>
            {user?.permanentCredits === 0 && user?.currentDailyCredits === 0 && <>
              <Typography>Out of credits</Typography>
            </>}
            <Typography>
              This will take up to one minute
            </Typography>
            <Button
              variant="contained"
              onClick={returnHome}
              disabled={loading}
              sx={{ height: 60, width: 200, mt: 5, mb: 5 }}>
              {loading ? "Processing" : "Cancel"}
            </Button>
            <Button onClick={updateBotClick}>
              <Image src="/TTCLogov2.png" alt="Turing Test Chat Logo" width={64} height={64} />
            </Button>
            <Typography>You've clicked the bot {botClicks} times</Typography>
            <Typography sx={{ mt: 1 }}>{warningMessage}</Typography>
          </Grid>
        </Container>
        <div id="ezoic-pub-ad-placeholder-129" />
      </Box>
    </>
  );
};

export default NoSSRWrapper(ChatWaiting);
