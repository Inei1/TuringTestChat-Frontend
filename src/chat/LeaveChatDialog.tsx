import { Button, Typography } from "@mui/material";
import Dialog from "@mui/material/Dialog"
import DialogTitle from "@mui/material/DialogTitle";
import { DefaultEventsMap } from "@socket.io/component-emitter";
import { useRouter } from "next/router";
import { Socket } from "socket.io-client";

export interface LeaveChatDialogProps {
  socket: Socket<DefaultEventsMap, DefaultEventsMap>;
  open: boolean;
  onClose: () => void;
  onPopState: (e: PopStateEvent) => void;
}

export const LeaveChatDialog = (props: LeaveChatDialogProps) => {

  const router = useRouter();

  const leaveChat = () => {
    window.removeEventListener("popstate", props.onPopState);
    props.socket.disconnect();
    router.push("/home");
  }

  return (
    <Dialog onClose={props.onClose} open={props.open} PaperProps={{ style: { backgroundColor: "#1D1D1D" } }}>
      <DialogTitle textAlign="center" variant="h2">Are you sure you want to leave?</DialogTitle>
      <Typography
        sx={{ m: 3 }}
        variant="h5">Leaving will cause you to lose 4 detection exp and 2 deception exp. Are you sure you want to leave?</Typography>
      <Button variant="contained" sx={{height: 75, m: 3}} onClick={leaveChat}>Leave chat</Button>
    </Dialog>
  )
}