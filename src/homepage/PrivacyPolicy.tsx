import { Box, Container, Typography } from "@mui/material"
import { Header } from "../Header"

export const PrivacyPolicy = () => {
  return (
    <Box sx={{ maxWidth: "100vw", maxHeight: "100vh" }}>
      <Header />
      <Container sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'left',
        justifyContent: 'center',
        bgcolor: 'inherit',
        mt: 1,
      }}>
        <Typography variant="h4" sx={{ my: 2 }}>Privacy Policy</Typography>
        <Typography sx={{ my: 1 }}>TuringTestChat takes your privacy seriously and is committed to protecting your personal information.
          Your personal data will not be sold, rented, or otherwise disclosed to any third party without your explicit consent.</Typography>
        <Typography sx={{ my: 1 }}>The personal data collected from you may include your email address.
          TuringTestChat may also collect non-personally identifiable information such as your IP address and browsing behavior.</Typography>
        <Typography sx={{ my: 1 }}>TuringTestChat uses your personal data to provide you with the products and services you have requested,
          to communicate with you about TuringTestChat's products and services, and to improve TuringTestChat's offerings.
          TuringTestChat may also use your information for market research purposes, but only in an aggregated and anonymous form.</Typography>
        <Typography sx={{ my: 1 }}>TuringTestChat takes reasonable steps to protect your personal information from unauthorized access, use, or disclosure.
          However, no data transmission over the internet can be guaranteed to be completely secure.
          Therefore, TuringTestChat cannot guarantee the security of any information you provide.</Typography>
        <Typography sx={{ my: 1 }}>By using turingtestchat.com, you consent to the terms of this privacy policy.
          If you have any questions or concerns about TuringTestChat's privacy practices, please send an email to support@turingtestchat.com.</Typography>
        <Typography sx={{ my: 1 }}>This privacy policy is effective as of 4/22/2023 and may be updated from time to time.
          you can review this policy regularly to stay informed of any changes.</Typography>
      </Container>
    </Box>
  )
}