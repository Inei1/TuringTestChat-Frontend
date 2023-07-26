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
        <Box display="flex" justifyContent="flex-end">
          <Box display="flex" sx={{ borderRadius: 3, border: 1, borderWidth: 8, borderColor: "#1F51FF", backgroundColor: "#1F51FF" }}>
            <Typography sx={{ mt: 0, mr: 2, overflowWrap: "break-word", wordBreak: "break-word", display: "inline-block" }}>{props.message.text}</Typography>
            <Image alt="Human icon" src="/TTCHumanv2.png" width={32} height={32} />
          </Box>
        </Box>
      ) : (
        <Box display="flex">
          <Box display="flex" sx={{ borderRadius: 3, border: 1, borderWidth: 8, borderColor: "#e9e9e9", backgroundColor: "#e9e9e9" }}>
            <Image alt="Unknown icon" src="/TTCUnknownDark.png" width={32} height={32} />
            <Typography sx={{ color: "#1D1D1D", mt: 0, ml: 2, overflowWrap: "break-word", wordBreak: "break-word", display: "inline-block" }}>{props.message.text}</Typography>
          </Box>
        </Box>
      )}
    </Box>
  )
};
