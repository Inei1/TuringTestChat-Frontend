import { Box, Typography } from '@mui/material';
import { ChatMessage } from './ChatMessage';

export interface ChatBodyProps {
  messages: any[];
  lastMessageRef: React.RefObject<HTMLDivElement>;
  typingUser: string;
}

export const ChatBody = (props: ChatBodyProps) => {

  return (
    <>
      <Box>
        {props.messages.map((message) => {
          return <ChatMessage message={message} />
        })}
        <Box>
          {props.typingUser.length > 0 && <Typography>{props.typingUser + " is typing"}</Typography>}
        </Box>
        <Box ref={props.lastMessageRef} />
      </Box>
    </>
  );
};
