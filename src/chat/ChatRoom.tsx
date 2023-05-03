import { useEffect, useRef, useState } from 'react';
import { ChatBody } from './ChatBody';
import { ChatFooter } from './ChatFooter';
import { Socket } from 'socket.io-client';
import { DefaultEventsMap } from '@socket.io/component-emitter';
import bgpng from "../img/TTCbgplainv1.png";
import bgwebp from "../img/TTCbgplainv1.webp";
import { Box, Container } from '@mui/material';
import { Header } from '../Header';

export interface ChatRoomProps {
  socket: Socket<DefaultEventsMap, DefaultEventsMap>;
}

export const ChatRoom = (props: ChatRoomProps) => {

  const [messages, setMessages] = useState<any>([]);
  const [typingUser, setTypingUser] = useState('');
  const lastMessageRef = useRef<HTMLDivElement>(null);

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
    <>
      <Box sx={{
        minHeight: "100vh",
        backgroundColor: "secondary.main",
        background: `url(${bgwebp}), url(${bgpng})`,
        backgroundPosition: "center",
        backgroundSize: "100vw",
        backgroundPositionY: 60,
        maxWidth: "100vw",
      }}>
        <Header />
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
            <ChatFooter socket={props.socket} />
          </Container>
        </Box>
      </Box>
    </>
  );
};
