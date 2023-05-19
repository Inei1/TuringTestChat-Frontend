import { Box, Container, Grid } from "@mui/material";
import { ChatBody } from "./ChatBody";
import { ChatFooter } from "./ChatFooter";
import { useEffect, useRef, useState } from "react";
import { Socket } from "socket.io-client";
import { DefaultEventsMap } from '@socket.io/component-emitter';

export interface ChatActiveProps {
  socket: Socket<DefaultEventsMap, DefaultEventsMap>;
  chatActive: boolean;
  roomId: string;
  canSend: boolean;
  goal: string;
  endChatTime: number;
}

export const ChatActive = (props: ChatActiveProps) => {

  const footerRef = useRef<HTMLDivElement>(null);

  const [messages, setMessages] = useState<any>([]);
  const [typingUser, setTypingUser] = useState('');

  useEffect(() => {
    props.socket.on('messageResponse', (data: any) => {
      setMessages([...messages, data]);
      setTypingUser("");
    });
  }, [props.socket, messages]);

  useEffect(() => {
    // Need a (very) brief amount of time to ensure the scroll uses the most recent messages.
    // This could fail in extremely slow systems, but it isn't critical so it's fine.
    setTimeout(() => footerRef.current?.scrollIntoView({ behavior: 'smooth' }), 10);
  }, [messages]);

  useEffect(() => {
    props.socket.on('typingResponse', (data) => {
      setTypingUser(data);
      setTimeout(() => footerRef.current?.scrollIntoView({ behavior: "smooth" }), 10);
    });
  }, [props.socket]);

  return (
    <Box
      sx={{
        maxWidth: "90%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        mx: "auto",
        mt: 5
      }}>
      <Grid container direction="column">
        <Container sx={{ backgroundColor: "#1D1D1D", width: "100%", mb: 2 }}>
          <ChatBody messages={messages} typingUser={typingUser} />
          {props.chatActive && <ChatFooter roomId={props.roomId} socket={props.socket} canSend={props.canSend} footerRef={footerRef} />}
        </Container>
      </Grid>
    </Box>
  );
}
