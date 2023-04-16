import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";

export const Features = () => {

  return (
    <Box
    component="section"
    sx={{ display: 'flex', overflow: 'hidden' }}
  >
    <Container sx={{ mt: 15, mb: 30, display: 'flex', position: 'relative' }}>
      <Grid container spacing={5}>
        <Grid item xs={12} md={4}>
          <Box sx={{}}>
            
            <Typography variant="h6" sx={{ my: 5 }}>Create An Idle Game Without Code</Typography>
            <Typography variant="h5">No coding is needed to make a game.</Typography>
          </Box>
        </Grid>
        <Grid item xs={12} md={4}>
          <Box sx={{}}>
            
            <Typography variant="h6" sx={{ my: 5 }}>Create Idle Games Quickly</Typography>
            <Typography variant="h5">Development with Idle Game Engine is far quicker than coding a game.</Typography>
          </Box>
        </Grid>
        <Grid item xs={12} md={4}>
          <Box sx={{}}>
          
            <Typography variant="h6" sx={{ my: 5 }}>No Code With All The Features</Typography>
            <Typography variant="h5">Create a game as complex as you want.</Typography>
          </Box>
        </Grid>
      </Grid>
    </Container>
  </Box>
  );
}