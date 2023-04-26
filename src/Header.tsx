import { AppBar, Box, Button, Container, Menu, MenuItem, Toolbar, Typography } from "@mui/material";
import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { LoginStateContext } from "./App";
import { Constants } from "./Constants";
import { setAccesstoken } from "./setAccesstoken";
import { User } from "./User";

export const Header = () => {

  // const checkLogin = async () => {
  //   const user = localStorage.getItem("user");
  //   if (user !== null) {
  //     const accessToken = sessionStorage.getItem("accessToken");
  //     const authStatus = await fetch(Constants.BASE_URL + "api/auth/" + user, {
  //       method: "POST",
  //       headers: { 'Content-Type': 'application/json', "Authorization": "bearer " + accessToken },
  //       credentials: "include",
  //     }).then(res => res.json());
  //     if (!authStatus.succeeded) {
  //       setLoginState({ tabIndex: loginState.tabIndex, loggedIn: false });
  //       localStorage.removeItem("user");
  //     }
  //     if (authStatus.accessToken) {
  //       setAccesstoken(authStatus.accessToken);
  //     }
  //   }
  // }

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
            <Box sx={{ flexGrow: 1 }} />
            {localStorage.getItem("user") === null && <Box sx={{ display: { xs: "none", md: "flex" } }}>
              <Link to="/login">
                <Button
                  color="info"
                  variant="contained">Log in/Sign up</Button>
              </Link>
            </Box>}
            {localStorage.getItem("user") && <User />}
          </Toolbar>
        </Container>
      </AppBar>
    </React.Fragment>
  );
}