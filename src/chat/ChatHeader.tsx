import { AppBar, Box, Container, Grid, IconButton, Menu, MenuItem, Typography } from "@mui/material";
import { Timer } from "./Timer";
import { MoreVert } from "@mui/icons-material";
import { useState } from "react";

export interface ChatHeaderProps {
  chatActive: boolean;
  goal: string;
  endChatTime: number;
  setDialogOpen: (open: boolean) => void;
}

export const ChatHeader = (props: ChatHeaderProps) => {

  const [menuAnchorEl, setMenuAnchorEl] = useState<null | HTMLElement>(null);
  const menuOpen = Boolean(menuAnchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setMenuAnchorEl(event.currentTarget);
  }

  const handleClose = () => {
    setMenuAnchorEl(null);
  }

  const leaveChat = () => {
    props.setDialogOpen(true);
    setMenuAnchorEl(null);
  }

  return (
    <AppBar position="sticky" component="nav">
      <Container maxWidth={"md"}>
        <Grid container>
          <Grid item>
            <Typography
              variant="h3"
              sx={{ mt: 3, mr: 2 }}>You are:</Typography>
          </Grid>
          <Grid item>
            <Grid container direction="column" sx={{ mt: 2 }}>
              <Grid item>
                {props.goal === "Bot" ?
                  <Box component="img" alt="Bot" src="TTCLogov2.png" maxWidth={64} /> :
                  <Box component="img" alt="Human" src="TTCHumanv2.png" maxWidth={64} />}
              </Grid>
              <Grid item>
                <Typography>{props.goal === "Bot" ? "Bot" : "Human"}</Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item sx={{ ml: "auto", mr: 3 }}>
            {props.chatActive && <Timer
              millis={props.endChatTime - Date.now()} />}
          </Grid>
          <IconButton size="medium" onClick={handleClick}>
            <MoreVert color="info" fontSize="large" />
          </IconButton>
          <Menu
            anchorEl={menuAnchorEl}
            open={menuOpen}
            onClose={handleClose}>
              <MenuItem onClick={leaveChat} sx={{color: "#1D1D1D"}}>Leave Chat</MenuItem>
          </Menu>
        </Grid>
      </Container>
    </AppBar>
  );
}