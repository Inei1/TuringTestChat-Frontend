import { Box, Container, Typography } from "@mui/material";
import Header from "../../Header";
import { Footer } from "../../homepage/Footer";
import Head from "next/head";
import Faq from "@/homepage/Faq";
import Link from "next/link";

const FaqPage = () => {
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
        <Container maxWidth="md" sx={{mt: 10}}>
          <Typography sx={{ fontSize: 18, mb: 5 }}>You will be paired anonymously with a human or with ChatGPT on entering the chat room.
            Your task is to perform the Turing Test by identifying which of the two you think you were talking to.</Typography>
          <Typography sx={{ fontSize: 18, my: 5 }}>Your chat partner will also be trying to do the same for you.
            You must simultaneously attempt to convince your partner while also determining what they are.</Typography>
          <Typography sx={{ fontSize: 18, my: 5 }}>You will gain or lose exp based on performance. Successfully guessing your partner's identity and convincing your partner of your own identity will give you up to 10 exp each. Failing to do so for either will cost you up to 3 exp each. If you use the back button or otherwise leave the page, you will lose exp.</Typography>
          <Typography sx={{ fontSize: 18, my: 5 }}>Have any questions? Check out the { }
            <Link href="/faq" style={{ color: "#e9e9e9", fontFamily: "monospace", fontSize: 18 }}>FAQ</Link></Typography>
        </Container>
      </Box>
      <Footer />
    </>
  )
}

export default FaqPage;