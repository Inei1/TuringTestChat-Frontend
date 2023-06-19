import { Box, Container, Grid } from "@mui/material";
import Link from "next/link";

export const Footer = () => {

  return (
    <Box sx={{ background: "#1D1D1D" }}>
      <Container sx={{ pt: 10 }}>
        <Grid container spacing={1}>
          <Grid item xs={5} md={0}>
            <Link style={{ color: "#E9E9E9", fontFamily: "monospace" }} href="https://old.reddit.com/r/TuringTestChat/">Reddit</Link>
          </Grid>
          <Grid item xs={5} md={0}>
            <Link style={{ color: "#E9E9E9", fontFamily: "monospace" }} href="mailto:support@turingtestchat.com">Contact</Link>
          </Grid>
          <Grid item xs={5} md={0}>
            <Link style={{ color: "#E9E9E9", fontFamily: "monospace" }} href="https://twitter.com/TuringTestChat">Twitter</Link>
          </Grid>
          <Grid item xs={5} md={0}>
            <Link style={{ color: "#E9E9E9", fontFamily: "monospace" }} href="/tos" target="_self">Terms of Service</Link>
          </Grid>
          <Grid item xs={5} md={0}>
            <Link style={{ color: "#E9E9E9", fontFamily: "monospace" }} href="/privacypolicy" target="_self">Privacy Policy</Link>
          </Grid>
          <Grid item xs={5} md={0}>
            <Link style={{ color: "#E9E9E9", fontFamily: "monospace" }} href="https://discord.com/invite/SX48DMUb5H">Discord</Link>
          </Grid>
        </Grid>
        <Box sx={{ minHeight: 100 }}></Box>
      </Container>
    </Box>
  );
}
