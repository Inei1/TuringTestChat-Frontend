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

            <Typography variant="h5" sx={{ my: 1 }}>When will the beta take place?</Typography>
            <Typography sx={{ my: 1 }}>The beta will start 06/03/2023 at midnight UTC.
              This is the same as 06/02/2023 5:00pm PST or 06/02/2023 8:00pm EST.
              It will run for exactly two days until 06/05/2023 at midnight UTC,
              with the possibility for extension in case of technical issues.</Typography>

            <Typography variant="h5" sx={{ my: 1 }}>When will the full release of the game come out?</Typography>
            <Typography sx={{ my: 1 }}>The full release date is unannounced, but you should expect it some time in June or July.</Typography>

            <Typography variant="h5" sx={{ my: 1 }}>What do I get from taking part in the beta?</Typography>
            <Typography sx={{ my: 1 }}>You get to play the game now!
              Once the beta starts, you will be able to enter your email to receive rewards including free bonus credits on full release.
              Also, you can join the whitelist right now to receive even more free credits on release.</Typography>

            <Typography variant="h5" sx={{ my: 1 }}>How can I give feedback/report an issue?</Typography>
            <Typography sx={{ my: 1 }}>Since this is a beta, issues are expected to occur.
              To give feedback or report an issue, you can contact support@turingtestchat.com or post to social media.
            </Typography>

            <Typography variant="h5" sx={{ my: 1 }}>Who is developing Turing Test Chat?</Typography>
            <Typography sx={{ my: 1 }}>Hi there!
              I'm a solo developer with a few years of experience at Google and Amazon.
            </Typography>

            <Typography variant="h5" sx={{ my: 1 }}>How can I support Turing Test Chat?</Typography>
            <Typography sx={{ my: 1 }}>Share the game on social media!
              You can find social media links in the footer below.
              Once the the full release is here, you will be able to refer friends to give both of you bonus rewards.
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