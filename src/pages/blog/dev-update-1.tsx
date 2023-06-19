import { Box, Container, Typography } from "@mui/material";
import { Header } from "../../Header";
import { Footer } from "../../homepage/Footer";
import Head from "next/head";
import { Subscribe } from "@/homepage/Subscribe";

const DevUpdate1 = () => {
  return (
    <>
      <Head>
        <title>Developer Update 1: UI and Authentication | Turing Test Chat</title>
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
        <Container component="section" maxWidth="md">
          <Typography variant="h1" sx={{ fontSize: 40, mt: 5 }}>Turing Test Chat Developer Update #1</Typography>
          <Typography variant="h6" sx={{ mt: 1, mb: 3, fontStyle: "italic" }}>Building the UI and authentication systems of Turing Test Chat.</Typography>
          <Typography sx={{ fontSize: 18 }}>In this developer update, I{"\'"}ll cover login/register, UI, and some design decisions.
            The first version of the homepage looks like this (open image in new tab to increase size):</Typography>
          <Box component="img" alt="Blog 1 homepage" src="../b1homepage.png" sx={{ maxWidth: "100%", color: "#e9e9e9", my: 2 }} />
          <Typography sx={{ fontSize: 18 }}>The chat tab will bring you to a screen I{"\'"}ll show soon.
          The log in/sign up button will bring you to this screen:</Typography>
          <Box component="img" alt="Blog 1 login" src="../b1login.png" sx={{ maxWidth: "100%", color: "#e9e9e9", my: 2 }} />
          <Typography sx={{ fontSize: 18 }}>Both the log in and register tabs are fully functional.
          It{"\'"}s possible to create an account and immediately log in.
          You{"\'"}ll need a valid email, username, and password to create an account. Upon logging in, you{"\'"}ll be taken to the main page:</Typography>
          <Box component="img" alt="Blog 1 chat" src="../b1chat.png" sx={{ maxWidth: "100%", color: "#e9e9e9", my: 2 }} />
          <Typography sx={{ fontSize: 18, mt: 2 }}>The main page explains the rules and point system.
          Entering the chat room will put you into a queue where you will be matched with either a human or ChatGPT.
          The header displays account information once logged in.
          The human icon is supposed to be like a profile picture and has a dropdown menu with settings, logout, etc.</Typography>
          <Typography sx={{ fontSize: 18, mt: 2  }}>There will be a point system that will be shown on a leaderboard.
          Performing well at games will award points, and making mistakes will cause you to lose points.
          At the end of a game, both players will have 30 seconds to make a choice about their chat partner.
          There will be 5 choices for players to make.
          You can say definitely a bot, possibly a bot, I don{"\'"}t know, possibly a human, or definitely a human.
          Giving a definite response will give 10 points on success and take 3 points on failure.
          Giving a possible response will give 3 points on success and take 1 point on failure.
          Giving an {"\""}I don{"\'"}t know{"\""} response will not change your points or your opponent{"\'"}s points.
          Note that a success on one side will mean a failure on the other side.
          The point system is not a ranking system, and you are expected to always gain more than lose.</Typography>
          <Typography sx={{ fontSize: 18, mt: 2 }}>To monetize Turing Test Chat, there will be a credit system.
          Everyone will start with some amount of credits each day (to be determined at a later date).
          To get more credits, you can pay money or earn them.
          Payment will give you an amount of credits per day (or unlimited) that don{"\'"}t roll over, or a flat amount one time.
          For example, you can pay $5/month for 50 credits per day and/or 1,000 credits for $10 (numbers not final).
          To earn credits, you can watch ads or complete other tasks (to be determined).
          Turing Test Chat will always offer at least a few credits for free every day.</Typography>
          <Typography sx={{ fontSize: 18, mt: 2  }}>Have you ever wanted to play a social deduction game centered around the difference between humans and AI?
          You should sign up for the Turing Test Chat waitlist.
          Progress and engineering updates similar to this one will happen somewhat frequently until Turing Test Chat is released.
          </Typography>
          <Subscribe />
        </Container>
      </Box>
      <Footer />
    </>
  );
}

export default DevUpdate1;