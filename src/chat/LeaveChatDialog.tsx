import { Button, Typography } from "@mui/material";
import Dialog from "@mui/material/Dialog"
import DialogTitle from "@mui/material/DialogTitle";
import { useNavigate } from "react-router-dom";

export interface LeaveChatDialogProps {
  open: boolean;
  onClose: () => void;
}

export const LeaveChatDialog = (props: LeaveChatDialogProps) => {

  const navigate = useNavigate();

  //"#1D1D1D"
  return (
    <Dialog onClose={props.onClose} open={props.open} PaperProps={{ style: { backgroundColor: "#1D1D1D" } }}>
      <DialogTitle textAlign="center" variant="h2">Are you sure you want to leave?</DialogTitle>
      <Typography
        sx={{ m: 3 }}
        variant="h5">Leaving will cause you to lose 5 detection exp and 5 deception exp. Are you sure you want to leave?</Typography>
      <Button variant="contained" sx={{height: 75, m: 3}} onClick={() => navigate("/home")}>Leave chat</Button>
    </Dialog>
  )
}