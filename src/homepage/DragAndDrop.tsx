import { Box, Button, Container, Grid, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

export const DragAndDrop = () => {

  const navigate = useNavigate();

  return (
    <Box>
      <Container component="section" sx={{ mt: 50, display: 'flex' }}>
        <Grid container>
          <Grid item xs={12} md={6} sx={{ zIndex: 1 }}>
            <Typography variant="h4">Drag and Drop Editor</Typography>
            <Typography variant="h6">
              Use the drag and drop editor to make your own idle game. 
              This editor can be used to position ui elements and add
              functionality to them. Important features such as buildings,
              upgrades, and prestiges are built in to the editor.
            </Typography>
            <Button onClick={() => navigate("/editor/")} sx={{ mt: 1 }} color="secondary" variant="contained">Go To Editor</Button>
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
            sx={{ display: { md: 'block', xs: 'none' }, position: 'relative' }}
          >
            <Box
              component="img"
              src="https://images.unsplash.com/photo-1527853787696-f7be74f2e39a?auto=format&fit=crop&w=750"
              alt="editor image"
              sx={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                width: '100%',
                maxWidth: 600,
              }}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}