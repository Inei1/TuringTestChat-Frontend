import Header from "@/Header";
import { Footer } from "@/homepage/Footer";
import { Box, Container, Link, Typography } from "@mui/material";
import Head from "next/head";

const Shutdown = () => {

  return (
    <>
      <Head>
        <title>Turing Test Chat Shutting Down | Turing Test Chat</title>
      </Head>
      <Box sx={{
        minHeight: "102.5vh",
        backgroundColor: "secondary.main",
        background: "radial-gradient(circle, rgba(19,42,122,1) 0%, rgba(29,29,29,1) 100%)",
        backgroundPosition: "center",
        backgroundSize: "100vw",
        maxWidth: "100vw",
      }}>
        <Header />
        <Container sx={{ mt: 5 }}>
          <Typography variant="h1" fontSize={80}>Turing Test Chat Shutting Down September 20 2023</Typography>
          <Typography variant="h4" sx={{ mt: 2 }}>
            Why is Turing Test Chat shutting down?
          </Typography>
          <Typography>
            It's mostly due to a lack of players, resulting in a poor experience for users.
            There's just not enough people online at any given time to consistently get into a chat with another human.
            As a result, the chances of you encountering a bot is far too high compared to chatting with a human.
            This really defeats the purpose of the game.
          </Typography>
          <Typography sx={{ my: 1 }}>
            Turing Test Chat costs a significant amount of money to upkeep.
            Expenses are typically around $100/month.
            In return, it made $20 in ad revenue since the beginning of July.
            This is just not sustainable, so it's necessary to cut the costs since there is no potential to break even.
          </Typography>
          <Typography variant="h4" sx={{ mt: 2 }}>
            What's next?
          </Typography>
          <Typography>
            I've taken the support email offline, so you can now reach me at <Link href="mailto:neil@neil-moon.com">neil@neil-moon.com</Link>.
            Feel free to reach out if you want to discuss anything related to Turing Test Chat.
            In the mean time, I'm looking for a software development job, so please contact me if you know of any such opportunities.
            You can find out more about me at my <Link href="https://neil-moon.com">personal website</Link>.
            If you want to see the source code of Turing Test Chat, it's available
            <Link href="https://github.com/Inei1/TuringTestChat-Frontend">for the frontend</Link>
            and <Link href="https://github.com/Inei1/TuringTestChat-Backend">for the backend</Link>.
          </Typography>
        </Container>
      </Box>
      <Footer />
    </>
  )
}

export default Shutdown;
