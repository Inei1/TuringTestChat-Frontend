import { Box, Button, Container, TextField, Typography } from "@mui/material";
import React, { FormEvent, useState } from "react";

export const Subscribe = () => {

  const [open, setOpen] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setOpen(true);
  };

  return (
    <Box>
      <Container component="section" sx={{ mt: 50 }}>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            bgcolor: 'inherit',
            py: 8,
            px: 12,
          }}
        >
          <Box component="form" onSubmit={handleSubmit} sx={{ maxWidth: 400 }}>
            <Typography variant="h2" component="h2" gutterBottom>
              Subscribe
            </Typography>
            <Typography variant="h5">
              Subscribe to emails related to Idle Game Engine that may or may not ever exist
            </Typography>
            <TextField
              placeholder="Your email"
              variant="standard"
              sx={{ width: '100%', mt: 3, mb: 2 }}
            />
            <Button
              type="submit"
              color="error"
              variant="contained"
              sx={{ width: '100%' }}
            >
              Keep me updated
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}