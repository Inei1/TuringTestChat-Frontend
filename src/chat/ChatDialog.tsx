"use client";

import { Typography } from "@mui/material";
import Dialog from "@mui/material/Dialog"
import DialogTitle from "@mui/material/DialogTitle";

export interface LeaveChatDialogProps {
  open: boolean;
  onClose: () => void;
  text: string;
}

export const ChatDialog = (props: LeaveChatDialogProps) => {

  return (
    <Dialog onClose={props.onClose} open={props.open} PaperProps={{ style: { backgroundColor: "#1D1D1D" } }}>
      <DialogTitle textAlign="center" variant="h2">???</DialogTitle>
      <Typography
        sx={{ m: 3 }}
        variant="h5">{props.text}</Typography>
    </Dialog>
  )
}