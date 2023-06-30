import { Box, Container, Typography } from "@mui/material";
import { Header } from "../../Header";
import { Footer } from "../../homepage/Footer";
import Head from "next/head";
import Image from "next/image";

const Blog11 = () => {
  return (
    <>
      <Head>
        <title>Turing Test Chat Release | Turing Test Chat</title>
        <meta name="description" content="Perform the Turing Test in a chat with ChatGPT. In this game of deception and detection, distinguishing between ChatGPT and humans is not easy." />
        <meta property="og:title" content="Turing Test Chat Release | Turing Test Chat" />
        <meta property="og:description" content="Perform the Turing Test in a chat with ChatGPT. In this game of deception and detection, distinguishing between ChatGPT and humans is not easy." />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://www.turingtestchat.com/TTCLogov2.png" />
        <meta property="og:url" content="https://www.turingtestchat.com" />

        <meta name="twitter:title" content="Turing Test Chat Release | Turing Test Chat" />
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
        <Container component="section" maxWidth="md">
          <Typography variant="h1" sx={{ fontSize: 40, mt: 5 }}>Turing Test Chat releases July 2!</Typography>
          <Typography variant="h2" sx={{ mt: 1, mb: 3, fontStyle: "italic", fontSize: 22 }}>An unofficial successor to Human or Not</Typography>
          <Typography>
            Turing Test Chat will be made available to everyone for free on July 2!
            In this blog post/announcement, I'll be reviewing what Turing Test Chat has to offer.
            If you want to view this blog post in video form, there is a video here:
            <iframe width="900" height="506" src="https://www.youtube.com/embed/dtbG79ckldg" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
          </Typography>
          <Typography variant="h2" sx={{ mt: 1, fontSize: 20 }}>
            Joining a Game
          </Typography>
          <Typography>
            To join a game, you must create a free account on the website.
            After that, you can go to the user home and click the large button to enter the chat room.
          </Typography>
          <Image src="/TTCHome.png" alt="Home screen" width={768} height={432} />
          <Typography>
            Once you've clicked on the join chat button, you will be put in a queue for chat.
          </Typography>
          <Image src="/TTCChatWaiting.png" alt="Chat Waiting" width={768} height={432} />
          <Typography>
            Once the system automatically finds a chat with a bot or with another human, You'll have to accept the chat.
            At this point, you've spent one credit (more on credits in the monetization section below).
          </Typography>
          <Image src="/TTCChatFound.png" alt="Chat Found" width={768} height={432} />
          <Typography>
            After both users accept the chat, you'll both go to the chatting screen.
          </Typography>
          <Typography variant="h2" sx={{ mt: 1, fontSize: 20 }}>
            Chatting
          </Typography>
          <Typography>
            Users will be assigned one of two goals, to act like a human or to act like a bot.
            In two and a half minutes, both chatters must decide on whether they spoke to a human or to a bot.
            Each chatter can send one message at a time, and must wait for the other chatter to send a message first.
            Here is what the chat looks like:
          </Typography>
          <Image src="/TTCBotConversation.png" alt="Bot conversation" width={873} height={483} />
          <Typography variant="h2" sx={{ mt: 1, fontSize: 20 }}>
            Chat Results
          </Typography>
          <Typography>
            After a chat, you are brought to the chat results screen.
            From here, you must choose who you thought the other person was.
            You can say that they were for sure a human, for sure a bot, possibly a human, or possibly a bot.
            Depending on the other person's true identity, you will gain or lose points based on your selection.
            Here's what it looks like before you select:
          </Typography>
          <Image src="/TTCResultNotSelected.png" alt="Result not selected" width={873} height={483} />
          <Typography>
            And here's what it looks like after you've selected.
            Here, the selection is completely wrong as the choice of definitely a human was selected, while the other chatter was a bot.
          </Typography>
          <Image src="/TTCSelected.png" alt="Result selected" width={873} height={483} />
          <Typography>
            When the other chatter is a human, you also have an element of deception added.
            You won't know for sure until you both select, but the other person's selection will affect your deception exp.
            If they get it wrong or don't select, or your goal is your true identity, then you receive points.
            If they correctly deduce who you are and if it's opposite to your goal, then you lose deception exp.
          </Typography>
          <Image src="/TTCHumanSelected.png" alt="Human Selected Result" width={957} height={951} />
          <Typography variant="h2" sx={{ mt: 1, fontSize: 20 }}>
            Monetization
          </Typography>
          <Typography>
            Turing Test Chat will be completely free for everyone until July 9.
            After that point, I'll evaluate using a bunch of data and adjust accordingly.
            I might choose to extend the always free time, or I might end it.
            After July 9, the credits system will be in place for monetization purposes.
            Turing Test Chat is not a social experiment like Human or Not, and so it needs a way to keep the servers running.
            That said, Turing Test Chat will always offer a decent amount of free credits to everyone.
          </Typography>
          <Typography variant="h2" sx={{ mt: 1, fontSize: 20 }}>
            Conclusion
          </Typography>
          <Typography>
            I'm exited to share Turing Test Chat with you all.
            It's been lots of time and effort spent full-time over the last few months to get here.
            Although Human or Not is shutting down, I hope that Turing Test Chat will help fill the void with something possibly better.
            Some things might not be as good, like the bot (I'm an individual, not an entire AI research company!), but there will be continuous work put into it.
          </Typography>
        </Container>
      </Box>
      <Footer />
    </>
  );
}

export default Blog11;