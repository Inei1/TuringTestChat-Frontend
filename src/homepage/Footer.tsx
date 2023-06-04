import { Box, Container, Grid, Link } from "@mui/material";

export const Footer = () => {

  return (
    <Container sx={{background: "#1D1D1D"}}>
      <Grid sx={{ mt: 10 }} container spacing={1}>
        <Grid item xs={5} md={0}>
          <Link target="_blank" rel="noreferrer" href="https://old.reddit.com/r/TuringTestChat/" color="#e9e9e9" fontFamily="monospace" fontSize={18}>Reddit</Link>
        </Grid>
        <Grid item xs={5} md={0}>
          <Link target="_blank" rel="noreferrer" href="mailto:support@turingtestchat.com" color="#e9e9e9" fontFamily="monospace" fontSize={18}>Contact</Link>
        </Grid>
        <Grid item xs={5} md={0}>
          <Link target="_blank" rel="noreferrer" href="https://twitter.com/TuringTestChat" color="#e9e9e9" fontFamily="monospace" fontSize={18}>Twitter</Link>
        </Grid>
        <Grid item xs={5} md={0}>
          <Link target="_blank" rel="noreferrer" href="/tos" color="#e9e9e9" fontFamily="monospace" fontSize={18}>Terms of Service</Link>
        </Grid>
        <Grid item xs={5} md={0}>
          <Link target="_blank" rel="noreferrer" href="/privacypolicy" color="#e9e9e9" fontFamily="monospace" fontSize={18}>Privacy Policy</Link>
        </Grid>
        <Grid item xs={5} md={0}>
          <Link target="_blank" rel="noreferrer" href="https://discord.com/invite/SX48DMUb5H" color="#e9e9e9" fontFamily="monospace" fontSize={18}>Discord</Link>
        </Grid>
      </Grid>
      <Box sx={{ minHeight: 100 }}></Box>
    </Container>
  );
}
