import { Box, Button, Container, Grid, Link, Typography } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useInterval from "use-interval";

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
        <Grid sx={{ mt: 1, ml: "25%", my: 3 }} container spacing={1}>
          <Grid container spacing={5}>
            <Grid item>
              <Typography variant="h3">Open beta starts in</Typography>
            </Grid>
            <Grid item>
              {/* time of midnight Jun 3 2023 UTC*/}
              <Typography variant="h3" color="primary">{Math.floor(timeUntilBeta / 8.64e+7) + " days " + new Date(timeUntilBeta).toISOString().substring(11, 19)}</Typography>
            </Grid>
          </Grid>
        </Grid>
        <Button variant="contained" onClick={() => navigate("/betafaq")}>beta FAQ</Button>
      </Container>
    </>
  );
}
