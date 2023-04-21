import { Box, Button, Container, Grid, Typography } from "@mui/material";
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
          mt: "55vh",
          maxWidth: 800,
        }}>
        <Grid sx={{ mt: 1, ml: 50 }} container spacing={1}>
          <Grid item xs={12} md={5}>
            <Typography>"The Turing test... is a test of a machine's ability to exhibit intelligent behaviour equivalent to, or indistinguishable from, that of a human."</Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="h4"> - Wikipedia</Typography>
          </Grid>
        </Grid>

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
