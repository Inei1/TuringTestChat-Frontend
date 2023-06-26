import { Box, Container, Grid, Typography } from "@mui/material";	
import { ChatBody } from "./ChatBody";	
import { ChatFooter } from "./ChatFooter";	
import { useEffect, useRef, useState } from "react";	
import { Socket } from "socket.io-client";	
import { DefaultEventsMap } from '@socket.io/component-emitter';	
import { Message } from "../types";	
import { ChatDialog } from "./ChatDialog";	

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

  const footerRef = useRef<HTMLDivElement>(null);	

  const [messages, setMessages] = useState<Message[]>([]);	
  const [typingUser, setTypingUser] = useState('');	
  const [chatDialogText, setChatDialogText] = useState("");	
  const [chatDialogOpen, setChatDialogOpen] = useState(false);	

  useEffect(() => {	
    props.socket.on("otherLeft", () => {	
      if (props.chatActive) {	
        props.setOtherLeft(true);	
        props.setChatActive(false);	
      }	
    });	
  }, [props.socket]);	

  useEffect(() => {	
    props.socket.on("???", (text) => {	
      setChatDialogOpen(true);	
      setChatDialogText(text);	
    });	
  }, [props.socket])	

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
      <ChatDialog text={chatDialogText} open={chatDialogOpen} onClose={() => setChatDialogOpen(false)} />	
      <Grid container direction="column">	
        <Container sx={{ backgroundColor: "#1D1D1D", width: "100%", mb: 2 }}>	
          <ChatBody messages={messages} typingUser={typingUser} user={props.user} />	
          {props.chatActive &&	
            <ChatFooter socket={props.socket} canSend={props.canSend} footerRef={footerRef} user={props.user} />}	
        </Container>	
        <Grid container justifyContent={"center"}>	
          {props.otherLeft && <Typography variant="h3">Other chatter has left</Typography>}	
        </Grid>	
      </Grid>	
    </Box>	
  );	
}