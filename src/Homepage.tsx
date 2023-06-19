import { Features } from "./homepage/Features";
import { Header } from "./Header";
import { Landing } from "./homepage/Landing";
import { Footer } from "./homepage/Footer";
import { Box } from "@mui/material";
import { Subscribe } from "./homepage/Subscribe";
import { Explanations } from "./homepage/Explanations";
import Head from "next/head";

export const Homepage = () => {

  return (
    <>
      <Box sx={{
        backgroundColor: "secondary.main",
        background: "radial-gradient(circle, rgba(19,42,122,1) 0%, rgba(29,29,29,1) 100%)",
        backgroundPosition: "center",
        backgroundSize: "100vw",
        backgroundPositionY: 60,
        maxWidth: "100vw",
      }}>
        <Head>
          <title>Turing Test Chat | Online Turing Test with ChatGPT</title>
        </Head>
        <Header />
        <Landing />
        <Subscribe />
        <Features />
        <Explanations />
      </Box>
      <Footer />
      <Box>

      </Box>
    </>
  )
}