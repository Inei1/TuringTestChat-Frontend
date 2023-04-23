import { Features } from "./homepage/Features";
import { Header } from "./Header";
import { Landing } from "./homepage/Landing";
import { Footer } from "./homepage/Footer";
import { Box } from "@mui/material";
import logo from "./img/TTCLogov13.png";
import { Subscribe } from "./homepage/Subscribe";

export const Homepage = () => {

  return (
    <>
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

        {/* <Demo /> */}
        {/* <DragAndDrop /> */}
        {/* <Documentation /> */}
        {/* <Blog /> */}
        <Subscribe />
      </Box>
      <Box>
        <Features />
        <Footer />
      </Box>
    </>
  )
}