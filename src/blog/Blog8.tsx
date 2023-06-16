import { Box, Container, List, ListItem, Typography, Link as MuiLink } from "@mui/material";
import { Header } from "../Header";
import { Footer } from "../homepage/Footer";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Subscribe } from "../homepage/Subscribe";

export const Blog8 = () => {
  return (
    <>
      <Helmet>
        <title>What is the Turing Test? | Turing Test Chat</title>
      </Helmet>
      <Box sx={{
        backgroundColor: "secondary.main",
        background: "radial-gradient(circle, rgba(19,42,122,1) 0%, rgba(29,29,29,1) 100%)",
        backgroundPosition: "center",
        backgroundSize: "100vw",
        backgroundPositionY: 60,
        maxWidth: "100vw",
        minHeight: "100vh",
      }}>
        <Header />
        <Container component="section">
          <Typography variant="h1" sx={{ fontSize: 40, mt: 5 }}>What is the Turing Test?</Typography>
          <Typography variant="h6" sx={{ mt: 1, mb: 3, fontStyle: "italic" }}>Turing Test explained</Typography>
          <Typography sx={{ fontSize: 18, mt: 1 }}>
            The Turing Test, sometimes referred to as Test of Turing or the imitation game, is a test of a machine's ability to communicate like a human.
          </Typography>
          {/* ai chat game */}
          <Typography sx={{ fontSize: 22, mt: 2 }}>Limitations of the Turing Test</Typography>
          <Typography sx={{ fontSize: 18, mt: 1 }}>
            The Chinese room experiment.
          </Typography>
          <Typography sx={{ fontSize: 22, mt: 2 }}>Want to try out an online Turing Test?</Typography>
          <Typography sx={{ fontSize: 18, mt: 1 }}>
            Now that you know about the Turing Test, do you want to try it yourself?
            In Turing Test Chat, you can talk to a ChatGPT AI chatbot who tries to deceive you into thinking it's a human.
            To make it interesting, the AI bot will sometimes try to convince you that it truly is a bot.
            Now add some other humans in the chat rooms who will try to convince you that they are a bot instead.
            The combination of this means you're performing the Turing Test with ChatGPT while playing a game at the same time!
            Sign up for the free { }
            waitlist to participate in an online Turing Test upon release!
            <Subscribe />
          </Typography>
        </Container>
      </Box>
      <Footer />
    </>
  );
}