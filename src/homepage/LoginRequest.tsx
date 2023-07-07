"use client";

import { Box, Button, Container, Grid, Typography } from "@mui/material";
import { Header } from "../Header";
import Link from "next/link";
import { isMobile } from "react-device-detect";

export const LoginRequest = () => {

  return (
    <Box sx={{
      minHeight: "102.5vh",
      backgroundColor: "secondary.main",
      background: "radial-gradient(circle, rgba(19,42,122,1) 0%, rgba(29,29,29,1) 100%)",
      backgroundPosition: "center",
      backgroundSize: "100vw",
      backgroundPositionY: 60,
      maxWidth: "100vw",
    }}>
      <Header />
      <Container>
        <Grid container direction="column" display="flex" alignItems="center">
          <Typography variant="h1" sx={{ my: 10, fontSize: isMobile ? 75 : 100 }}>Log in to view this page</Typography>
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <Link href="/login">
              <Button
                color="info"
                variant="contained">Log in/Sign up</Button>
            </Link>
          </Box>
          <Link href="/">
            <Button variant="contained" sx={{ width: "100%", height: 75, fontSize: 30, mt: 5 }}>Return to home</Button>
          </Link>
        </Grid>
      </Container>
    </Box>
  );
}