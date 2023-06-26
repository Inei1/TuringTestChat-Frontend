import { Box, Button, Container, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { Header } from "../Header";

export const ErrorPage = ({ resetErrorBoundary }: any) => {

  const navigate = useNavigate();

  const leaveError = () => {
    navigate("/");
    resetErrorBoundary();
  }

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
        <Typography variant="h1">An error has occurred</Typography>
        <Button variant="contained" onClick={leaveError} sx={{ width: "100%", height: 75, fontSize: 30 }}>Return to home</Button>
      </Container>
    </Box>
  );

}