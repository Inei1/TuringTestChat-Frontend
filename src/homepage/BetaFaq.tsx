import { Box, Container, Typography } from "@mui/material"
import { Header } from "../Header"
import { Footer } from "./Footer"
import { Helmet } from "react-helmet-async"

export const BetaFaq = () => {
  return (
    <>
      <Box sx={{ maxWidth: "100vw", minHeight: "100vh", background: "radial-gradient(circle, rgba(19,42,122,1) 0%, rgba(29,29,29,1) 100%)", }}>
        <Helmet>
          <title>Beta FAQ | Turing Test Chat</title>
        </Helmet>
        <Header />
        <Container sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'left',
          justifyContent: 'center',
          bgcolor: 'inherit',
          mt: 1,
        }}>
          <Typography variant="h1" sx={{ my: 2, fontSize: 50 }}>Beta FAQ</Typography>

          <Typography variant="h5" sx={{ my: 1 }}>What do I need to take part in the beta?</Typography>
          <Typography sx={{ my: 1 }}>You do not need anything to take part in the beta.
            Access to the beta is free for everyone, with no account required.</Typography>

          <Typography variant="h5" sx={{ my: 1 }}>What do I get from taking part in the beta?</Typography>
          <Typography sx={{ my: 1 }}>You get to play the game now!
            Once the beta starts, you will be able to enter your email to receive rewards including free bonus credits on full release.
            Also, you can join the whitelist right now to receive even more free credits on release.</Typography>

          <Typography sx={{ my: 1 }}>If you have any questions, send an email to support@turingtestchat.com.</Typography>
        </Container>
      </Box>
      <Footer />
    </>
  )
}