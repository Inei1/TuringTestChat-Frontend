import Link from "next/link";
import { AppBar, Box, Button, Container, Toolbar } from "@mui/material";
import React from "react";

export const Header = () => {

  return (
    <>
      <AppBar position="sticky" component="nav">
        <Container maxWidth="xl">
          <Toolbar>
            <Link
              href="/"
              target="_self"
              style={{ color: "#E9E9E9", fontFamily: "monospace", fontSize: 30, textDecoration: "none" }}>Turing Test Chat
            </Link>
            <Box sx={{ flexGrow: 0.1 }} />
            <Link
              href="/blog"
              target="_self"
              style={{ color: "#E9E9E9", fontFamily: "monospace", fontSize: 20, textDecoration: "none" }}>Blog</Link>
            <Box sx={{ flexGrow: 1 }} />
            <Button
              component={Link}
              href="/subscribe"
              target="_self"
              color="error"
              variant="contained"
              sx={{ mb: 2.5 }}>Sign up for waitlist</Button>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
}