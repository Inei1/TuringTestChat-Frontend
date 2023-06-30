import { Box, Container, Link, Typography } from "@mui/material";

export const Explanations = () => {

  return (
    <Box
      component="section"
      sx={{ display: "flex", overflow: "hidden" }}
    >
      <Container sx={{ mt: 5, mb: 5, }}>
        <Typography variant="h2" sx={{ my: 2, fontSize: 25 }}>Can I take the Turing Test online?</Typography>
        <Typography sx={{ fontSize: 18, my: 2 }}>To take an online Turing Test with ChatGPT, simply go to the website when it releases and interact with the AI.
          The results will be based on whether or not the AI can convince you it is human.
          <b> If it successfully convinces you, it has passed the Turing Test.</b></Typography>
        <Typography sx={{ fontSize: 18, my: 2 }}>Originally called the imitation game, the Turing Test is named prominent British mathematician and computer scientist <b>Alan Turing</b>.
          Turing is widely regarded as one of the pioneers of modern computer science and artificial intelligence research.
          Today, the Turing Test is a well-known benchmark in the development of AI.
          While some people claim the Turing Test has already been passed, most people agree that it has not.</Typography>
        <Typography sx={{ fontSize: 18, my: 2 }}>There are some flaws with the Turing Test.
          One well known thought experiment is the Chinese room argument.
          The argument is that machine intelligence cannot have a consciousness, and it doesn{"\'"}t truly understand what it{"\'"}s saying.
          If the machine receives Chinese characters as input, and outputs other Chinese characters, does it understand Chinese or is it simulating it?
          Another flaw with the Turing Test includes the fact that it only tests whether a machine can behave like a human.
          As we all know, <b>not all human behavior is intelligent</b>, so the Turing Test could be a machine{"\'"}s success in <b>acting unintelligent</b>.
          However, the concept of artificial general intelligence is gaining traction and could potentially address these flaws in the future.</Typography>
        <Typography variant="h2" sx={{ my: 2, fontSize: 25 }}>Human or Not Successor</Typography>
        <Typography sx={{ fontSize: 18, my: 2 }}>
          With the popular website <Link href="https://www.humanornot.ai/">Human or Not</Link> shutting down on June 28, it will no longer be possible to play an online social turing game.
          That's why Turing Test Chat is under development and very close to being finished.
          You will be able to play a game similar to the Human or Not game, but with some minor improvements.
          Turing Test Chat is out now, and is the best alternative to human or not.
        </Typography>
      </Container>
    </Box>
  );
}