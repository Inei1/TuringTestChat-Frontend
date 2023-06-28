import { Button, Container, Grid, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import useInterval from "use-interval";

export const Landing = () => {

  const [timeUntilBeta, setTimeUntilBeta] = useState(1688281200000 - Date.now());

  useInterval(() => {
    setTimeUntilBeta(timeUntilBeta - 1000);
  }, 1000)

  return (
    <>
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          maxWidth: "50vw",
          mt: 5
        }}>
        <Image src="/TTCLogov2.png" width={253} height={256} alt="Turing Test Chat logo" />
        <Typography variant="h1" sx={{ fontFamily: "monospace", fontSize: 100, fontWeight: "normal", color: "#e9e9e9", mt: 0 }}>Turing Test Chat</Typography>
        <Grid sx={{ ml: "25%", }} container spacing={1}>
          <Grid container spacing={5}>
            <Grid item>
              <Typography variant="h3">Release in</Typography>
            </Grid>
            <Grid item>
              {/* time of midnight Jun 3 2023 UTC*/}
              <Typography variant="h3" color="primary">{Math.floor(timeUntilBeta / 8.64e+7) + " days " + new Date(timeUntilBeta).toISOString().substring(11, 19)}</Typography>
            </Grid>
          </Grid>
        </Grid>
        <Button component={Link} href="/faq" target="_self" variant="contained">FAQ</Button>
      </Container>
    </>
  );
}
