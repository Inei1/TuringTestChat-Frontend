import { Box, Button, Container } from "@mui/material";
import { Header } from "./Header";
import { useLocation } from "react-router-dom";


export const Settings = () => {

  const location = useLocation();
  const { profileImage } = location.state;

  return (
    <Box sx={{ minHeight: "100vh" }}>
      <Header />
      <Container>
        <Box component="img" src={profileImage} />
        <Button variant="text" component="label">
          Update Profile Image
          <input hidden accept="image/*" type="file" />
        </Button>
      </Container>
    </Box>
  );
};