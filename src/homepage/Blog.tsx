import { Box, Container, Grid, Typography } from "@mui/material";
// import NewspaperIcon from '@mui/icons-material/Newspaper';

export const Blog = () => {
  return (
    <Box
      component="section"
      sx={{ display: 'flex', overflow: 'hidden', bgcolor: 'inherit' }}>
      <Container sx={{ mt: 50, mb: 30, display: 'flex', position: 'relative' }}>
        <Grid container spacing={5}>
          <Grid item xs={12} md={4}>
            <Box sx={{}}>
              <Grid container spacing={1}>
                {/* <NewspaperIcon sx={{width: 50, height: 50}} /> */}
                <Typography variant="h3">News</Typography>
              </Grid>
              <Typography variant="h6" sx={{ my: 5 }}>News Article</Typography>
              <Typography variant="h5">No news</Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>

          </Grid>
          <Grid item xs={12} md={4}>

          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}