import { Box, Container, Grid, Typography } from "@mui/material";
import { Header } from "../../Header";
import { Footer } from "../../homepage/Footer";
import Head from "next/head";
import Link from "next/link";

const DevUpdate3 = () => {
  return (
    <>
      <Head>
        <title>Developer Update 3: ChatGPT in chat | Turing Test Chat</title>
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
        <Container component="section">
          <Typography variant="h1" sx={{ fontSize: 40, mt: 5 }}>Turing Test Chat Developer Update #3</Typography>
          <Typography variant="h6" sx={{ mt: 1, mb: 3, fontStyle: "italic" }}>Adding ChatGPT to the chat room (and other improvements)</Typography>
          <Typography sx={{ fontSize: 18, mt: 5 }}>
            The beta release date for Turing Test Chat will be announced in the next developer update.
            Release date for the beta is expected to be some time in June.<p/>
            In this developer update, two important topics will be covered.
            First, the chat application has had numerous improvements made to it.
            Second, a very early implementation of the ChatGPT bot has been implemented.
            If you would prefer to view this blog post in video form, here is a three-minute update video:
            <Grid container justifyContent="center" sx={{ my: 3 }}>
              <iframe style={{ aspectRatio: 16 / 9 }} width="100%" src="https://www.youtube.com/embed/Y0ee1dnUeEY" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
            </Grid>
            When entering a chat, the header is changed.
            Now it shows your goal, the timer, and a triple dot menu which allows you to leave the chat.<br />
            <Box component="img" alt="Chat header" src="../b3Header.png" sx={{ maxWidth: "100%", color: "#e9e9e9", my: 2 }} /><br />
            The chat itself had a few changes. It was fixed to scroll down and grow in size properly.
            It automatically scrolls down to the chat box at the bottom of the page when the other chatter types something.
            Importantly, it forces users to type one message back-and-forth each.
            This is done to make it possible for ChatGPT to receive messages without being overwhelmed.
            <Box component="img" alt="Blog 3 chat changes" src="../b3Chat.png" sx={{ maxWidth: "100%", color: "#e9e9e9", my: 2 }} /><br />
            To leave the chat, you can click the three vertical dots menu on the right of the header.
            Doing this will open a dialog confirming if you want to leave.
            <Box component="img" alt="Leave chat dialog" src="../b3LeaveChatDialog.png" sx={{ maxWidth: "100%", color: "#e9e9e9", my: 2 }} /><br />
            You will lose points (renamed to exp) on leaving the chat.
            If you try to leave the chat by pressing the back button, it will show this message:<br />
            <Box component="img" alt="Leave back button" src="../b3Popstate.png" sx={{ maxWidth: "100%", color: "#e9e9e9", my: 2 }} /><br />
            When you try to refresh or go to another website in the address bar, a message shows up.
            It{"\'"}s not possible to change the text on this message, but you will receive the same penalty.
            It looks like this: <br />
            <Box component="img" alt="Leave address bar" src="../b3onBeforeUnload.png" sx={{ maxWidth: "100%", color: "#e9e9e9", my: 2 }} /><br />
            When one user leaves the chat, the other user will get a message that the other chatter has left.
            When one user leaves, the other user will receive 5 detection exp unless the leaver was a bot.
            You will not know if you actually received the 5 exp until you make your choice.<br />
            <Box component="img" alt="Other user left" src="../b3OtherLeft.png" sx={{ maxWidth: "100%", color: "#e9e9e9", my: 2 }} /><br />
            For one of the more interesting changes, ChatGPT has been implemented in the chat.
            There is a chance upon joining a chat that the user will instead join into ChatGPT.
            While this implementation is still very much a work in progress, here is an image of a working prototype: <br />
            <Box component="img" alt="ChatGPT chat" src="../b3ChatGPT.png" sx={{ maxWidth: "100%", color: "#e9e9e9", my: 2 }} /><br />
            As you can see, it{"\'"}s not particularly convincing.
            However, this bot will be drastically improved by the time the beta is released.<p/>
            This concludes the third developer update for Turing Test Chat.
            If this sounds interesting, you should sign up for the waitlist.
            If you{"\'"}re interested in the coding behind this developer update (which contains more details on the ChatGPT implementation), you can check out the { }
            <Link href="/blog/eng-blog-3"
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

export default DevUpdate3;