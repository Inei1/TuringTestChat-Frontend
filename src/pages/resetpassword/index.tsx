import { Constants } from "@/Constants";
import Header from "@/Header";
import { Footer } from "@/homepage/Footer";
import { Box, Button, Container, Grid, TextField, Typography } from "@mui/material";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const ResetPassword = () => {

  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [forgotPasswordVisible, setForgotPasswordVisible] = useState(false);
  const [loginVisible, setLoginButtonVisible] = useState(false);

  const router = useRouter();

  const { token, email } = router.query;

  const validatePassword = () => {
    if (password.length === 0) {
      setMessage("Password must not be empty");
      setTimeout(() => setMessage(""), 3000);
      return false;
    }
    if (password.length < 6) {
      setMessage("Password must be at least 6 characters long");
      setTimeout(() => setMessage(""), 3000);
      return false;
    }
    if (password.match("[<>&\'\"/]+")) {
      setMessage("Password cannot contain < > & \' \" or /");
      setTimeout(() => setMessage(""), 3000);
      return false;
    }
    return true;
  }

  const reset = async (e: any) => {
    e.preventDefault();
    setLoading(true);
    if (validatePassword()) {
      const response = await fetch(Constants.BASE_URL + `account/password/reset`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ token: token, password: password, email: email }),
      });
      const responseJson = await response.json();
      if (response.ok) {
        setLoginButtonVisible(true);
        setForgotPasswordVisible(false);
      } else {
        setLoginButtonVisible(false);
        setForgotPasswordVisible(true);
      }
      setMessage(responseJson.message);
    }
    setLoading(false);
  };

  return (
    <>
      <Head>
        <title>Reset Password | Turing Test Chat</title>
      </Head>
      <Box sx={{
        minHeight: "102.5vh",
        backgroundColor: "secondary.main",
        background: "radial-gradient(circle, rgba(19,42,122,1) 0%, rgba(29,29,29,1) 100%)",
        backgroundPosition: "center",
        backgroundSize: "100vw",
        maxWidth: "100vw",
      }}>
        <Header />
        <Container maxWidth="xs" sx={{ mt: 25 }}>
          {token && email ? <Grid container direction={"column"} sx={{ justifyContent: "center", display: "flex", width: "100%" }}>
            <Typography variant="h1" sx={{ fontSize: 50 }}>Reset Password</Typography>
            <form onSubmit={reset}>
              <TextField variant="filled" type="password" label="Enter New Password" sx={{ width: "100%", input: { color: "#e9e9e9" } }} value={password} onChange={(e) => setPassword(e.target.value)}></TextField>
              <Button type="submit" disabled={loading} variant="contained" sx={{ width: "100%" }}>{loading ? "Processing" : "Submit"}</Button>
            </form>
            {message.length > 0 && <Typography>{message}</Typography>}
          </Grid> : <Typography>You need to click the link in your email to reset your password.</Typography>}
          <Link style={{ visibility: loginVisible ? "visible" : "hidden" }} href="/login"><Button variant="contained" sx={{width: "100%", mt: 2}}>Go to login</Button></Link>
          <Link style={{ visibility: forgotPasswordVisible ? "visible" : "hidden", color: "#E9E9E9", fontFamily: "monospace" }} href="/forgotpassword"><Button variant="contained" sx={{width: "100%" }}>Go to Forgot Password</Button></Link>
        </Container>
      </Box>
      <Footer />
    </>
  )
}

export default ResetPassword;
