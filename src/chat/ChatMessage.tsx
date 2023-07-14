"use client";

import { Box, Grid, Typography } from '@mui/material';
import { Message } from '../types';
import Image from "next/image";
import { isMobile } from 'react-device-detect';

export interface ChatMessageProps {
  message: Message;
  user: string;
}

export const ChatMessage = (props: ChatMessageProps) => {

  return (
    <Box sx={{ my: 2 }}>
      {props.message.name === props.user ? (
        <Grid container justifyContent="flex-end">
          <Box sx={{ borderRadius: 3, border: 1, borderWidth: 8, borderColor: "#1F51FF", backgroundColor: "#1F51FF" }}>
            <Typography sx={{ mt: 0 }}>{props.message.text}</Typography>
          </Box>
          <Image alt="Human icon" src="/TTCHumanv2.png" width={isMobile ? 16 : 32} height={isMobile ? 16 : 32} />
        </Grid>
      ) : (
        <Grid container>
          <Image alt="Unknown icon" src="/TTCUnknown.png" width={isMobile ? 16 : 32} height={isMobile ? 16 : 32} />
          <Box sx={{ borderRadius: 3, border: 1, borderWidth: 8, borderColor: "#e9e9e9", backgroundColor: "#e9e9e9" }}>
            <Typography sx={{ color: "#1D1D1D", mt: 0 }}>{props.message.text}</Typography>
          </Box>
        </Grid>
      )}
    </Box>
  )
};
