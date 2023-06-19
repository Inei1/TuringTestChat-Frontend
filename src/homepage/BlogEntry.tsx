import { Box, Container, Typography, Grid } from "@mui/material";
import Link from "next/link";

export interface BlogEntryProps {
  imageAlt: string;
  imageSrc: string;
  blogUrl: string;
  blogTitle: string;
  blogDate: string;
  blogSubtitle: string;
}

export const BlogEntry = (props: BlogEntryProps) => {
  return (
    <Container component="section" sx={{ py: 5 }}>
      <hr />
      <Box sx={{ my: 5 }} />
      <Grid container>
        <Grid item xs={10}>
          <Link href={"/blog/" + props.blogUrl} style={{ fontSize: 30, color: "#E9E9E9", fontFamily: "monospace" }}>
            {props.blogTitle}
          </Link>
          <Typography sx={{ my: 2 }}>{props.blogDate}</Typography>
          <Typography sx={{ fontSize: 18 }}>{props.blogSubtitle}</Typography>
        </Grid>
      </Grid>
    </Container>
  );
}