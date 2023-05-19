import { Box, Typography } from '@mui/material';
import { ChatMessage } from './ChatMessage';

export interface ChatBodyProps {
  messages: any[];
  typingUser: string;
}

export const ChatBody = (props: ChatBodyProps) => {

  return (
    <Box sx={{ backgroundColor: "#1D1D1D", my: 2 }}>
      {props.messages.map((message) => {
        return <ChatMessage message={message} />
      })}
      <Box>
        {props.typingUser.length > 0 && <Typography>{props.typingUser + " is typing"}</Typography>}
      </Box>
    </Box>
  );
};
