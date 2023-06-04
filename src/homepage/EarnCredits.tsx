import { Box, Container, List, ListItem, Typography } from "@mui/material"
import { Header } from "../Header"
import { Footer } from "./Footer"
import { Helmet } from "react-helmet-async"

export const EarnCredits = () => {
  return (
    <>
      <Box sx={{ maxWidth: "100vw", minHeight: "100vh", background: "radial-gradient(circle, rgba(19,42,122,1) 0%, rgba(29,29,29,1) 100%)", }}>
        <Helmet>
          <title>Earn credits | Turing Test Chat</title>
        </Helmet>
        <Header />
        <Container sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'left',
          justifyContent: 'center',
          bgcolor: 'inherit',
          mt: 1,
        }}>
          <Typography variant="h1" sx={{ my: 2, fontSize: 50 }}>Earn more credits</Typography>
          <Typography sx={{ my: 1 }}>To earn more credits, you can do the following:</Typography>
          <List>
            <ListItem><Typography>1. Turn off your adblock if it's on.
              This will give you permanent credits passively, just by using Turing Test Chat.</Typography></ListItem>
              <ListItem><Typography>2. Pay for access. Cheaper options will give you a limited but greater quantity of credits.</Typography></ListItem>
          </List>
        </Container>
      </Box>
      <Footer />
    </>
  )
}