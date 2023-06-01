import { AppBar, Box, Button, Container, Toolbar } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

export const Header = () => {

  return (
    <React.Fragment>
      <AppBar position="sticky" component="nav">
        <Container maxWidth="xl">
          <Toolbar>
            <Link
              color="inherit"
              to="/"
              style={{ color: "#e9e9e9", fontFamily: "monospace", fontSize: 30, textDecoration: "none" }}>Turing Test Chat
            </Link>
            <Box sx={{ flexGrow: 0.1 }} />
            <Link
              to="/home"
              color="info"
              style={{ color: "#e9e9e9", fontFamily: "monospace", fontSize: 20, textDecoration: "none", fontWeight: "normal" }}>Chat</Link>
            <Box sx={{ flexGrow: 0.1 }} />
            <Link
              to="/blog"
              color="info"
              style={{
                color: "#e9e9e9",
                fontFamily: "monospace",
                fontSize: 20,
                textDecoration: "none",
                fontWeight: "normal"
              }}>Blog</Link>
            <Box sx={{ flexGrow: 1 }} />
            <Box sx={{ display: { xs: "none", md: "flex" } }}>
              <Link to="/waitlist">
                <Button
                  color="error"
                  variant="contained">Sign up for waitlist</Button>
              </Link>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </React.Fragment>
  );
}