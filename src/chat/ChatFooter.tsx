"use client";

import { Box, Grid, IconButton, TextField, Typography } from '@mui/material';
import { DefaultEventsMap } from '@socket.io/component-emitter';
import { ChangeEvent, useEffect, useState } from 'react';
import { Socket } from 'socket.io-client';
import SendIcon from '@mui/icons-material/Send';
import { BrowserView, MobileView } from 'react-device-detect';

export interface ChatFooterProps {
  socket: Socket<DefaultEventsMap, DefaultEventsMap>;
  footerRef: React.RefObject<HTMLDivElement>;
  canSend: boolean;
  user: string;
}

export const ChatFooter = (props: ChatFooterProps) => {

  const MAX_LENGTH = 200;

  const [message, setMessage] = useState('');
  const [typingTimeout, setActiveTimeout] = useState<NodeJS.Timeout>();
  const [canSend, setCanSend] = useState(props.canSend);
  const [messageLength, setMessageLength] = useState(0);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    props.socket.on("messageWaitingOther", () => setCanSend(false));
    props.socket.on("messageWaitingSelf", () => setCanSend(true));
  }, [props.socket]);

  const handleTyping = (e: any) => {
    props.socket.emit("typing", "Chatter");
    if (typingTimeout) {
      clearTimeout(typingTimeout);
    }
    setActiveTimeout(setTimeout(() => props.socket.emit("typingStop"), 5000));
  }

  const sendMessage = (e: any) => {
    setLoading(true);
    e.preventDefault();
    let messageToSend = message;
    if (message.length > MAX_LENGTH) {
      messageToSend = message.substring(0, MAX_LENGTH);
    }
    if (message.trim() && props.user) {
      props.socket.emit('message', {
        name: props.user,
        text: messageToSend,
      });
    }
    setMessage('');
    setMessageLength(0);
    setLoading(false);
  };

  const updateMessage = (e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    setMessage(e.target.value);
    setMessageLength(e.target.value.length);
    if (e.target.value.length > MAX_LENGTH) {
      setMessage(message.substring(0, MAX_LENGTH));
      setMessageLength(MAX_LENGTH);
    }
  }

  return (
    <Box>
      <form onSubmit={(e) => sendMessage(e)}>
        <Grid container width={"100%"}>
          <Typography>{canSend ? "Your turn to chat" : "Waiting for other chatter..."}</Typography>
          <Grid item xs={11.5}>
            <TextField
              disabled={loading || !canSend}
              sx={{ input: { color: "#e9e9e9", backgroundColor: "#2D2D2D" }, borderColor: "primary.info", width: "100%" }}
              type="text"
              placeholder="Write message"
              className="message"
              value={message}
              onChange={(e) => updateMessage(e)}
              onKeyDown={handleTyping}
            />
          </Grid>
          <BrowserView><IconButton type="submit" onClick={(e) => sendMessage(e)}>
            <SendIcon color="primary" />
          </IconButton></BrowserView>
        </Grid>
        <MobileView>
          <IconButton disabled={loading || !canSend} type="submit" onClick={(e) => sendMessage(e)}>
            <SendIcon color="primary" />
          </IconButton>
        </MobileView>

        <Typography>{messageLength + ` / ${MAX_LENGTH}`}</Typography>
        <Box sx={{ my: 2 }} />
        <Box ref={props.footerRef} />
      </form>
    </Box>
  );
};
