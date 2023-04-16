import { Features } from "./homepage/Features";
import { Header } from "./Header";
import { Landing } from "./homepage/Landing";
import { Footer } from "./homepage/Footer";
import { Box } from "@mui/material";

export const Homepage = () => {

  return (
    <Box sx={{backgroundColor: "secondary.main"}}>
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