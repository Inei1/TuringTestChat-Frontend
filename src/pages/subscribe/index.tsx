import { Header } from "@/Header";
import { Footer } from "@/homepage/Footer";
import { Subscribe } from "@/homepage/Subscribe";
import { Box, Container, Typography } from "@mui/material";
import Head from "next/head";

const Waitlist = () => {

  return (
    <>
      <Box sx={{ maxWidth: "100vw", minHeight: "100vh", background: "radial-gradient(circle, rgba(19,42,122,1) 0%, rgba(29,29,29,1) 100%)", }}>
        <Head>
          <title>Subscribe to Waitlist | Turing Test Chat</title>
        </Head>
        <Header />
        <Container sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          bgcolor: "inherit",
          mt: 5,
        }}>
          <Typography variant="h1" sx={{ fontSize: 50 }}>Waitlist</Typography>
          <Subscribe />
        </Container>
      </Box>
      <Footer />
    </>
  );
}

export default Waitlist;