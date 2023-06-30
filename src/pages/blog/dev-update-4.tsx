import { Box, Container, List, ListItem, Typography, Link } from "@mui/material";
import { Header } from "../../Header";
import { Footer } from "../../homepage/Footer";
import Head from "next/head";

const DevUpdate4 = () => {
  return (
    <>
      <Head>
        <title>Developer Update 4: Beta | Turing Test Chat</title>
        <meta name="description" content="Perform the Turing Test in a chat with ChatGPT. In this game of deception and detection, distinguishing between ChatGPT and humans is not easy." />
        <meta property="og:title" content="Developer Update 4: Beta | Turing Test Chat" />
        <meta property="og:description" content="Perform the Turing Test in a chat with ChatGPT. In this game of deception and detection, distinguishing between ChatGPT and humans is not easy." />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://www.turingtestchat.com/TTCLogov2.png" />
        <meta property="og:url" content="https://www.turingtestchat.com" />

        <meta name="twitter:title" content="Developer Update 4: Beta | Turing Test Chat" />
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
          <Typography variant="h1" sx={{ fontSize: 40, mt: 5 }}>Turing Test Chat Developer Update #4</Typography>
          <Typography variant="h2" sx={{ mt: 1, mb: 3, fontStyle: "italic", fontSize: 22 }}>Results from the beta test</Typography>
          <Typography sx={{ fontSize: 18, mt: 5 }}>With the beta test started and finished, some useful information was gained from it.
            In this blog post, I'll share some of my findings from it.</Typography>
          <Typography sx={{ fontSize: 22, mt: 2 }}>Joining a chat and the chat room</Typography>
          <Typography sx={{ fontSize: 18, mt: 1 }}>First, here are some statistics:</Typography>
          <List>
            <ListItem>1. about 40 chats ran to completion where both users had an option to select their result, or one left</ListItem>
            <ListItem>2. around 50 chat rooms were queued, but cancelled before finding a chat</ListItem>
            <ListItem>3. The average time waiting for a chat before cancelling was around 40 seconds</ListItem>
          </List>
          <Typography>Overall, I'm mostly happy with these results.
            Unfortunately there were not a lot of players in the beta, which is why so many chats were cancelled.
            However, the chat queueing, joining, and messaging worked without any reported errors.
            The server was configured to log everything that happened, and it didn't show any errors.
            I was especially concerned about the ChatGPT rate limits, but there weren't enough players to really test it.
          </Typography>
          <Typography sx={{ fontSize: 22, mt: 2 }}>The Chat Bot</Typography>
          <Typography sx={{ fontSize: 18, mt: 1 }}>The chat bot running in the beta was a GPT-3.5-turbo bot with some highly randomized system prompts.
            Most people were able to see right through the bot, but it did have a few successes.
            Here are a few things that broke the bot:</Typography>
          <List>
            <ListItem>1. If you ask the bot to do something it doesn't know how to do, it just breaks</ListItem>
            <ListItem>2. The bot sometimes fails miserably in following its goal</ListItem>
            <ListItem>3. The bot is too insistent on helping you</ListItem>
          </List>
          <Typography>The first issue is going to be difficult to fix.
            One conversation asked the bot to do something that a human couldn't actually do.
            In this conversation, the bot tried deflecting the question by asking the other person if they are a bot.
            When the other person persisted, the bot broke and claimed it was a bot.
            I'll have to really work on fixing this one, but hopefully I'll come up with something better.
            Number 2 is due to a bug with generating the prompt, and is a simple fix.
            I spent quite a bit of time dealing with #3, but it still isn't where it needs to be.
            The bot will predictably ask you if you need help too often.
            When you ask the bot if it need something, it will also predictably tell you it doesn't need anything.
            On another note, the bot had about a one-third success rate in its deceptions.
            This is a good start, but I can make it better.
          </Typography>
          <Typography sx={{ fontSize: 22, mt: 2 }}>The Player Experience</Typography>
          <Typography sx={{ fontSize: 18, mt: 1 }}>When I played the game, I found a few issues that didn't come up in development.</Typography>
          <List>
            <ListItem>1. The chat bot types too fast</ListItem>
            <ListItem>2. The bot always sends messages at a speed proportional to length</ListItem>
            <ListItem>3. The bot will never stop typing once it starts</ListItem>
            <ListItem>4. If both players have the goal of bot, it's obvious that the other person is a human</ListItem>
            <ListItem>5. It's difficult to fool others into thinking you are a bot</ListItem>
          </List>
          <Typography>To fix #1, I can lower the typing speed of the bot.
            I've already made a system for the bot to slow down its typing, but I set it too high.
            For #2, I can randomly increase the amount of time spent before the bot sends a message.
            Sometimes a human will write a response, then cut it down to only a few words, so the bot will need to mimic this.
            #3 can be fixed by occassionally having the bot stop typing in the middle of a message.
            To elaborate on #4, goals for both sides are fully random and separate from each other.
            However, it's always the case that at least one human is in a chat.
            So, if your goal is bot and the other person says they are a bot, both sides are clearly a human.
            To fix this, both sides should have different goals (might have to put a little randomness to break this rule sometimes!).
            Number 5 is a good thing, since it shows that you can improve your skills by playing the game.
          </Typography>
          <Typography sx={{ fontSize: 22, mt: 2 }}>Player count issues</Typography>
          <Typography sx={{ fontSize: 18, mt: 1 }}>As mentioned earlier, there were not a lot of people in the beta test.
            In fact, I think the only times a real human was on both sides was when I participated.
            To rectify this, I'll launch on platforms like <Link href="https://www.producthunt.com/">Product Hunt</Link> and others.
            I'll invest in as many forms of promotion as I can.
            The beta had very little promotion, which is why the turnout was low.
            As a software engineer, marketing is not my specialty, but I'm doing what I can.</Typography>
          <Typography sx={{ fontSize: 18, mt: 2 }}>
            In conclusion, the beta was valuable for the information I obtained.
            I apologize to anyone who tried it and wanted to chat more, but couldn't due to player count issues.
          </Typography>
        </Container>
      </Box>
      <Footer />
    </>
  );
}

export default DevUpdate4;