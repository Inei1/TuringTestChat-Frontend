import { Box, Button, Container, Grid, Typography } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Documentation = () => {

  const [open, setOpen] = useState(false);

  const navigate = useNavigate();

  return (
    <Container component="section" sx={{ mt: 50, display: 'flex' }}>
      <Grid container>
        <Grid item xs={12} md={6} sx={{ zIndex: 1 }}>
          <Box
            sx={{
              position: 'relative',
              top: -67,
              left: -67,
              right: 0,
              bottom: 0,
              width: '100%',
            }}
          />
          {/* <Box
            component="img"
            src="https://images.unsplash.com/photo-1527853787696-f7be74f2e39a?auto=format&fit=crop&w=750"
            alt="call to action"
            sx={{
              position: 'relative',
              top: -28,
              left: -28,
              right: 0,
              bottom: 0,
              width: '100%',
              maxWidth: 600,
            }}
          /> */}
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          sx={{ display: { md: 'block', xs: 'none' }, position: 'relative' }}
        >
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              bgcolor: 'inherit',
              py: 8,
              px: 3,
            }}
          >
            <Box>
              <Typography variant="h4" component="h4" gutterBottom>
                Extensive Documentation (Soon™)
              </Typography>
              <Typography variant="h5">
                The documentation will probably be good when it becomes real.
              </Typography>
              <Button onClick={() => navigate("/documentation/")} color="primary" variant="contained">
                View Documentation
              </Button>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}