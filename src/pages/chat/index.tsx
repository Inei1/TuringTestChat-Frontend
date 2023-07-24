"use client";

import { useCallback, useEffect, useState, useContext } from 'react';
import { Box, Button, Grid, Typography } from '@mui/material';
import Head from 'next/head';
import { LoginRequest } from '@/homepage/LoginRequest';
import { ChatEnd } from '@/chat/ChatEnd';
import { ChatHeader } from '@/chat/ChatHeader';
import { LeaveChatDialog } from '@/chat/LeaveChatDialog';
import { useRouter } from 'next/router';
import { ChatActive } from '@/chat/ChatActive';
import Link from 'next/link';
import { SocketContext } from '../_app';
import NoSSRWrapper from '@/NoSSRWrapper';
import useInterval from 'use-interval';

export const ChatRoom = () => {

  const router = useRouter();

  const socket = useContext(SocketContext);

  const [chatActive, setChatActive] = useState(true);
  const [resultOver, setResultOver] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [otherLeft, setOtherLeft] = useState(false);
  const [selfDisconnect, setSelfDisconnect] = useState(true);

  const onPopState = useCallback((e: PopStateEvent) => {
    socket.disconnect();
    router.push("/home");
  }, [router, socket]);

  useEffect(() => {
    if (!resultOver) {
      window.addEventListener("popstate", onPopState);
    } else {
      window.removeEventListener("popstate", onPopState);
    }
    return () => {
      setTimeout(() => {
        window.removeEventListener("popstate", onPopState);
      }, 100);
    }
  }, [resultOver, onPopState]);

  useEffect(() => {
    if (selfDisconnect === true) {
      // window.removeEventListener("beforeunload", onLeave);
      // window.removeEventListener("popstate", onPopState);
    }
  }, [selfDisconnect]);

  useInterval(() => socket.emit("checkActive"), 5000);

  useEffect(() => {
    if (socket.connected) {
      setSelfDisconnect(false);
    } else {
      setSelfDisconnect(true);
    }
  }, []);

  useEffect(() => {
    socket.on("endChat", () => setChatActive(false));
  }, [socket]);

  useEffect(() => {
    socket.on("disconnect", () => { setSelfDisconnect(true); });
  }, [socket]);

  return (
    router.query.user ? <Box sx={{
      minHeight: "102.5vh",
      backgroundColor: "secondary.main",
      background: "radial-gradient(circle, rgba(19,42,122,1) 0%, rgba(29,29,29,1) 100%)",
      backgroundPosition: "center",
      backgroundSize: "100vw",
      backgroundPositionY: 60,
      maxWidth: "100vw",
    }}>
      <Head>
        <title>Chatting | Turing Test Chat</title>
      </Head>
      <LeaveChatDialog
        onPopState={onPopState}
        onClose={() => setDialogOpen(false)}
        open={dialogOpen}
        socket={socket} />
      <ChatHeader
        chatActive={chatActive}
        goal={router.query.goal as string}
        endChatTime={Number(router.query.endChatTime as string)}
        setDialogOpen={setDialogOpen} />
      <ChatActive
        socket={socket}
        chatActive={chatActive}
        setChatActive={setChatActive}
        canSend={router.query.canSend === "true"}
        goal={router.query.goal as string}
        endChatTime={Number(router.query.endChatTime as string)}
        otherLeft={otherLeft}
        setOtherLeft={setOtherLeft}
        user={router.query.user as string} />
      {!chatActive && <ChatEnd
        resultOver={resultOver}
        setResultOver={setResultOver}
        socket={socket}
        endResultMillis={Number(router.query.endResultTime as string) - Date.now()}
        chatActive={chatActive}
        setChatActive={setChatActive}
        goal={router.query.goal as string}
        otherLeft={otherLeft}
        user={router.query.user as string} />}
      {selfDisconnect && !resultOver &&
        <Grid container justifyContent={"center"} direction="column">
          <Typography variant="h4">Lost connection to chat</Typography>
          <Link href="/home">
            <Button variant="contained" sx={{ my: 3, height: 75, fontSize: 30 }}>Return to home</Button>
          </Link>
        </Grid>}
    </Box> :
      <LoginRequest />
  );
};

export default NoSSRWrapper(ChatRoom);
