import { Box, Container, Typography } from "@mui/material";
import { Header } from "../Header";
import { Footer } from "./Footer";
import { BlogEntry } from "./BlogEntry";
import { Helmet } from "react-helmet-async";

export const Blog = () => {
  return (
    <>
      <Helmet>
        <title>Blog | Turing Test Chat</title>
      </Helmet>
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
          <Typography variant="h1" sx={{ fontSize: 40, my: 5 }}>Turing Test Chat Blog</Typography>
          <BlogEntry
            imageAlt="Turing Test Chat logo"
            imageSrc="TTCLogov2.png"
            blogUrl={"what-is-the-turing-test"}
            blogTitle="The Turing Test: A Test for AI Intelligence"
            blogDate="June 16, 2023"
            blogSubtitle="Artificial Intelligence Turing Test" />
          <BlogEntry
            imageAlt="Turing Test Chat logo"
            imageSrc="TTCLogov2.png"
            blogUrl={"7"}
            blogTitle="Turing Test Chat Developer Update #4"
            blogDate="June 6, 2023"
            blogSubtitle="Results from the beta test." />
          <BlogEntry
            imageAlt="Turing Test Chat logo"
            imageSrc="TTCLogov2.png"
            blogUrl={"6"}
            blogTitle="Turing Test Chat Developer Update #3"
            blogDate="May 22, 2023"
            blogSubtitle="Adding ChatGPT to the chat room (and other improvements)." />
          <BlogEntry
            imageAlt="Turing Test Chat logo"
            imageSrc="TTCLogov2.png"
            blogUrl={"5"}
            blogTitle="Turing Test Chat Engineering Blog #3"
            blogDate="May 22, 2023"
            blogSubtitle="How to deal with users leaving, and adding ChatGPT to a room." />
          <BlogEntry
            imageAlt="Turing Test Chat logo"
            imageSrc="TTCLogov2.png"
            blogUrl={"4"}
            blogTitle="Turing Test Chat Developer Update #2"
            blogDate="May 11, 2023"
            blogSubtitle="Building the chat application for Turing Test Chat." />
          <BlogEntry
            imageAlt="Turing Test Chat logo"
            imageSrc="TTCLogov2.png"
            blogUrl={"3"}
            blogTitle="Turing Test Chat Engineering Blog #2"
            blogDate="May 11, 2023"
            blogSubtitle="Using WebSockets to create a chat application." />
          <BlogEntry
            imageAlt="Turing Test Chat logo"
            imageSrc="TTCLogov2.png"
            blogUrl={"2"}
            blogTitle="Turing Test Chat Developer Update #1"
            blogDate="May 1, 2023"
            blogSubtitle="Building the UI and authentication systems of Turing Test Chat." />
          <BlogEntry
            imageAlt="Turing Test Chat logo"
            imageSrc="TTCLogov2.png"
            blogUrl={"1"}
            blogTitle="Turing Test Chat Engineering Blog #1"
            blogDate="May 1, 2023"
            blogSubtitle="Diving into the code behind the early UI and authentication." />
        </Container>
      </Box>
      <Footer />
    </>
  );
}