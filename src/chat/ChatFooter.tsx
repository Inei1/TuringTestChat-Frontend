import { Box, Grid, IconButton, TextField, Typography } from '@mui/material';
import { DefaultEventsMap } from '@socket.io/component-emitter';
import { ChangeEvent, useEffect, useState } from 'react';
import { Socket } from 'socket.io-client';
import SendIcon from '@mui/icons-material/Send';

export interface ChatFooterProps {
  socket: Socket<DefaultEventsMap, DefaultEventsMap>;
  footerRef: React.RefObject<HTMLDivElement>;
  canSend: boolean;
}

export const ChatFooter = (props: ChatFooterProps) => {

  const MAX_LENGTH = 200;

  const [message, setMessage] = useState('');
  const [typingTimeout, setActiveTimeout] = useState<NodeJS.Timeout>();
  const [canSend, setCanSend] = useState(props.canSend);
  const [messageLength, setMessageLength] = useState(0);

  useEffect(() => {
    props.socket.on("messageWaitingOther", () => setCanSend(false));
    props.socket.on("messageWaitingSelf", () => setCanSend(true));
  }, [props.socket]);

  const handleTyping = (e: any) => {
    if (e.key === "Enter") {
      sendMessage();
    }
    props.socket.emit("typing", localStorage.getItem("user"));
    if (typingTimeout) {
      clearTimeout(typingTimeout);
    }
    setActiveTimeout(setTimeout(() => props.socket.emit("typingStop"), 5000));
  }

  const sendMessage = () => {
    let messageToSend = message
    if (message.length > MAX_LENGTH) {
      messageToSend = message.substring(0, MAX_LENGTH);
    }
    if (message.trim() && localStorage.getItem('user')) {
      props.socket.emit('message', {
        name: localStorage.getItem("user"),
        text: messageToSend,
      });
    }
    setMessage('');
    setMessageLength(0);
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
      <Grid container width={"100%"}>
        <Typography>{canSend ? "Your turn to chat" : "Waiting for other person..."}</Typography>
        <Grid item xs={11.5}>
          <TextField
            disabled={!canSend}
            sx={{ input: { color: "#e9e9e9", backgroundColor: "#2D2D2D" }, borderColor: "primary.info", width: "100%" }}
            type="text"
            placeholder="Write message"
            className="message"
            value={message}
            onChange={(e) => updateMessage(e)}
            onKeyDown={handleTyping}
          />
        </Grid>
        <Grid item xs={0.5} sx={{ my: 1 }}>
          <IconButton>
            <SendIcon color="primary" />
          </IconButton>
        </Grid>
      </Grid>
      <Typography>{messageLength + ` / ${MAX_LENGTH}`}</Typography>
      <Box sx={{ my: 2 }} />
      <Box ref={props.footerRef} />
    </Box>
  );
};
