import { Box } from "@mui/material";
import Header from "../../Header";
import { Footer } from "../../homepage/Footer";
import Head from "next/head";
import Faq from "@/homepage/Faq";
import { useEffect } from "react";

const FaqPage = () => {

  useEffect(() => {
    if (globalThis.ezstandalone) {
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
      <Box sx={{ maxWidth: "100vw", minHeight: "100vh", background: "radial-gradient(circle, rgba(19,42,122,1) 0%, rgba(29,29,29,1) 100%)", }}>
        <Head>
          <title>FAQ | Turing Test Chat</title>
          <meta name="description" content="Perform the Turing Test in a chat with ChatGPT. In this game of deception and detection, distinguishing between ChatGPT and humans is not easy." />
          <meta property="og:title" content="FAQ | Turing Test Chat" />
          <meta property="og:description" content="Perform the Turing Test in a chat with ChatGPT. In this game of deception and detection, distinguishing between ChatGPT and humans is not easy." />
          <meta property="og:type" content="website" />
          <meta property="og:image" content="https://www.turingtestchat.com/TTCLogov2.png" />
          <meta property="og:url" content="https://www.turingtestchat.com" />

          <meta name="twitter:title" content="FAQ | Turing Test Chat" />
          <meta name="twitter:description" content="Perform the Turing Test in a chat with ChatGPT. In this game of deception and detection, distinguishing between ChatGPT and humans is not easy." />
          <meta name="twitter:image" content="https://www.turingtestchat.com/TTCLogov2.png" />
          <meta name="twitter:card" content="summary" />
          <meta name="twitter:site" content="https://www.turingtestchat.com/" />
        </Head>
        <Header />
        <Faq />
        </Box>
      <Footer />
    </>
  )
}

export default FaqPage;