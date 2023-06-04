import { Features } from "./homepage/Features";
import { Header } from "./Header";
import { Landing } from "./homepage/Landing";
import { Footer } from "./homepage/Footer";
import { Box } from "@mui/material";
import { Helmet } from "react-helmet-async";
import { Blog } from "./homepage/Blog";

export const Homepage = () => {

  return (
    <>
      <Helmet>
        <title>Turing Test Chat | free online Turing Test with ChatGPT</title>
      </Helmet>
      <Box sx={{
        backgroundColor: "secondary.main",
        background: "radial-gradient(circle, rgba(19,42,122,1) 0%, rgba(29,29,29,1) 100%)",
        backgroundPosition: "center",
        backgroundSize: "100vw",
        backgroundPositionY: 60,
        maxWidth: "100vw",
      }}>
        <Header />
        <Landing />
        <Features />
        <Blog disableHeader disableFooter disableBackground disableTitle />
      </Box>
      <Footer />
    </>
  )
}
