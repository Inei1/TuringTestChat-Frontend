import { Box, Container, Grid } from "@mui/material";
import { useState } from "react";
import useInterval from "use-interval";
import bgpng from "../img/TTCbgplainv1.png";
import bgwebp from "../img/TTCbgplainv1.webp";
import { Header } from "../Header";
import { Timer } from "./Timer";

export const ChatEnd = () => {

  const [seconds, setSeconds] = useState(30);

  useInterval(() => {
    setSeconds(seconds - 1);
  }, 1000)

  return (
    <>
      <Box sx={{
        minHeight: "100vh",
        backgroundColor: "secondary.main",
        background: `url(${bgwebp}), url(${bgpng})`,
        backgroundPosition: "center",
        backgroundSize: "100vw",
        backgroundPositionY: 60,
        maxWidth: "100vw",
      }}>

        <Header />
        <Box
          sx={{
            maxWidth: 800,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            mx: "auto",
          }}>
          {/* <Grid container alignItems="center" justifyContent="center">
            <Timer seconds={30} sx={{}} />
          </Grid> */}

          <Container sx={{ backgroundColor: "#1D1D1D", width: "100%", my: 3 }}>
          </Container>
        </Box>
      </Box>
    </>
  );
};
