import { Box, Button, Container, Typography } from "@mui/material";
import { Header } from "../../Header";
import { Footer } from "../../homepage/Footer";
import { BlogEntry } from "../../homepage/BlogEntry";
import Head from "next/head";
import Link from "next/link";

const Blog = () => {
  return (
    <>
      <Head>
        <title>Blog | Turing Test Chat</title>
        <meta name="description" content="Perform the Turing Test in a chat with ChatGPT. In this game of deception and detection, distinguishing between ChatGPT and humans is not easy." />
        <meta property="og:title" content="Blog | Turing Test Chat" />
        <meta property="og:description" content="Perform the Turing Test in a chat with ChatGPT. In this game of deception and detection, distinguishing between ChatGPT and humans is not easy." />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://www.turingtestchat.com/TTCLogov2.png" />
        <meta property="og:url" content="https://www.turingtestchat.com" />

        <meta name="twitter:title" content="Blog | Turing Test Chat" />
        <meta name="twitter:description" content="Perform the Turing Test in a chat with ChatGPT. In this game of deception and detection, distinguishing between ChatGPT and humans is not easy." />
        <meta name="twitter:image" content="https://www.turingtestchat.com/TTCLogov2.png" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="https://www.turingtestchat.com/" />
      </Head>
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
            blogUrl="release-update"
            blogTitle="Turing Test Chat releases July 2!"
            blogDate="June 28, 2023"
            blogSubtitle="An unofficial successor to Human or Not" />
          <BlogEntry
            imageAlt="Turing Test Chat logo"
            imageSrc="TTCLogov2.png"
            blogUrl="online-ai-chat-websites"
            blogTitle="8 Unique Websites Where You Can Talk to a Robot"
            blogDate="June 23, 2023"
            blogSubtitle="Talk With AI Online" />
          <BlogEntry
            imageAlt="Turing Test Chat logo"
            imageSrc="TTCLogov2.png"
            blogUrl="turing-test-chat-best-ai-chat"
            blogTitle="Turing Test Chat: The Best Free AI Chat Game"
            blogDate="June 23, 2023"
            blogSubtitle="Free AI Chat App" />
          <BlogEntry
            imageAlt="Turing Test Chat logo"
            imageSrc="TTCLogov2.png"
            blogUrl="turing-test-questions"
            blogTitle="The Turing Test Questions To Ask List"
            blogDate="June 22, 2023"
            blogSubtitle="Examples of Turing Test Questions" />
          <BlogEntry
            imageAlt="Turing Test Chat logo"
            imageSrc="TTCLogov2.png"
            blogUrl="what-is-the-turing-test"
            blogTitle="The Turing Test: A Test for AI Intelligence"
            blogDate="June 16, 2023"
            blogSubtitle="Artificial Intelligence Turing Test" />
          <BlogEntry
            imageAlt="Turing Test Chat logo"
            imageSrc="TTCLogov2.png"
            blogUrl={"dev-update-4"}
            blogTitle="Turing Test Chat Developer Update #4"
            blogDate="June 6, 2023"
            blogSubtitle="Results from the beta test." />
          <BlogEntry
            imageAlt="Turing Test Chat logo"
            imageSrc="TTCLogov2.png"
            blogUrl={"dev-update-3"}
            blogTitle="Turing Test Chat Developer Update #3"
            blogDate="May 22, 2023"
            blogSubtitle="Adding ChatGPT to the chat room (and other improvements)." />
          <BlogEntry
            imageAlt="Turing Test Chat logo"
            imageSrc="TTCLogov2.png"
            blogUrl={"eng-blog-3"}
            blogTitle="Turing Test Chat Engineering Blog #3"
            blogDate="May 22, 2023"
            blogSubtitle="How to deal with users leaving, and adding ChatGPT to a room." />
          <BlogEntry
            imageAlt="Turing Test Chat logo"
            imageSrc="TTCLogov2.png"
            blogUrl={"dev-update-2"}
            blogTitle="Turing Test Chat Developer Update #2"
            blogDate="May 11, 2023"
            blogSubtitle="Building the chat application for Turing Test Chat." />
          <BlogEntry
            imageAlt="Turing Test Chat logo"
            imageSrc="TTCLogov2.png"
            blogUrl={"eng-blog-2"}
            blogTitle="Turing Test Chat Engineering Blog #2"
            blogDate="May 11, 2023"
            blogSubtitle="Using WebSockets to create a chat application." />
          <BlogEntry
            imageAlt="Turing Test Chat logo"
            imageSrc="TTCLogov2.png"
            blogUrl={"dev-update-1"}
            blogTitle="Turing Test Chat Developer Update #1"
            blogDate="May 1, 2023"
            blogSubtitle="Building the UI and authentication systems of Turing Test Chat." />
          <BlogEntry
            imageAlt="Turing Test Chat logo"
            imageSrc="TTCLogov2.png"
            blogUrl={"eng-blog-1"}
            blogTitle="Turing Test Chat Engineering Blog #1"
            blogDate="May 1, 2023"
            blogSubtitle="Diving into the code behind the early UI and authentication." />
        </Container>
      </Box>
      <Footer />
    </>
  );
}

export default Blog;