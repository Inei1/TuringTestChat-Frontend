import { Features } from "./homepage/Features";
import { Header } from "./Header";
import { Landing } from "./homepage/Landing";
import { Footer } from "./homepage/Footer";
import { Box } from "@mui/material";
import logo from "./img/TTCbgplainv1.png";
import { Subscribe } from "./homepage/Subscribe";

export const Homepage = () => {

  return (
    <>
      <Box sx={{
        backgroundColor: "secondary.main",
        background: `url(${logo})`,
        backgroundPosition: "center",
        backgroundSize: "100vw",
        backgroundPositionY: 60,
        maxWidth: "100vw",
      }}>
        <Header />
        <Landing />

        {/* <Demo /> */}
        {/* <DragAndDrop /> */}
        {/* <Documentation /> */}
        {/* <Blog /> */}
        <Subscribe />
        <Features />
        <Footer />
      </Box>
      <Box>
        
      </Box>
    </>
  )
}