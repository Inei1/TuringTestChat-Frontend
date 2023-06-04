import { Box, Button, Container, Grid, Typography } from "@mui/material";
import { useState } from "react";
import useInterval from "use-interval";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";

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
        <Box component="img" alt="Turing Test Chat logo" src="TTCLogov2.png" sx={{ maxHeight: "25vh", }} />
        <Typography variant="h1" style={{ fontFamily: "monospace", fontSize: 100, fontWeight: "normal", color: "#e9e9e9" }}>Turing Test Chat</Typography>
        <Link to="/login" style={{ marginTop: "2em", marginBottom: "2em" }}>
          <Button
            color="info"
            variant="contained">Create Free Account</Button>
        </Link>
        <Link to="/faq">
          <Button variant="contained" color="success">FAQ</Button>
        </Link>
      </Container>
    </>
  );
}
