import { Box, Button, Container, Typography } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { Header } from "../Header";

export const LoginRequest = () => {

  const navigate = useNavigate();

  return (
    <Box sx={{
      minHeight: "100vh",
      backgroundColor: "secondary.main",
      background: "radial-gradient(circle, rgba(19,42,122,1) 0%, rgba(29,29,29,1) 100%)",
      backgroundPosition: "center",
      backgroundSize: "100vw",
      backgroundPositionY: 60,
      maxWidth: "100vw",
    }}>
      <Header />
      <Container>
        <Typography variant="h1">Log in to view this page</Typography>
        <Box sx={{ display: { xs: "none", md: "flex" } }}>
          <Link to="/login">
            <Button
              color="info"
              variant="contained">Log in/Sign up</Button>
          </Link>
        </Box>
        <Button variant="contained" onClick={() => navigate("/")} sx={{ width: "100%", height: 75, fontSize: 30 }}>Return to home</Button>
      </Container>
    </Box>
  );
}