import { Box, Button, Container, Typography } from "@mui/material";
import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { LoginStateContext } from "../App";

export const Landing = () => {

  const { loginState, setLoginState } = useContext(LoginStateContext);

  const navigate = useNavigate();

  return (
    <>
      <Container
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          mt: "60vh",
        }}>
        <Typography>Explain the turing test, challenge users to take it.</Typography>
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
