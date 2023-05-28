import { Box, Button, Container, Grid, Link, Typography } from "@mui/material";
import { useState } from "react";
import useInterval from "use-interval";
import { useNavigate } from "react-router";

export const Landing = () => {

  const [timeUntilBeta, setTimeUntilBeta] = useState(1685750400000 - Date.now());

  const navigate = useNavigate();

  useInterval(() => {
    setTimeUntilBeta(timeUntilBeta - 1000);
  }, 1000)

  return (
    <>
      <Container
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          maxWidth: "50vw",
          mt: 5
        }}>
        <Box component="img" alt="Turing Test Chat logo" src="TTCLogov2.png" sx={{ maxWidth: "25vh", }} />
        <Typography variant="h1" style={{ fontFamily: "monospace", fontSize: 100, fontWeight: "normal", color: "#e9e9e9" }}>Turing Test Chat</Typography>
        
        <Button variant="contained" onClick={() => navigate("/betafaq")}>beta FAQ</Button>
      </Container>
    </>
  );
}
