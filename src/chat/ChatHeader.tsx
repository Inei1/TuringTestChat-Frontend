"use client";

import { AppBar, Container, Grid, IconButton, Menu, MenuItem, Typography } from "@mui/material";
import { Timer } from "./Timer";
import { MoreVert } from "@mui/icons-material";
import { useState } from "react";
import Image from "next/image";
import { isMobile } from "react-device-detect";

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
      <Container maxWidth={"lg"}>
        <Grid container direction={"row"} display={"flex"} alignItems={"center"}>
          <Grid item>
            <Typography
              variant="h1"
              sx={{ mr: 2, fontSize: isMobile ? "1.5em" : "3em" }}>You are:</Typography>
          </Grid>
          <Grid item>
            <Grid container direction="column" sx={{ mt: 2 }}>
              <Grid item>
                {props.goal === "Bot" ?
                  <Image src="/TTCLogov2.png" alt="Bot" width={isMobile ? 32 : 64} height={isMobile ? 32 : 64} /> :
                  <Image src="/TTCHumanv2.png" alt="Human" width={isMobile ? 32 : 64} height={isMobile ? 32 : 65} />}
              </Grid>
            </Grid>
          </Grid>
          <Grid item sx={{ ml: "auto", mr: isMobile ? 0 : 3, mt: 0 }}>
            {props.chatActive && <Timer
              millis={props.endChatTime - Date.now()}
              fontSize={isMobile ? "2.5em" : "4em"} />}
          </Grid>
          <IconButton size="small" onClick={handleClick}>
            <MoreVert color="info" fontSize="large" />
          </IconButton>
          <Menu
            anchorEl={menuAnchorEl}
            open={menuOpen}
            onClose={handleClose}>
            <MenuItem onClick={leaveChat} sx={{ color: "#1D1D1D" }}>Leave Chat</MenuItem>
          </Menu>
        </Grid>
      </Container>
    </AppBar>
  );
}