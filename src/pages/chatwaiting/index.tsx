"use client";

import { Box, Button, Container, Grid, Typography } from '@mui/material';
import { useCallback, useContext, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import NoSSRWrapper from '@/NoSSRWrapper';
import { isMobile } from 'react-device-detect';
import { LoginContext, SocketContext } from '../_app';

export const ChatWaiting = () => {

  const { user, setUser } = useContext(LoginContext);
  const socket = useContext(SocketContext);
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const onPopState = useCallback((e: PopStateEvent) => {
    socket.disconnect();
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
      }
      setLoading(false);
    });
  }, [socket]);

  const returnHome = () => {
    setLoading(true);
    socket.disconnect();
    router.push("/home");
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
        <Container component="section">
          <Grid
            container
            direction="column"
            alignItems="center"
            justifyContent="center">
            <Typography variant="h1" sx={{ fontSize: isMobile ? 75 : 100 }}>Waiting for chat</Typography>
            {user?.permanentCredits === 0 && user?.currentDailyCredits === 0 && <>
              <Typography>Out of credits</Typography>
            </>}
            <Button variant="contained" onClick={returnHome} disabled={loading}
              sx={{ width: "100%", height: 75, fontSize: 30 }}>{loading ? "Processing" : "Cancel"}</Button>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default NoSSRWrapper(ChatWaiting);
