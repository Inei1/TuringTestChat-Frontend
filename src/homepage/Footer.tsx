import { Container, Grid, Link } from "@mui/material";
import React from "react";

export const Footer = () => {
  return (
    <Container sx={{mb: 50}}>
      <hr />
      <Grid sx={{mt: 1}} container spacing={5}>
        <Grid item xs={12} md={4}>
          <Link target="_blank" href="https://discord.com/invite/kpjFFnb9Mn">Discord</Link>
        </Grid>
        <Grid item xs={12} md={4}>
          <Link target="_blank" href="https://old.reddit.com/r/IdleGameEngine/">Reddit</Link>
        </Grid>
        <Grid item xs={12} md={4}>
          <Link target="_blank" href="https://neilmoon.me/">I'm looking for a job!</Link>
        </Grid>
      </Grid>
    </Container>
  );
}
