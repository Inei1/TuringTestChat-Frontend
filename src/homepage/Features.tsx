import { Box, Container, Grid, Typography } from "@mui/material";

export const Features = () => {

  return (
    <Box
      component="section"
      sx={{ display: 'flex', overflow: 'hidden' }}
    >
      <Container sx={{ mt: 20, mb: 5, display: 'flex', position: 'relative' }}>
        <Grid container spacing={5}>
          <Grid item xs={12} md={4}>
            <Box sx={{}}>
              <Typography variant="h2" sx={{ my: 2, fontSize: 25 }}>Perform the turing test</Typography>
              <Typography sx={{ fontSize: 18}}>When you enter the chatroom on the website, you will be paired with a human or with ChatGPT.
              Your task is to perform the Turing Test by identifying which of the two you think you were talking to. Do you have
              what it takes to accurately distinguish between human and AI?</Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box sx={{}}>
              <Typography variant="h2" sx={{ my: 2, fontSize: 25 }}>A game of deception</Typography>
              <Typography sx={{ fontSize: 18}}>Put your deception and detective skills to the test by outsmarting the other person.
              You will be randomly assigned one of two tasks - to convince them that you are a bot or a human.
              But don't forget, they are trying to do the same!</Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box sx={{}}>
              <Typography variant="h2" sx={{ my: 2, fontSize: 25 }}>Cutting edge AI chat</Typography>
              <Typography sx={{ fontSize: 18}}>With ChatGPT's latest AI, distinguishing between a chatbot and
                a human won't be easy. The AI is optimized to accurately emulate human conversation and will
                do anything to trick you. Are you up for the challenge of distinguishing between artificial
                and human intelligence?</Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}