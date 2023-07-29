"use client";

import Header from '../../Header';
import { Box, Button, Container, Grid, Typography } from '@mui/material';
import { Footer } from '../../homepage/Footer';
import { useContext, useEffect, useState } from 'react';
import { Constants } from '../../Constants';
import { LoginContext, SocketContext } from '../_app';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';

export const UserHome = () => {

  const { user, setUser } = useContext(LoginContext);
  const socket = useContext(SocketContext);
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (globalThis.ezstandalone) {
      ezstandalone.define(118, 119, 120, 121);
      if (!ezstandalone.enabled) {
        ezstandalone.enable();
        ezstandalone.display();
      } else {
        ezstandalone.refresh();
      }
    }
  }, []);

  const enterChat = (e: any) => {
    setLoading(true);
    socket.connect();
    if (!user) {
      socket.emit("enterQueue", { username: "guest" });
    } else {
      socket.emit("enterQueue", { username: user?.username });
    }
    router.push({ pathname: "/chatwaiting" });
    setLoading(false);
  };

  const getExpMessage = () => {
    if (!user) {
      return <b>Log in to track exp</b>;
    } else {
      return "You have " + user.detection + " detection exp with " + user.detectionWins + "/" +
        user.detectionLosses + " win/loss (" +
        (100 * (user.detectionWins / Math.max(user.detectionWins + user.detectionLosses, 1))).toFixed(0) + "%) and " +
        user.deception + " deception exp with " + user.deceptionWins + "/" + user.deceptionLosses + " win/loss (" +
        (100 * (user!.deceptionWins / Math.max(user!.deceptionWins +
          user!.deceptionLosses, 1))).toFixed(0) + "%).";
    }
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
    if (localStorage.getItem("user") !== "guest") {
      getUser(user?.username!).catch(console.error);
    }
    // Disconnect from any sockets that might not have been properly cleaned up
    socket.disconnect();
  }, []);

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
      }}>
        <Head>
          <title>Home | Turing Test Chat</title>
        </Head>
        <Header />
        <Box display="flex" justifyContent="center" alignItems="center" flexDirection="column" sx={{ mt: "25vh" }}>
          <Grid
            container
            display="flex"
            alignItems="center"
            justifyContent="center"
            direction="column"
            maxWidth="sm">
            <Grid item sx={{ textAlign: "center" }}>
              <Link href="/howtoplay" style={{ color: "#E9E9E9", fontSize: 16 }}>How to play Turing Test Chat (Read this before playing)</Link>
            </Grid>
            <Grid item sx={{ textAlign: "center" }}>
              <Typography sx={{ my: 5 }}>
                {getExpMessage()}
              </Typography>
            </Grid>
            <Grid item sx={{ textAlign: "center" }}>
              <Button
                sx={{ height: 60, width: 200 }}
                disabled={loading}
                variant="contained"
                onClick={(e) => enterChat(e)}>
                {loading ? "Processing" : "Start"}
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Box>
      <Footer />
    </>
  );
};

export default UserHome;
