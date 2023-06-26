import { useCallback, useEffect, useState } from 'react';
import { Socket } from 'socket.io-client';
import { DefaultEventsMap } from '@socket.io/component-emitter';
import { Box, Button, Grid, Typography } from '@mui/material';
import { ChatActive } from './ChatActive';
import { ChatEnd } from './ChatEnd';
import { ChatHeader } from './ChatHeader';
import { LeaveChatDialog } from './LeaveChatDialog';
import { LoginRequest } from '../homepage/LoginRequest';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Link from 'next/link';

export interface ChatRoomProps {
  socket: Socket<DefaultEventsMap, DefaultEventsMap>;
}

export const ChatRoom = (props: ChatRoomProps) => {

  const router = useRouter();

  //const { endChatTime, endResultTime, canSend, goal, user } = useLocation().state;
  const [chatActive, setChatActive] = useState(true);
  const [resultOver, setResultOver] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [otherLeft, setOtherLeft] = useState(false);
  const [selfDisconnect, setSelfDisconnect] = useState(true);

  const onPopState = useCallback((e: PopStateEvent) => {
    props.socket.disconnect();
    router.push("/home");
  }, [router, props.socket]);

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

  useEffect(() => {
    if (props.socket.connected) {
      setSelfDisconnect(false);
    } else {
      setSelfDisconnect(true);
    }
  }, []);

  useEffect(() => {
    props.socket.on("endChat", () => setChatActive(false));
  }, [props.socket]);

  useEffect(() => {
    props.socket.on("disconnect", () => { setSelfDisconnect(true); });
  }, [props.socket]);

  return (
    router.query.user ? <Box sx={{
      minHeight: "100vh",
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
        socket={props.socket} />
      <ChatHeader
        chatActive={chatActive}
        goal={router.query.goal! as string}
        endChatTime={Number(router.query.endChatTime as string)}
        setDialogOpen={setDialogOpen} />
      <ChatActive
        socket={props.socket}
        chatActive={chatActive}
        setChatActive={setChatActive}
        canSend={Boolean(router.query.canSend as string)}
        goal={router.query.goal as string}
        endChatTime={Number(router.query.endChatTime as string)}
        otherLeft={otherLeft}
        setOtherLeft={setOtherLeft}
        user={router.query.user as string} />
      {!chatActive && <ChatEnd
        resultOver={resultOver}
        setResultOver={setResultOver}
        socket={props.socket}
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
