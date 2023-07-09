import { Constants } from "@/Constants";
import { Footer } from "@/homepage/Footer";
import { Box, Button, Container, Grid, TextField, Typography } from "@mui/material";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export const ForgotPassword = () => {

  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const submitForgot = async (e: any) => {
    setLoading(true);
    e.preventDefault();
    const response = await fetch(Constants.BASE_URL + `account/password/reset/request`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: email })
    }).then(res => res.json());
    setMessage(response.message);
    setLoading(false);
  };

  return (
    <>
    <Head>
      <title>Forgot Password | Turing Test Chat</title>
    </Head>
      <Box sx={{
        minHeight: "102.5vh",
        backgroundColor: "secondary.main",
        background: "radial-gradient(circle, rgba(19,42,122,1) 0%, rgba(29,29,29,1) 100%)",
        backgroundPosition: "center",
        backgroundSize: "100vw",
        maxWidth: "100vw",
      }}>
        <Link href="/">
          <Image src="/TTCLogov2.png" alt="Turing Test Chat logo" width={256} height={256} style={{ marginTop: "1em", marginLeft: "1em" }} />
        </Link>
        <Container maxWidth="xs">
          <Grid container direction={"column"} sx={{ justifyContent: "center", display: "flex", width: "100%" }}>
            <Typography variant="h1" sx={{ fontSize: 50 }}>Forgot Password</Typography>
            <Typography variant="h2" sx={{ fontSize: 20, my: 2 }}>You are definitely a human, bots don't forget passwords!</Typography>
            <form onSubmit={submitForgot}>
              <TextField variant="filled" label="Enter Email" sx={{ width: "100%", input: { color: "#e9e9e9" } }} value={email} onChange={(e) => setEmail(e.target.value)}></TextField>
              <Button type="submit" disabled={loading} variant="contained" sx={{ width: "100%" }}>{loading ? "Processing" : "Submit"}</Button>
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