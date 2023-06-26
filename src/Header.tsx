import Link from "next/link";
import { AppBar, Box, Button, Container, Toolbar } from "@mui/material";
import React, { useContext } from "react";
import { LoginContext } from "./pages/_app";
import { User } from "./User";

export const Header = () => {

  const { user, setUser } = useContext(LoginContext);

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
              href="/home"
              style={{ color: "#e9e9e9", fontFamily: "monospace", fontSize: 20, textDecoration: "none", fontWeight: "normal" }}>Chat</Link>
            <Box sx={{ flexGrow: 0.1 }} />
            <Link
              href="/blog"
              color="info"
              style={{
                color: "#e9e9e9",
                fontFamily: "monospace",
                fontSize: 20,
                textDecoration: "none",
                fontWeight: "normal"
              }}>Blog</Link>
            <Box sx={{ flexGrow: 1 }} />
            {user === null && <Box sx={{ display: { xs: "none", md: "flex" } }}>
              <Link href="/login">
                <Button
                  color="info"
                  variant="contained">Log in/Sign up</Button>
              </Link>
            </Box>}
            {user && <User />}
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
}
