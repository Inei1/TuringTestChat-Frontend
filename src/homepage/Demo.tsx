import { Box, Button, Container } from "@mui/material";
import React from "react";

export const Demo = () => {
  return (
    <Box>
      <Container
        sx={{
          mt: 0,
          mb: 14,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}>
        <Box
          component="img"
          src="https://images.unsplash.com/photo-1527853787696-f7be74f2e39a?auto=format&fit=crop&w=750"
          alt="feature"
          sx={{ width: "60%" }}
        />
        <br />
        <Button color="warning" variant="contained">Try a demo</Button>
      </Container>
    </Box>
  );
}