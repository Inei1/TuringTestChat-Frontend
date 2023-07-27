"use client";

import { Box, Container, Grid, Typography } from "@mui/material";
import { ChatBody } from "./ChatBody";
import { ChatFooter } from "./ChatFooter";
import { useEffect, useRef, useState } from "react";
import { Socket } from "socket.io-client";
import { DefaultEventsMap } from '@socket.io/component-emitter';
import { Message } from "../types";

export interface ChatActiveProps {
  socket: Socket<DefaultEventsMap, DefaultEventsMap>;
  chatActive: boolean;
  setChatActive: (active: boolean) => void;
  canSend: boolean;
  goal: string;
  endChatTime: number;
  otherLeft: boolean;
  setOtherLeft: (left: boolean) => void;
  user: string;
}

export const ChatActive = (props: ChatActiveProps) => {

  const [messages, setMessages] = useState<Message[]>([]);
  const [typingUser, setTypingUser] = useState('');

  useEffect(() => {
    props.socket.on("otherLeft", () => {
      if (props.chatActive) {
        props.setOtherLeft(true);
        props.setChatActive(false);
      }
    });
  }, [props.socket]);

  useEffect(() => {
    props.socket.on('messageResponse', (data: any) => {
      setMessages([...messages, data]);
      setTypingUser("");
    });
  }, [props.socket, messages]);

  useEffect(() => {	
    props.socket.on('typingResponse', (data) => {	
      setTypingUser(data);
    });	
  }, [props.socket]);	

  return (
    <Box
      sx={{
        maxWidth: "sm",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        mx: "auto",
        mt: 5
      }}>
      <Grid container direction="column">
        <Container sx={{ mb: 2, }}>
          <ChatBody messages={messages} typingUser={typingUser} user={props.user} />
          {props.chatActive &&
            <Box>
              <ChatFooter socket={props.socket} canSend={props.canSend} user={props.user} />
            </Box>}
        </Container>
        <Grid container justifyContent={"center"}>
          {props.otherLeft && <Typography variant="h3" sx={{ fontSize: 22, mb: 2 }}>Other chatter has left</Typography>}
        </Grid>
      </Grid>
    </Box>
  );
}