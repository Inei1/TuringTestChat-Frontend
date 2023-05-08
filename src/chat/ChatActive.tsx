import { Box, Container, Grid, Link, Typography } from "@mui/material";
import { ChatBody } from "./ChatBody";
import { ChatFooter } from "./ChatFooter";
import { useEffect, useRef, useState } from "react";
import { Socket } from "socket.io-client";
import { DefaultEventsMap } from '@socket.io/component-emitter';

export interface ChatActiveProps {
  socket: Socket<DefaultEventsMap, DefaultEventsMap>;
  chatActive: boolean;
  roomId: string;
}

export const ChatActive = (props: ChatActiveProps) => {

  const lastMessageRef = useRef<HTMLDivElement>(null);

  const [messages, setMessages] = useState<any>([]);
  const [typingUser, setTypingUser] = useState('');

  useEffect(() => {
    props.socket.on('messageResponse', (data: any) => {
      setMessages([...messages, data]);
      setTypingUser("");
    });
  }, [props.socket, messages]);

  useEffect(() => {
    lastMessageRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  useEffect(() => {
    props.socket.on('typingResponse', (data) => setTypingUser(data));
  }, [props.socket]);

  return (
    <Box
      sx={{
        maxWidth: 800,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        mx: "auto",
      }}>
      <Container sx={{ backgroundColor: "#1D1D1D", width: "100%", my: 3 }}>
        <ChatBody messages={messages} lastMessageRef={lastMessageRef} typingUser={typingUser} />
        {props.chatActive && <ChatFooter socket={props.socket} />}
      </Container>
    </Box>
  );
}
