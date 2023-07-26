"use client";

import { Box, IconButton, LinearProgress, TextField, Typography } from '@mui/material';
import { DefaultEventsMap } from '@socket.io/component-emitter';
import { ChangeEvent, useEffect, useState } from 'react';
import { Socket } from 'socket.io-client';
import SendIcon from '@mui/icons-material/Send';

export interface ChatFooterProps {
  socket: Socket<DefaultEventsMap, DefaultEventsMap>;
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
    setMessage("");
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
    canSend ?
      <form onSubmit={(e) => sendMessage(e)}>
        <TextField
          disabled={loading || !canSend}
          sx={{
            input: {
              color: "#FFFFFF",
              backgroundColor: "#1F51FF"
            },
            borderColor: "primary.info",
          }}
          type="text"
          className="message"
          value={message}
          onChange={(e) => updateMessage(e)}
          onKeyDown={handleTyping}
          fullWidth
          inputRef={(input) => {
            if (input !== null) {
              input.focus();
            }
          }} />
        <IconButton disabled={loading || !canSend} type="submit" onClick={(e) => sendMessage(e)}>
          <SendIcon color="primary" />
        </IconButton>
        <Typography>{messageLength + ` / ${MAX_LENGTH}`}</Typography>
        <Box sx={{ my: 2 }} />
      </form> :
      <Box>
        <Typography>Waiting for other chatter</Typography>
        <LinearProgress sx={{ "& .MuiLinearProgress-bar": { animationDuration: "10s" } }} />
      </Box>
  );
};
