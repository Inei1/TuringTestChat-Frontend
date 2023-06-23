import { Box, Container, Typography } from "@mui/material"
import { Header } from "../Header"
import { Footer } from "./Footer"
import Head from "next/head"

export const Faq = () => {
  return (
    <>
      <Box sx={{ maxWidth: "100vw", minHeight: "100vh", background: "radial-gradient(circle, rgba(19,42,122,1) 0%, rgba(29,29,29,1) 100%)", }}>
        <Head>
          <title>Beta FAQ | Turing Test Chat</title>
        </Head>
        <Header />
        <Container sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "left",
          justifyContent: "center",
          bgcolor: "inherit",
          mt: 1,
        }}>
          <Typography variant="h1" sx={{ my: 2, fontSize: 50 }}>FAQ</Typography>

          <Typography variant="h2" sx={{ my: 1 }}>When will the full release of the game come out?</Typography>
          <Typography sx={{ my: 1 }}>The full release date is unannounced, but you should expect it some time in June or July.</Typography>

          <Typography variant="h2" sx={{ my: 1 }}>How can I give feedback/report an issue?</Typography>
          <Typography sx={{ my: 1 }}>Any and all feedback is greatly appreciated.
            To give feedback or report an issue, you can contact support@turingtestchat.com or post to social media.
          </Typography>

          <Typography variant="h2" sx={{ my: 1 }}>Who is developing Turing Test Chat?</Typography>
          <Typography sx={{ my: 1 }}>Hi there!
            I{"\'"}m Neil, a solo developer with a few years of experience at Google and Amazon.
          </Typography>

          <Typography variant="h2" sx={{ my: 1 }}>How can I support Turing Test Chat?</Typography>
          <Typography sx={{ my: 1 }}>Share the game on social media!
            You can find social media links in the footer below.
          </Typography>
          <Typography display="none" sx={{ my: 1 }}>
            robot is the seventh.
          </Typography>
          <Typography sx={{ my: 1 }}>If you have any questions, send an email to support@turingtestchat.com.</Typography>
        </Container>
      </Box>
      <Footer />
    </>
  )
}