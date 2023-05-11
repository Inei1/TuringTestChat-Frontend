import { Box, Container, Typography } from "@mui/material";
import { Header } from "../Header";
import logopng from "../img/TTCbgplainv1.png";
import logowebp from "../img/TTCbgplainv1.webp";
import { Footer } from "./Footer";
import { BlogEntry } from "./BlogEntry";

export const Blog = () => {
  return (
    <>
      <Box sx={{
        backgroundColor: "secondary.main",
        background: `url(${logowebp}), url(${logopng})`,
        backgroundPosition: "center",
        backgroundSize: "100vw",
        backgroundPositionY: 60,
        maxWidth: "100vw",
        minHeight: "100vh",
      }}>
        <Header />
        <Container component="section">
          <Typography variant="h1" sx={{ fontSize: 40, my: 5 }}>Turing Test Chat Blog</Typography>
          <BlogEntry
            imageAlt="TuringTestChat logo"
            imageSrc="TTCLogov2.png"
            blogNumber={4}
            blogTitle="TuringTestChat Developer Update #2"
            blogDate="May 11, 2023"
            blogSubtitle="Building the chat application for TuringTestChat." />
          <BlogEntry
            imageAlt="TuringTestChat logo"
            imageSrc="TTCLogov2.png"
            blogNumber={3}
            blogTitle="TuringTestChat Engineering Blog #2"
            blogDate="May 11, 2023"
            blogSubtitle="Using WebSockets to create a chat application." />
          <BlogEntry
            imageAlt="TuringTestChat logo"
            imageSrc="TTCLogov2.png"
            blogNumber={2}
            blogTitle="TuringTestChat Developer Update #1"
            blogDate="May 1, 2023"
            blogSubtitle="Building the UI and authentication systems of TuringTestChat." />
          <BlogEntry
            imageAlt="TuringTestChat logo"
            imageSrc="TTCLogov2.png"
            blogNumber={1}
            blogTitle="TuringTestChat Engineering Blog #1"
            blogDate="May 1, 2023"
            blogSubtitle="Diving into the code behind the early UI and authentication." />
        </Container>
      </Box>
      <Footer />
    </>
  );
}