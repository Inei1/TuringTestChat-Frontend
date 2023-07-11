import { Box, Container, Link, Typography } from "@mui/material";
import { Header } from "../../Header";
import { Footer } from "../../homepage/Footer";
import Head from "next/head";

const PrivacyPolicy = () => {
  return (
    <>
      <Box sx={{ maxWidth: "100vw", minHeight: "100vh", background: "radial-gradient(circle, rgba(19,42,122,1) 0%, rgba(29,29,29,1) 100%)", }}>
        <Head>
          <title>Privacy Policy | Turing Test Chat</title>
          <meta name="description" content="Perform the Turing Test in a chat with ChatGPT. In this game of deception and detection, distinguishing between ChatGPT and humans is not easy." />
          <meta property="og:title" content="Privacy Policy | Turing Test Chat" />
          <meta property="og:description" content="Perform the Turing Test in a chat with ChatGPT. In this game of deception and detection, distinguishing between ChatGPT and humans is not easy." />
          <meta property="og:type" content="website" />
          <meta property="og:image" content="https://www.turingtestchat.com/TTCLogov2.png" />
          <meta property="og:url" content="https://www.turingtestchat.com" />

          <meta name="twitter:title" content="Privacy Policy | Turing Test Chat" />
          <meta name="twitter:description" content="Perform the Turing Test in a chat with ChatGPT. In this game of deception and detection, distinguishing between ChatGPT and humans is not easy." />
          <meta name="twitter:image" content="https://www.turingtestchat.com/TTCLogov2.png" />
          <meta name="twitter:card" content="summary" />
          <meta name="twitter:site" content="https://www.turingtestchat.com/" />
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
            Turing Test Chat will store your chat messages, and may share your anonymous chats with third-parties with all personal information, such as your email and username, removed.
            Turing Test Chat may use cookies or local storage for authentication and other site functionality purposes.
            This information will not be sold or disclosed to any third party for any reason.
            By using Turing Test Chat, you agree to have this information stored in your browser.
            If you wish to withdraw consent, you may do so without charge at any time by contacting <Link target="_blank" href="mailto:support@turingtestchat.com">Turing Test Chat support</Link>.</Typography>
          <Typography sx={{ my: 1 }}>Third party vendors, including Google, use cookies to serve ads based on a user's prior visits to your website or other websites.
            Google's use of advertising cookies enables it and its partners to serve ads to your users based on their visit to your sites and/or other sites on the Internet.
            Third parties may place and read cookies on your browser or use web beacons to collect information for advertising purposes.
            These cookies may be used to serve personalized ads.
            To learn more about how Google uses your data, you can visit <Link target="_blank" href="http://www.google.com/policies/privacy/partners/">http://www.google.com/policies/privacy/partners/</Link>.
            Users may opt out of personalized advertising by visiting Google's <Link target="_blank" href="https://www.google.com/settings/ads">Ads Settings</Link>.
            Additionally, the third-party ad service <Link target="_blank" href="https://www.ezoic.com/">Ezoic</Link> may serve peronalized ads.
            You may view Ezoic's part of the Turing Test Chat <Link target="_blank" href="https://g.ezoic.net/privacy/turingtestchat.com">privacy policy here</Link>.
            To opt out of third party ad vendors, you can visit www.aboutads.info.</Typography>
          <Typography sx={{ my: 1 }}>Turing Test Chat uses your personal data to provide you with the products and services you have requested,
            to communicate with you about Turing Test Chat's products and services, and to improve Turing Test Chat's offerings.
            Turing Test Chat may also use your information for market research purposes, but only in an aggregated and anonymous form.</Typography>
          <Typography sx={{ my: 1 }}>Turing Test Chat takes reasonable steps to protect your personal information from unauthorized access, use, or disclosure.
            However, no data transmission over the internet can be guaranteed to be completely secure.
            Therefore, Turing Test Chat cannot guarantee the security of any information you provide.</Typography>
          <Typography sx={{ my: 1 }}>By using turingtestchat.com, you consent to the terms of this privacy policy.
            If you have any questions or concerns about Turing Test Chat's privacy practices, please send an email to support@turingtestchat.com.</Typography>
          <Typography sx={{ my: 1 }}>This privacy policy is effective as of 4/22/2023 and may be updated from time to time.
            you can review this policy regularly to stay informed of any changes.</Typography>
        </Container>
      </Box>
      <Footer />
    </>
  )
}

export default PrivacyPolicy;