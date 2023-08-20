import { Container, Typography, Link as MuiLink } from "@mui/material";
import Link from "next/link";

const Faq = () => {
  return (
    <>
      <Container sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "left",
        justifyContent: "center",
        bgcolor: "inherit",
        mt: 1,
      }}
      maxWidth="md">
        <Typography variant="h1" sx={{ my: 2, fontSize: 50 }}>FAQ</Typography>

        <Typography variant="h2" sx={{ my: 1, fontSize: 28 }}>How do I get access to Turing Test Chat?</Typography>
        <Typography sx={{ my: 1 }}>
          Register using your email address (your email doesn't need to be validated),
          and then go to <Link href="/home" style={{ color: "#E9E9E9", fontFamily: "monospace" }}>the chat homepage</Link> and click the large button to join a chat.
        </Typography>

        <Typography variant="h2" sx={{ my: 1, fontSize: 28 }}>What should I do when chatting?</Typography>
        <Typography sx={{ my: 1 }}>
          Go to <Link href="/howtoplay" style={{ color: "#E9E9E9", fontFamily: "monospace" }}>this page</Link> to view instructions.
        </Typography>

        <Typography variant="h2" sx={{ my: 1, fontSize: 28 }}>How can I give feedback/report an issue?</Typography>
        <Typography sx={{ my: 1 }}>Any and all feedback is greatly appreciated.
          To give feedback or report an issue, you can <MuiLink href="mailto:support@turingtestchat.com">contact support@turingtestchat.com</MuiLink>, {}
          <MuiLink href="https://discord.com/invite/SX48DMUb5H">join the discord</MuiLink>, or {} 
          <MuiLink href="https://old.reddit.com/r/TuringTestChat/">post to Reddit</MuiLink>.
        </Typography>

        <Typography variant="h2" sx={{ my: 1, fontSize: 28 }}>Who is developing Turing Test Chat?</Typography>
        <Typography sx={{ my: 1 }}>Hi there!
          I'm Neil, a solo developer with a few years of experience at Google and Amazon.
          I've been working full time on Turing Test Chat since April 18.
        </Typography>

        <Typography variant="h2" sx={{ my: 1, fontSize: 28 }}>How can I support Turing Test Chat?</Typography>
        <Typography sx={{ my: 1 }}>Share the game on social media!
          You can find social media links in the footer below.
          You can also turn off your adblocker if you have one.
        </Typography>
        <Typography sx={{ my: 1 }}>If you have any questions, send an email to <MuiLink href="mailto:support@turingtestchat.com">support@turingtestchat.com</MuiLink>.</Typography>
      </Container>
    </>
  )
}

export default Faq;