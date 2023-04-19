import { Box, Button, Container, styled, Typography } from "@mui/material";
import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { LoginStateContext } from "../App";
import { Login } from "./Login";

export const Landing = () => {

  const { loginState, setLoginState } = useContext(LoginStateContext);

  const navigate = useNavigate();

  return (
    <>
      <Container
        sx={{
          mt: 3,
          mb: -10,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}>
        <Typography>Explain the turing test, challenge users to take it.</Typography>
        {localStorage.getItem("user") === null &&
          <React.Fragment>
            <Button
              onClick={() => setLoginState({ tabIndex: 0, loggedIn: loginState.loggedIn })}
              sx={{ mt: 1 }}
              color="primary"
              variant="contained">Log in</Button>
            <Button
              onClick={() => setLoginState({ tabIndex: 1, loggedIn: loginState.loggedIn })}
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
    </>
  );
}
