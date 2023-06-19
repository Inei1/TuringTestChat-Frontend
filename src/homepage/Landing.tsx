import { Box, Button, Container, Typography } from "@mui/material";
import Link from "next/link";

export const Landing = () => {

  return (
    <>
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          maxWidth: "50vw",
          mt: 5
        }}>
        <Box component="img" alt="Turing Test Chat logo" src="TTCLogov2.png" sx={{ maxWidth: "25vh", }} />
        <Typography variant="h1" sx={{ fontFamily: "monospace", fontSize: 100, fontWeight: "normal", color: "#e9e9e9", mt: 8 }}>Turing Test Chat</Typography>
        <Button component={Link} href="/faq" target="_self" variant="contained">FAQ</Button>
      </Container>
    </>
  );
}
