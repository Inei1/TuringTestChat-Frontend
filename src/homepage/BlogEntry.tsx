import { Box, Container, Typography, Link as MuiLink, Grid } from "@mui/material";
import { Link } from "react-router-dom";

export interface BlogEntryProps {
  imageAlt: string;
  imageSrc: string;
  blogNumber: number;
  blogTitle: string;
  blogDate: string;
  blogSubtitle: string;
}

export const BlogEntry = (props: BlogEntryProps) => {
  return (
    <Container component="section" sx={{ my: 5 }}>
      <hr />
      <Box sx={{ my: 5 }} />
      <Grid container>
        <Grid item xs={2}>
          {window.innerWidth > window.innerHeight && <Box component="img" alt={props.imageAlt} src={props.imageSrc} sx={{ maxWidth: 128 }} />}
        </Grid>
        <Grid item xs={10}>
          <Link to={"/blog/" + props.blogNumber}>
            <MuiLink fontFamily="monospace" color="#e9e9e9" sx={{ fontSize: 30, }}>
              {props.blogTitle}
            </MuiLink>
          </Link>
          <Typography sx={{ my: 2 }}>{props.blogDate}</Typography>
          <Typography sx={{ fontSize: 18 }}>{props.blogSubtitle}</Typography>
        </Grid>
      </Grid>
    </Container>
  );
}