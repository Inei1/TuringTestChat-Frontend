import { Footer } from "@/homepage/Footer";
import { Box, Button, Container, Grid, TextField, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export const ForgotPassword = () => {

  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const submitForgot = async (e: any) => {
    e.preventDefault();
    //const forgotResult = await fetch();
  };

  return (
    <>
      <Box sx={{
        minHeight: "100vh",
        backgroundColor: "secondary.main",
        background: "radial-gradient(circle, rgba(19,42,122,1) 0%, rgba(29,29,29,1) 100%)",
        backgroundPosition: "center",
        backgroundSize: "100vw",
        maxWidth: "100vw",
      }}>
        <Link href="/">
          <Image src="/TTCLogov2.png" alt="Turing Test Chat logo" width={256} height={256} style={{ marginTop: "1em", marginLeft: "1em" }} />
        </Link>
        <Container maxWidth="sm">
          <Grid container direction={"column"} sx={{ justifyContent: "center", display: "flex", width: "100%" }}>
            <Typography variant="h1" sx={{ fontSize: 50 }}>Forgot Password</Typography>
            <Typography>Hmmm, you're not supposed to be here. You should return to home. This form doesn't do anything.</Typography>
            <form onSubmit={submitForgot}>
              <TextField variant="filled" label="Enter Email" sx={{ width: "100%" }} value={email} onChange={(e) => setEmail(e.target.value)}></TextField>
              <Button variant="contained" sx={{ width: "100%" }}>Submit</Button>
            </form>
            {message.length > 0 && <Typography>{message}</Typography>}
          </Grid>
        </Container>
      </Box>
      <Footer />
    </>
  )
}

export default ForgotPassword;