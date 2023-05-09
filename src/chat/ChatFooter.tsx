import { Box, Grid, IconButton, TextField } from '@mui/material';
import { DefaultEventsMap } from '@socket.io/component-emitter';
import { useState } from 'react';
import { Socket } from 'socket.io-client';
import SendIcon from '@mui/icons-material/Send';
import { useNavigate } from 'react-router-dom';

export interface ChatFooterProps {
  socket: Socket<DefaultEventsMap, DefaultEventsMap>;
  roomId: string;
}

export const ChatFooter = (props: ChatFooterProps) => {
  const [message, setMessage] = useState('');
  const [activeTimeout, setActiveTimeout] = useState<NodeJS.Timeout>();

  const handleTyping = (e: any) => {
    if (e.key === "Enter") {
      sendMessage();
    }
    props.socket.emit("typing", localStorage.getItem("user"));
    if (activeTimeout) {
      clearTimeout(activeTimeout);
    }
    setActiveTimeout(setTimeout(() => props.socket.emit("typing", ""), 5000));
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

  const navigate = useNavigate();

  const handleLeaveChat = () => {
    localStorage.removeItem('user');
    navigate('/userhome');
    window.location.reload();
  };

  return (
    <Box>
      <Grid container width={"100%"}>
        <Grid item xs={11.5}>
          <TextField
            sx={{ input: { color: "#e9e9e9", backgroundColor: "#2D2D2D" }, borderColor: "primary.info", width: "100%" }}
            type="text"
            placeholder="Write message"
            className="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyDown={handleTyping}
          />
        </Grid>
        <Grid item xs={0.5} sx={{my: 1}}>
          <IconButton>
            <SendIcon color="primary" />
          </IconButton>
        </Grid>
      </Grid>
      <Box sx={{ my: 1 }}></Box>
    </Box>
  );
};