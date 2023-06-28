import { Constants } from "@/Constants";
import { Footer } from "@/homepage/Footer";
import { Box, Button, FormControl, Tab, Tabs, TextField, Typography } from "@mui/material";
import { useContext, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { LoginContext } from "../_app";

export const Login = () => {

  const { user, setUser } = useContext(LoginContext);

  const router = useRouter();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [accountCreated, setAccountCreated] = useState(false);
  const [accountFailedMessage, setAccountFailedMessage] = useState("");
  const [password, setPassword] = useState("");
  const [tabIndex, setTabIndex] = useState(0);

  const handleSignIn = async (e: any) => {
    e.preventDefault();
    try {
      const result = await fetch(Constants.BASE_URL + "login/password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username: name, password: password }),
      }).then(res => res.json());
      if (result.succeeded) {
        setUser(result.user);
        router.push("/home");
      }
    } catch (err) {
      console.error(err);
    }
  };

  const validateSignup = () => {
    if (email.length === 0) {
      setAccountFailedMessage("Email must not be empty");
      setTimeout(() => setAccountFailedMessage(""), 5000);
      return false;
    }
    // validate email regex
    if (!email.match("^(?:(?!.*?[.]{2})[a-zA-Z0-9](?:[a-zA-Z0-9.+!%-]{1,64}|)|\"[a-zA-Z0-9.+!% -]{1,64}\")@[a-zA-Z0-9][a-zA-Z0-9.-]+(.[a-z]{2,}|.[0-9]{1,})$")) {
      setAccountFailedMessage("Invalid email");
      setTimeout(() => setAccountFailedMessage(""), 5000);
      return false;
    }
    // don't allow < > & ' " or /
    // backend escapes these so they will not work properly when trying to log in
    if (email.match("[<>&\'\"/]+")) {
      setAccountFailedMessage("Email cannot contain < > & \' \" or /");
      setTimeout(() => setAccountFailedMessage(""), 5000);
      return false;
    }
    if (name.length === 0) {
      setAccountFailedMessage("Username must not be empty");
      setTimeout(() => setAccountFailedMessage(""), 5000);
      return false;
    }
    if (name.length < 6) {
      setAccountFailedMessage("Username must be at least 6 characters long");
      setTimeout(() => setAccountFailedMessage(""), 5000);
      return false;
    }
    if (name.match("[<>&\'\"/]+")) {
      setAccountFailedMessage("Name cannot contain < > & \' \" or /");
      setTimeout(() => setAccountFailedMessage(""), 5000);
      return false;
    }
    if (password.length === 0) {
      setAccountFailedMessage("Password must not be empty");
      setTimeout(() => setAccountFailedMessage(""), 5000);
      return false;
    }
    if (password.length < 6) {
      setAccountFailedMessage("Password must be at least 6 characters long");
      setTimeout(() => setAccountFailedMessage(""), 5000);
      return false;
    }
    if (password.match("[<>&\'\"/]+")) {
      setAccountFailedMessage("Password cannot contain < > & \' \" or /");
      setTimeout(() => setAccountFailedMessage(""), 5000);
      return false;
    }
    return true;
  }

  const handleSignUp = async (e: any) => {
    e.preventDefault();
    const validate = validateSignup()
    if (validate) {
      try {
        const result = await fetch(Constants.BASE_URL + "account/register", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ username: name, email: email, password: password }),
        }).then(res => res.json());
        if (result.succeeded) {
          setAccountCreated(true);
        } else {
          setAccountFailedMessage(result.message);
        }
      } catch (err) {
        throw err;
      }
    }
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
        <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
          <Box sx={{ minWidth: 350, minHeight: 400 }}>
            <Typography sx={{ mb: 2, fontSize: 20 }} align="center" variant="h1" color="inherit">Turing Test Chat</Typography>
            <Tabs
              variant="fullWidth"
              value={tabIndex}
              centered
              aria-label="login tabs"
              onChange={(_, number) => setTabIndex(number)}>
              <Tab label="Log in" tabIndex={0} />
              <Tab label="Register" tabIndex={1} />
            </Tabs>
            {(() => {
              switch (tabIndex) {
                case 0:
                  return (
                    <form onSubmit={(e) => handleSignIn(e)}>
                      <FormControl margin="none" fullWidth>
                        <TextField
                          color="info"
                          sx={{ mt: 2, input: { color: "#e9e9e9" } }}
                          placeholder="Username"
                          label="Username"
                          variant="filled"
                          value={name}
                          onChange={(e) => setName(e.target.value)} />
                        <TextField
                          color="info"
                          sx={{ mt: 2, mb: 2, input: { color: "#e9e9e9" } }}
                          placeholder="Password"
                          label="Password"
                          variant="filled"
                          value={password}
                          type="password"
                          onChange={(e) => setPassword(e.target.value)} />
                        <Button
                          type="submit"
                          size="large"
                          variant="contained"
                          color="primary"
                          fullWidth
                          onClick={(e) => handleSignIn(e)}>
                          Log in
                        </Button>
                      </FormControl>
                    </form>
                  );
                case 1:
                  return (
                    <form onSubmit={(e) => handleSignUp(e)}>
                      <FormControl margin="none" fullWidth>
                        <TextField
                          color="info"
                          sx={{ mt: 2, input: { color: "#e9e9e9" } }}
                          placeholder="Email"
                          label="Email"
                          variant="filled"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)} />
                        <TextField
                          color="info"
                          sx={{ mt: 2, input: { color: "#e9e9e9" } }}
                          placeholder="Name"
                          label="Name"
                          variant="filled"
                          value={name}
                          onChange={(e) => setName(e.target.value)} />
                        <TextField
                          color="info"
                          sx={{ mt: 2, mb: 2, input: { color: "#e9e9e9" } }}
                          placeholder="Password"
                          label="Password"
                          variant="filled"
                          value={password}
                          type="password"
                          onChange={(e) => setPassword(e.target.value)} />
                        <Button
                          type="submit"
                          size="large"
                          variant="contained"
                          color="primary"
                          fullWidth
                          onClick={(e) => handleSignUp(e)}>
                          Create Account
                        </Button>
                      </FormControl>
                    </form>
                  )
              };
            })()}
            {accountCreated && tabIndex === 1 && <Typography>Account successfully created! Please log in.</Typography>}
            {accountFailedMessage.length > 0 && tabIndex === 1 && <Typography>{accountFailedMessage}</Typography>}
            {/* <Link style={{ color: "#E9E9E9", fontFamily: "monospace" }} href={"/forgotpassword"}>Forgot Password?</Link> */}
          </Box>
        </Box>
      </Box>
      <Footer />
    </>
  )
}

export default Login;