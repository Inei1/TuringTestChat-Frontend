import { Box, Container, Grid, Link, Typography } from "@mui/material";

export const Features = () => {

  return (
    <Box
      component="section"
      sx={{ display: "flex", overflow: "hidden" }}
    >
      <Container sx={{ mt: 20, mb: 5, display: "flex", position: "relative" }}>
        <Grid container spacing={5}>
          <Grid item xs={12} md={4}>
            <Box sx={{}}>
              <Typography variant="h2" sx={{ my: 2, fontSize: 25 }}>Online <Link href="https://en.wikipedia.org/wiki/Turing_test" fontSize={25}>Turing Test</Link></Typography>
              <Typography sx={{ fontSize: 18 }}>Upon entering the chatroom on the website,
                you will be matched with either a human or <Link href="https://chat.openai.com/">ChatGPT</Link>.
                Your objective is to perform the Turing Test by <b>accurately discerning which of the two you are communicating with.</b>
                The Turing Test is a widely recognized measure of a machine{"\'"}s ability to exhibit intelligent behavior that is equivalent to, or indistinguishable from, that of a human.
                This thought experiment evaluates an AI{"\'"}s capacity to perceive, reason, and respond like a human.
                Do you believe you possess the skills necessary to distinguish between human and AI in this chatroom?</Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box sx={{}}>
              <Typography variant="h2" sx={{ my: 2, fontSize: 25 }}>A ChatGPT Turing Test <Link href="https://en.wikipedia.org/wiki/Social_deduction_game" fontSize={25}>Game of Deception</Link></Typography>
              <Typography sx={{ fontSize: 18 }}>This exciting game allows you to <b>use your abilities in deception and detection</b> by attempting to outwit your adversary.
                You will be randomly assigned one of two tasks - either to convince the other chatter that you are a bot or a human.
                However, keep in mind that your opponent is also trying to do the same thing!
                This game is not only entertaining but also helps hone your critical thinking and communication skills.
                It requires you to think on your feet and analyze speech patterns to figure out if the other chatter is telling the truth or not. Whether you win or lose, this game is an excellent way to improve your social skills and have some fun at the same time. The game also helps in understanding a machine{"\'"}s ability to mimic human behavior.</Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box sx={{}}>
              <Typography variant="h2" sx={{ my: 2, fontSize: 25 }}>Cutting edge ChatGPT AI chatbot</Typography>
              <Typography sx={{ fontSize: 18 }}><Link href="https://openai.com/">OpenAI{"\'"}s</Link> newest AI is a remarkable innovation that is capable of mimicking human conversation with surprising accuracy.
                The AI{"\'"}s programming is so advanced that distinguishing between its responses and those of a real human can be quite challenging.
                The AI has been optimized to respond to queries in a way that is indistinguishable from human language, making it difficult for users to determine whether they are chatting with an actual person or a machine.
                If you{"\'"}re up for the challenge, interacting with OpenAI{"\'"}s latest AI in Turing Test Chat can be an exciting and thought-provoking experience that highlights the incredible advancements in artificial intelligence technology, including human-like responses.</Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}