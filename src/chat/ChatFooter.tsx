import { Box, Grid, IconButton, TextField, Typography } from '@mui/material';
import { DefaultEventsMap } from '@socket.io/component-emitter';
import { useEffect, useState } from 'react';
import { Socket } from 'socket.io-client';
import SendIcon from '@mui/icons-material/Send';
// import { useNavigate } from 'react-router-dom';

export interface ChatFooterProps {
  socket: Socket<DefaultEventsMap, DefaultEventsMap>;
  footerRef: React.RefObject<HTMLDivElement>;
  roomId: string;
  canSend: boolean;
}

export const ChatFooter = (props: ChatFooterProps) => {

  const [message, setMessage] = useState('');
  const [typingTimeout, setActiveTimeout] = useState<NodeJS.Timeout>();
  const [canSend, setCanSend] = useState(props.canSend);

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
    if (message.trim() && localStorage.getItem('user')) {
      props.socket.emit('message', {
        name: localStorage.getItem("user"),
        roomId: props.roomId,
        text: message,
      });
    }
    setMessage('');
  };

  // const navigate = useNavigate();

  // const handleLeaveChat = () => {
  //   localStorage.removeItem('user');
  //   navigate('/userhome');
  //   window.location.reload();
  // };

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
            onChange={(e) => setMessage(e.target.value)}
            onKeyDown={handleTyping}
          />
        </Grid>
        <Grid item xs={0.5} sx={{ my: 1 }}>
          <IconButton>
            <SendIcon color="primary" />
          </IconButton>
        </Grid>
      </Grid>
      <Box sx={{ my: 2 }} />
      <Box ref={props.footerRef} />
    </Box>
  );
};