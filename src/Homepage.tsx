import { Features } from "./homepage/Features";
import Header from "./Header";
import { Landing } from "./homepage/Landing";
import { Footer } from "./homepage/Footer";
import { Box } from "@mui/material";
import Head from "next/head";
import Faq from "./homepage/Faq";
import { useEffect } from "react";

export const Homepage = () => {

  useEffect(() => {
    if (globalThis.ezstandalone) {
      ezstandalone.define(118, 119, 120, 121);
      if (!ezstandalone.enabled) {
        ezstandalone.enable();
        ezstandalone.display();
      } else {
        ezstandalone.refresh();
      }
    }
  }, []);

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
          <meta name="description" content="Perform the Turing Test in a chat with ChatGPT. In this game of deception and detection, distinguishing between ChatGPT and humans is not easy." />
          <meta property="og:title" content="Turing Test Chat | free online Turing Test with ChatGPT" />
          <meta property="og:description" content="Perform the Turing Test in a chat with ChatGPT. In this game of deception and detection, distinguishing between ChatGPT and humans is not easy." />
          <meta property="og:type" content="website" />
          <meta property="og:image" content="https://www.turingtestchat.com/TTCLogov2.png" />
          <meta property="og:url" content="https://www.turingtestchat.com" />

          <meta name="twitter:title" content="Turing Test Chat | free online Turing Test with ChatGPT" />
          <meta name="twitter:description" content="Perform the Turing Test in a chat with ChatGPT. In this game of deception and detection, distinguishing between ChatGPT and humans is not easy." />
          <meta name="twitter:image" content="https://www.turingtestchat.com/TTCLogov2.png" />
          <meta name="twitter:card" content="summary" />
          <meta name="twitter:site" content="https://www.turingtestchat.com/" />

          <link rel="canonical" href="https://www.turingtestchat.com" />
        </Head>
        <Header />
        <Landing />
        <div id="ezoic-pub-ad-placeholder-120"> </div>
        <Features />
        <div id="ezoic-pub-ad-placeholder-118"> </div>
        <Faq />
      </Box>
      <Footer />
    </>
  )
}
