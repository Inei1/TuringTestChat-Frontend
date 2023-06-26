import { Box, Typography } from '@mui/material';
import { ChatMessage } from './ChatMessage';
import { Message } from '../types';

export interface ChatBodyProps {
  messages: Message[];
  typingUser: string;
  user: string;
}

export const ChatBody = (props: ChatBodyProps) => {

  return (
    <Box sx={{ backgroundColor: "#1D1D1D", my: 2 }}>
      {props.messages.map((message) => {
        return <ChatMessage message={message} key={message.key} user={props.user} />
      })}
      <Box>
        {props.typingUser.length > 0 && <Typography>{props.typingUser + " is typing"}</Typography>}
      </Box>
    </Box>
  );
};
