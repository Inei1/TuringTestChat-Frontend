import { Box, Container, Grid, Link, Typography } from "@mui/material";
import { Header } from "../../Header";
import { Footer } from "../../homepage/Footer";
import Head from "next/head";
import { Subscribe } from "@/homepage/Subscribe";
import Image from "next/image";

const DevUpdate2 = () => {
  return (
    <>
      <Head>
        <title>Developer Update 2: Websocket Chat Application | Turing Test Chat</title>
        <meta name="description" content="Perform the Turing Test in a chat with ChatGPT. In this game of deception and detection, distinguishing between ChatGPT and humans is not easy." />
        <meta property="og:title" content="Developer Update 2: Websocket Chat Application | Turing Test Chat" />
        <meta property="og:description" content="Perform the Turing Test in a chat with ChatGPT. In this game of deception and detection, distinguishing between ChatGPT and humans is not easy." />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://www.turingtestchat.com/TTCLogov2.png" />
        <meta property="og:url" content="https://www.turingtestchat.com" />

        <meta name="twitter:title" content="Developer Update 2: Websocket Chat Application | Turing Test Chat" />
        <meta name="twitter:description" content="Perform the Turing Test in a chat with ChatGPT. In this game of deception and detection, distinguishing between ChatGPT and humans is not easy." />
        <meta name="twitter:image" content="https://www.turingtestchat.com/TTCLogov2.png" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="https://www.turingtestchat.com/" />
      </Head>
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
        <Container component="section" maxWidth="md">
          <Typography variant="h1" sx={{ fontSize: 40, mt: 5 }}>Turing Test Chat Developer Update #2</Typography>
          <Typography variant="h6" sx={{ mt: 1, mb: 3, fontStyle: "italic" }}>Building the chat application for Turing Test Chat.</Typography>
          <Typography sx={{ fontSize: 18, mt: 5 }}>
            In this developer update, the early working prototype of chat room functionality will be covered.
            If you would prefer to view this blog post in video form, here is a short two-minute video:</Typography>
          <Grid container justifyContent="center" sx={{ my: 3 }}>
            <iframe style={{ aspectRatio: 16 / 9 }} width="100%" src="https://www.youtube.com/embed/lNjVTEhaL-s" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
          </Grid>
          <Typography>When you click on the {"\""}Enter chat room{"\""} button in the chat home (seen in the end of the first developer update), it will take you to the waiting for chat screen:</Typography>
          <Image alt="Waiting for chat" src="/b2waiting.png" width={850} height={478} />
          <Typography>Once another user has entered the chat room, it will immediately trigger a chat between the two users.
            Both users will have 30 seconds to join the chat, and if a user doesn{"\'"}t click the button in time, they lose a credit.</Typography>
          <Image alt="Chat found" src="/b2found.png" width={850} height={478} />
          <Typography>Once both users have accepted the chat, it transitions to a chat room where both users will have 2 minutes and 30 seconds to speak to each other.</Typography>
          <Image alt="Chatting" src="/b2chat.png" width={850} height={478} />
          <Typography>At the end of the chat, you are given 30 seconds to choose between five options based on who you think you were talking to.
            If you{"\'"}re sure you spoke to a human, you can choose the {"\""}definitely a human{"\""} option.
            If you actually did speak to a human, you will be given 10 points, but if it was a bot you will lose 3 points.
            Choosing {"\""}possibly a human{"\""} is good for when you aren{"\'"}t sure, as being correct with it will give you 4 points.
            The consequences for failure are low as you only lose 1 point when wrong.
            Choosing {"\""}I don{"\'"}t know{"\""} will give you 0 points on success or failure.
            {"\""}possibly a bot{"\""} and {"\""}definitely a bot{"\""} are similar to the choices for humans, as they will give you 10 and 4 points respectively if you spoke to a bot and take away 3 and 1 points if you spoke to a human.</Typography>
          <Image alt="End of chat" src="/b2end.png" width={850} height={478} />
          <Typography>At the end of the chat, both users{"\'"} results are displayed.
            Points are awarded based on your selection and your opponent{"\'"}s selection.
            If your opponent was wrong about your identity, you will gain points inversely to how selection works.
            If they say {"\""}definitely a bot{"\""} you earn 10 points, and if they say {"\""}possibly a bot{"\""} then you earn 4 points.
            You will, however, lose points if you opponent thinks you are a human.
            The one exception to this is if your opponent chooses {"\""}I don{"\'"}t know,{"\""} and you will earn 2 points if they select it.</Typography>
          <Image alt="End of results" src="/b2result.png" width={850} height={478} />
          <Typography>After these events, you are returned to the chat home screen and can play again.</Typography>
          <Typography>This concludes the second developer update for Turing Test Chat.
            If this sounds interesting, you should sign up for the waitlist.
            If you{"\'"}re interested in the coding behind this developer update, you can check out the</Typography>
          <Link href="/blog/eng-blog-2">engineering blog</Link>.
          <Subscribe />
        </Container>
      </Box>
      <Footer />
    </>
  );
}

export default DevUpdate2;