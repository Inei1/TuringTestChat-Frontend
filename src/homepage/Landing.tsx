import { Box, Container, Grid, Link, Typography } from "@mui/material";

export const Landing = () => {

  return (
    <>
      <Container
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          maxWidth: "50vw",
          mt: 5
        }}>
        <Box component="img" alt="Turing Test Chat logo" src="TTCLogov2.png" sx={{ maxWidth: "25vh", }} />
        <Typography variant="h1" style={{ fontFamily: "monospace", fontSize: 100, fontWeight: "normal", color: "#e9e9e9" }}>Turing Test Chat</Typography>
        <Grid sx={{ mt: 1, ml: "40%" }} container spacing={1}>
          <Grid item xs={12} md={5}>
            <Typography>"The Turing test... is a test of a machine's ability to exhibit intelligent behaviour equivalent to, or indistinguishable from, that of a human."</Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <Link variant="h4" target="_blank" rel="noreferrer" color="#e9e9e9" href="https://en.wikipedia.org/wiki/Turing_test"> - Wikipedia</Link>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
