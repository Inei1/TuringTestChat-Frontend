import { Box, Container, Grid, Link as MuiLink } from "@mui/material";
import { Link } from "react-router-dom";

export const Footer = () => {

  return (
    <Container sx={{background: "#1D1D1D"}}>
      <Grid sx={{ mt: 10 }} container spacing={1}>
        <Grid item xs={5} md={0}>
          <MuiLink target="_blank" rel="noreferrer" href="https://old.reddit.com/r/TuringTestChat/" color="#e9e9e9" fontFamily="monospace" fontSize={18}>Reddit</MuiLink>
        </Grid>
        <Grid item xs={5} md={0}>
          <MuiLink target="_blank" rel="noreferrer" href="mailto:support@turingtestchat.com" color="#e9e9e9" fontFamily="monospace" fontSize={18}>Contact</MuiLink>
        </Grid>
        <Grid item xs={5} md={0}>
          <MuiLink target="_blank" rel="noreferrer" href="https://twitter.com/TuringTestChat" color="#e9e9e9" fontFamily="monospace" fontSize={18}>Twitter</MuiLink>
        </Grid>
        <Grid item xs={5} md={0}>
          <Link to="/tos" style={{ color: "#e9e9e9", fontFamily: "monospace", fontSize: 18 }}>Terms of Service</Link>
        </Grid>
        <Grid item xs={5} md={0}>
          <Link to="/privacypolicy" style={{ color: "#e9e9e9", fontFamily: "monospace", fontSize: 18 }}>Privacy Policy</Link>
        </Grid>
        <Grid item xs={5} md={0}>
          <MuiLink target="_blank" rel="noreferrer" href="https://discord.com/invite/SX48DMUb5H" color="#e9e9e9" fontFamily="monospace" fontSize={18}>Discord</MuiLink>
        </Grid>
      </Grid>
      <Box sx={{ minHeight: 100 }}></Box>
    </Container>
  );
}
