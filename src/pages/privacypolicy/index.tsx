import { Box, Container, Typography } from "@mui/material";
import { Header } from "../../Header";
import { Footer } from "../../homepage/Footer";
import Head from "next/head";

const PrivacyPolicy = () => {
  return (
    <>
      <Box sx={{ maxWidth: "100vw", minHeight: "100vh", background: "radial-gradient(circle, rgba(19,42,122,1) 0%, rgba(29,29,29,1) 100%)", }}>
        <Head>
          <title>Privacy Policy | Turing Test Chat</title>
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
          <Typography variant="h1" sx={{ my: 2, fontSize: 50 }}>Privacy Policy</Typography>
          <Typography sx={{ my: 1 }}>Turing Test Chat takes your privacy seriously and is committed to protecting your personal information.
            Your personal data will not be sold, rented, or otherwise disclosed to any third party without your explicit consent.</Typography>
          <Typography sx={{ my: 1 }}>The personal data collected from you may include your email address.
            Turing Test Chat may also collect non-personally identifiable information such as your IP address and browsing behavior.
            Turing Test Chat will store your chat messages.</Typography>
          <Typography sx={{ my: 1 }}>Turing Test Chat uses your personal data to provide you with the products and services you have requested,
            to communicate with you about Turing Test Chat{"\'"}s products and services, and to improve Turing Test Chat{"\'"}s offerings.
            Turing Test Chat may also use your information for market research purposes, but only in an aggregated and anonymous form.</Typography>
          <Typography sx={{ my: 1 }}>Turing Test Chat takes reasonable steps to protect your personal information from unauthorized access, use, or disclosure.
            However, no data transmission over the internet can be guaranteed to be completely secure.
            Therefore, Turing Test Chat cannot guarantee the security of any information you provide.</Typography>
          <Typography sx={{ my: 1 }}>By using turingtestchat.com, you consent to the terms of this privacy policy.
            If you have any questions or concerns about Turing Test Chat{"\'"}s privacy practices, please send an email to support@turingtestchat.com.</Typography>
          <Typography sx={{ my: 1 }}>This privacy policy is effective as of 4/22/2023 and may be updated from time to time.
            you can review this policy regularly to stay informed of any changes.</Typography>
        </Container>
      </Box>
      <Footer />
    </>
  )
}

export default PrivacyPolicy;