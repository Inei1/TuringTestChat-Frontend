import { Box, Button, Container, styled, Typography } from "@mui/material";
import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { LoginStateContext } from "../App";
import { LoginDialog } from "./LoginDialog";

const LandingLayoutRoot = styled('section')(({ theme }) => ({
  color: theme.palette.common.black,
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  [theme.breakpoints.up("sm")]: {
    height: '60vh',
    minHeight: 500,
    maxHeight: 1600,
  }
}));

export const Landing = () => {

  const { loginState, setLoginState } = useContext(LoginStateContext);

  const navigate = useNavigate();

  return (
    <LandingLayoutRoot>
      <LoginDialog
        open={loginState.open}
        tabIndex={loginState.tabIndex}
        onClose={() => setLoginState({ open: false, tabIndex: 0, loggedIn: loginState.loggedIn })}
        onChange={(index: number) => setLoginState({ open: loginState.open, tabIndex: index, loggedIn: loginState.loggedIn })} />
      <Container
        sx={{
          mt: 3,
          mb: -10,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}>
        <Box
          component="img"
          src="IGE-logo2.png"
          alt="IGE logo"
          sx={{ width: 275, height: 260, mb: 5 }}
        />
        {localStorage.getItem("user") === null &&
          <React.Fragment>
            <Button
              onClick={() => setLoginState({ open: true, tabIndex: 0, loggedIn: loginState.loggedIn })}
              sx={{ mt: 1 }}
              color="primary"
              variant="contained">Log in</Button>
            <Button
              onClick={() => setLoginState({ open: true, tabIndex: 1, loggedIn: loginState.loggedIn })}
              sx={{ mt: 1 }}
              color="success"
              variant="contained">Sign up</Button>
          </React.Fragment>}
        {localStorage.getItem("user") !== null &&
          <Box sx={{ m: 5.5 }} />}
        {localStorage.getItem("user") === null && <Button
          onClick={() => navigate("/editor/")}
          sx={{ mt: 1 }}
          color="info"
          variant="contained">Try out the Editor (no login required)</Button>}
        {localStorage.getItem("user") !== null && <Button
          onClick={() => navigate("/editor/")}
          sx={{ mt: 1 }}
          color="info"
          variant="contained">Go to editor</Button>}
        {/* <Button sx={{ mt: 1 }} color="warning" variant="contained">Try a demo</Button> */}
        <Box
          sx={{
            position: 'absolute',
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
            backgroundColor: 'inherit',
            opacity: 0.5,
            zIndex: -1,
          }}>
        </Box>
      </Container>
    </LandingLayoutRoot>
  );
}
