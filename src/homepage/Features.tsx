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
            
            <Typography variant="h6" sx={{ my: 5 }}>Give others the turing test</Typography>
            <Typography variant="h5">Blog.</Typography>
          </Box>
        </Grid>
        <Grid item xs={12} md={4}>
          <Box sx={{}}>
            
            <Typography variant="h6" sx={{ my: 5 }}>Can you pass the turing test?</Typography>
            <Typography variant="h5">Try to convince others that you are a person. Alternatively, fool others into thinking you are a bot.</Typography>
          </Box>
        </Grid>
        <Grid item xs={12} md={4}>
          <Box sx={{}}>
          
            <Typography variant="h6" sx={{ my: 5 }}>Blog</Typography>
            <Typography variant="h5">Blog.</Typography>
          </Box>
        </Grid>
      </Grid>
    </Container>
  </Box>
  );
}