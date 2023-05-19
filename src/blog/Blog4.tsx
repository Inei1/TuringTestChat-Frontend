import { Box, Container, Grid, Typography } from "@mui/material";
import { Header } from "../Header";
import { Footer } from "../homepage/Footer";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

export const Blog4 = () => {
  return (
    <>
      <Helmet>
        <title>Developer Update 2: Websocket Chat Application | Turing Test Chat</title>
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
          <Typography variant="h1" sx={{ fontSize: 40, mt: 5 }}>Turing Test Chat Developer Update #2</Typography>
          <Typography variant="h6" sx={{ mt: 1, mb: 3, fontStyle: "italic" }}>Building the chat application for Turing Test Chat.</Typography>
          <Typography sx={{ fontSize: 18, mt: 5 }}>
            In this developer update, the early working prototype of chat room functionality will be covered.
            If you would prefer to view this blog post in video form, here is a short two-minute video:
            <Grid container justifyContent="center" sx={{ my: 3 }}>
              <iframe style={{ aspectRatio: 16 / 9 }} width="100%" src="https://www.youtube.com/embed/lNjVTEhaL-s" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
            </Grid>
            When you click on the "Enter chat room" button in the chat home (seen in the end of the first developer update), it will take you to the waiting for chat screen:
            <Box component="img" alt="Waiting for chat" src="../b2waiting.png" sx={{ maxWidth: "100%", color: "#e9e9e9", my: 2 }} />
            Once another user has entered the chat room, it will immediately trigger a chat between the two users.
            Both users will have 30 seconds to join the chat, and if a user doesn't click the button in time, they lose a credit.
            <Box component="img" alt="Chat found" src="../b2found.png" sx={{ maxWidth: "100%", color: "#e9e9e9", my: 2 }} />
            Once both users have accepted the chat, it transitions to a chat room where both users will have 2 minutes and 30 seconds to speak to each other.
            <Box component="img" alt="Chatting" src="../b2chat.png" sx={{ maxWidth: "100%", color: "#e9e9e9", my: 2 }} />
            At the end of the chat, you are given 30 seconds to choose between five options based on who you think you were talking to.
            If you're sure you spoke to a human, you can choose the "definitely a human" option.
            If you actually did speak to a human, you will be given 10 points, but if it was a bot you will lose 3 points.
            Choosing "possibly a human" is good for when you aren't sure, as being correct with it will give you 4 points.
            The consequences for failure are low as you only lose 1 point when wrong.
            Choosing "I don't know" will give you 0 points on success or failure.
            "possibly a bot" and "definitely a bot" are similar to the choices for humans, as they will give you 10 and 4 points respectively if you spoke to a bot and take away 3 and 1 points if you spoke to a human.
            <Box component="img" alt="End of chat" src="../b2end.png" sx={{ maxWidth: "100%", color: "#e9e9e9", my: 2 }} />
            At the end of the chat, both users' results are displayed.
            Points are awarded based on your selection and your opponent's selection.
            If your opponent was wrong about your identity, you will gain points inversely to how selection works.
            If they say "definitely a bot" you earn 10 points, and if they say "possibly a bot" then you earn 4 points.
            You will, however, lose points if you opponent thinks you are a human.
            The one exception to this is if your opponent chooses "I don't know," and you will earn 1 point if they select it.
            <Box component="img" alt="End of results" src="../b2result.png" sx={{ maxWidth: "100%", color: "#e9e9e9", my: 2 }} />
            After these events, you are returned to the chat home screen and can play again.
            <p />
            This concludes the second developer update for Turing Test Chat.
            If this sounds interesting, you should sign up for the {}
            <Link to="/waitlist" color="info"
              style={{
                color: "#e9e9e9",
                fontFamily: "monospace",
              }}>waitlist</Link>.
            If you're interested in the coding behind this developer update, you can check out the {}
            <Link to="/blog/3" color="info"
              style={{
                color: "#e9e9e9",
                fontFamily: "monospace",
              }}>engineering blog</Link>.
          </Typography>
        </Container>
      </Box>
      <Footer />
    </>
  );
}