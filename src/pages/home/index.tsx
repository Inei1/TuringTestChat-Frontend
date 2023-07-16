"use client";

import Header from '../../Header';
import { Box, Button, Container, Typography } from '@mui/material';
import { Footer } from '../../homepage/Footer';
import { useContext, useEffect } from 'react';
import { LoginRequest } from '../../homepage/LoginRequest';
import { Constants } from '../../Constants';
import { LoginContext, SocketContext } from '../_app';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { isMobile } from 'react-device-detect';

export const UserHome = () => {

  const { user, setUser } = useContext(LoginContext);

  const socket = useContext(SocketContext);

  const router = useRouter();

  const enterChat = (e: any) => {
    socket.connect();
    socket.emit("enterQueue", { username: user?.username });
    router.push({ pathname: "/chatwaiting" });
  };

  const getExpMessage = () => {
    if (!user) {
      return "user not found"
    }
    return "You have " + user.detection + " detection exp with " + user.detectionWins + "/" +
      user.detectionLosses + " win/loss (" +
      (100 * (user.detectionWins / Math.max(user.detectionWins + user.detectionLosses, 1))).toFixed(0) + "%) and " +
      user.deception + " deception exp with " + user.deceptionWins + "/" + user.deceptionLosses + " win/loss (" +
      (100 * (user!.deceptionWins / Math.max(user!.deceptionWins +
        user!.deceptionLosses, 1))).toFixed(0) + "%)."
  }

  useEffect(() => {
    const getUser = async (username: string) => {
      const result = await fetch(Constants.BASE_URL + `account/user/${username}`, {
        method: "GET",
        headers: { 'Content-Type': 'application/json' },
        credentials: "include",
      });
      setUser(await result.json());
    }
    getUser(user?.username!).catch(console.error);
  }, []);

  return (
    user ? <>
      <Box sx={{
        minHeight: "102.5vh",
        backgroundColor: "secondary.main",
        background: "radial-gradient(circle, rgba(19,42,122,1) 0%, rgba(29,29,29,1) 100%)",
        backgroundPosition: "center",
        backgroundSize: "100vw",
        backgroundPositionY: 60,
        maxWidth: "100vw",
      }}>
        <Head>
          <title>Home | Turing Test Chat</title>
        </Head>
        <Header />
        <Container component="section">
          <Box sx={{ display: 'flex', justifyContent: 'center', mt: isMobile ? 10 : 30 }}>
            <Box sx={{ maxWidth: 800, mt: 5 }}>
            <Link href="/howtoplay" style={{ color: "#E9E9E9", fontFamily: "monospace" }}>How to play Turing Test Chat (Read this before playing)</Link>.
              <Typography sx={{ fontSize: 20, my: 5 }}>
                {getExpMessage()}
              </Typography>
              <Button sx={{ width: "100%", height: 75, fontSize: 30 }} variant="contained" onClick={(e) => enterChat(e)}>Enter Chat Room</Button>
            </Box>
          </Box>
        </Container>
      </Box>
      <Footer />
    </> :
      <LoginRequest />
  );
};

export default UserHome;
