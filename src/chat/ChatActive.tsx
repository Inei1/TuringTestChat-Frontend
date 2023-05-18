import { Box, Container, Grid, Typography } from "@mui/material";
import { ChatBody } from "./ChatBody";
import { ChatFooter } from "./ChatFooter";
import { useEffect, useRef, useState } from "react";
import { Socket } from "socket.io-client";
import { DefaultEventsMap } from '@socket.io/component-emitter';
import { Timer } from "./Timer";

export interface ChatActiveProps {
  socket: Socket<DefaultEventsMap, DefaultEventsMap>;
  chatActive: boolean;
  roomId: string;
  canSend: boolean;
  goal: string;
  endChatTime: number;
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
        maxHeight: "80vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        mx: "auto",
      }}>
      <Grid container direction="column">
        <Grid container>
          <Grid item>
            <Typography
              variant="h3"
              sx={{ mt: 3, mr: 2 }}>You are:</Typography>
          </Grid>
          <Grid item>
            <Grid container direction="column" sx={{ mt: 2 }}>
              <Grid item>
                {props.goal === "Bot" ?
                  <Box component="img" alt="Bot" src="TTCLogov2.png" maxWidth={64} /> :
                  <Box component="img" alt="Human" src="TTCHumanv2.png" maxWidth={64} />}
              </Grid>
              <Grid item>
                <Typography>{props.goal === "Bot" ? "Bot" : "Human"}</Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item sx={{ml: "auto"}}>
            {props.chatActive && <Timer
              millis={props.endChatTime - Date.now()} />}
          </Grid>
        </Grid>
        <Container sx={{ backgroundColor: "#1D1D1D", width: "100%" }}>
          <ChatBody messages={messages} lastMessageRef={lastMessageRef} typingUser={typingUser} />
          {props.chatActive && <ChatFooter roomId={props.roomId} socket={props.socket} canSend={props.canSend} />}
        </Container>
      </Grid>
    </Box>
  );
}