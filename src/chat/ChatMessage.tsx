import { Box, Grid, Typography } from '@mui/material';
import { Message } from '../types';

export interface ChatMessageProps {
  message: Message;
  user: string;
}

export const ChatMessage = (props: ChatMessageProps) => {

  return (
    <Box sx={{my: 2}}>
      {props.message.name === props.user ? (
        <Grid container justifyContent="flex-end">
          <Box sx={{ borderRadius: 3, border: 1, borderWidth: 8, borderColor: "#1F51FF", backgroundColor: "#1F51FF" }}>
            <Typography>{props.message.text}</Typography>
          </Box>
          <Box component="img" alt="Human icon" src={"TTCHumanv2.png"} sx={{ maxHeight: 32, ml: 2 }} />
        </Grid>
      ) : (
        <Grid container>
          <Box component="img" alt="Unknown icon" src={"TTCUnknown.png"} sx={{ maxHeight: 32, mr: 2 }} />
          <Box sx={{ borderRadius: 3, border: 1, borderWidth: 8, borderColor: "#e9e9e9", backgroundColor: "#e9e9e9" }}>
            <Typography sx={{color: "#1D1D1D"}}>{props.message.text}</Typography>
          </Box>
        </Grid>
      )}
    </Box>
  )
};
