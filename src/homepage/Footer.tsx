import { Container, Grid } from "@mui/material";

export const Footer = () => {
  return (
    <Container>
      <Grid sx={{mt: 1}} container spacing={5}>
        <Grid item xs={12} md={4}>
          <p>1</p>
        </Grid>
        <Grid item xs={12} md={4}>
          <p>2</p>
        </Grid>
        <Grid item xs={12} md={4}>
          <p>3</p>
        </Grid>
      </Grid>
    </Container>
  );
}
