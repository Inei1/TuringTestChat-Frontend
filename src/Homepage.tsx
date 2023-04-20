import { Features } from "./homepage/Features";
import { Header } from "./Header";
import { Landing } from "./homepage/Landing";
import { Footer } from "./homepage/Footer";
import { Box } from "@mui/material";
import logo from "./img/TTCLogov8.png";

export const Homepage = () => {

  return (
    <Box sx={{
      backgroundColor: "secondary.main",
      background: `url(${logo})`,
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      backgroundPositionY: 60,
      maxWidth: "100vw",
      maxHeight: "100vh",
    }}>
      <Header />
      <Landing />
      <Features />
      {/* <Demo /> */}
      {/* <DragAndDrop /> */}
      {/* <Documentation /> */}
      {/* <Blog /> */}
      {/* <Subscribe /> */}
      <Footer />
    </Box>
  )
}