import { AppBar, Box, Button, Container, Toolbar, Typography } from "@mui/material";
import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { LoginStateContext } from "./App";
import { Constants } from "./Constants";
import { setAccesstoken } from "./setAccesstoken";

export const Header = () => {

  const { loginState, setLoginState } = useContext(LoginStateContext);

  const navigate = useNavigate();

  const logout = () => {
    localStorage.clear();
    setAccesstoken("");
    setLoginState({ tabIndex: 0, loggedIn: false });
  }

  const checkLogin = async () => {
    const user = localStorage.getItem("user");
    if (user !== null) {
      const accessToken = sessionStorage.getItem("accessToken");
      const authStatus = await fetch(Constants.BASE_URL + "api/auth/" + user, {
        method: "POST",
        headers: { 'Content-Type': 'application/json', "Authorization": "bearer " + accessToken },
        credentials: "include",
      }).then(res => res.json());
      if (!authStatus.succeeded) {
        setLoginState({ tabIndex: loginState.tabIndex, loggedIn: false });
        localStorage.removeItem("user");
      }
      if (authStatus.accessToken) {
        setAccesstoken(authStatus.accessToken);
      }
    }
  }

  return (
    <React.Fragment>
      <AppBar position="sticky" component="nav">
        <Container maxWidth="xl">
          <Toolbar>
            <Typography
              color="inherit"
              onClick={() => navigate("/")}
              variant="h5"
              sx={{
                '&:hover': {
                  cursor: 'pointer'
                }
              }}>Turing Test Chat</Typography>
            <Box sx={{ flexGrow: 0.1 }} />
            {/* <Button onClick={() => navigate("/documentation/")} color="inherit" variant="text">Documentation</Button> */}
            {/* <Button onClick={() => navigate("/browsegames/")} color="inherit" variant="text">Browse Games</Button> */}
            {/* <Button onClick={() => navigate("/news/")} color="inherit" variant="text">News</Button> */}
            <Box sx={{ flexGrow: 1 }} />
            {localStorage.getItem("user") === null && <Box sx={{ display: { xs: "none", md: "flex" } }}>
              <Button
                onClick={() => navigate("/waitlist")}
                color="error"
                variant="contained">Sign up for waitlist</Button>
            </Box>}
            {localStorage.getItem("user") !== null &&
              <Button onClick={(logout)} color="success" variant="contained">Log out</Button>}
          </Toolbar>
        </Container>
      </AppBar>
    </React.Fragment>
  );
}