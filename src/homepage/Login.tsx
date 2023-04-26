import { Box, Button, FormControl, Grid, Tab, Tabs, TextField, Typography } from "@mui/material";
import { useState } from "react";
// import CloseIcon from '@mui/icons-material/Close';
import { setAccesstoken } from "../setAccesstoken";
import { Constants } from "../Constants";
import { useNavigate } from "react-router-dom";
import { Footer } from "./Footer";

export const Login = () => {

  const navigate = useNavigate();


  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [accountCreated, setAccountCreated] = useState(false);
  const [loginFailedMessage, setLoginFailedMessage] = useState("");
  const [accountFailedMessage, setAccountFailedMessage] = useState("");
  const [password, setPassword] = useState("");
  const [tabIndex, setTabIndex] = useState(0);

  const handleSignIn = async () => {
    try {
      const result = await fetch(Constants.BASE_URL + "login/password", {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username: name, password: password }),
      });
      if (result.ok) {
        const resultJson = await result.json();
        console.log(resultJson);
        localStorage.setItem("user", resultJson.user.username);
        navigate("/home");
      } else if (result.statusText === "Unauthorized") {
        setLoginFailedMessage("Username or password not found");
        setTimeout(() => setLoginFailedMessage(""), 5000);
      } else {
        setLoginFailedMessage("An unknown error occurred");
        setTimeout(() => setLoginFailedMessage(""), 5000);
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

  const handleSignUp = async () => {
    const validate = validateSignup()
    if (validate) {
      try {
        const result = await fetch(Constants.BASE_URL + "account/register", {
          method: "POST",
          headers: { 'Content-Type': 'application/json' },
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

  const handleForget = (email: string) => {
    console.log({ email });
  };

  return (
    <Box sx={{ height: "100vh" }}>
      <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
        <Box sx={{ minWidth: 350, minHeight: 400, my: 5 }}>
          <Grid container spacing={0} direction="column" alignItems="center" justifyContent="center">
            <Box component="img" alt="TuringTestChat logo" src="TTCLogov2.png" sx={{ maxWidth: "10vh", }} />
          </Grid>
          <Typography sx={{ mb: 2 }} align="center" variant="h5">Turing Test Chat</Typography>
          <Tabs
            variant="fullWidth"
            value={tabIndex}
            centered
            aria-label="login tabs"
            onChange={(_, number) => setTabIndex(number)}>
            <Tab label="Log in" tabIndex={0} sx={{ color: "#e9e9e9" }} />
            <Tab label="Register" tabIndex={1} sx={{ color: "#e9e9e9" }} />
          </Tabs>
          {(() => {
            switch (tabIndex) {
              case 0:
                return (
                  <FormControl margin="none" fullWidth>
                    <TextField
                      sx={{ mt: 2, input: { color: "#e9e9e9" } }}
                      placeholder="Name or email"
                      label="Name or email"
                      variant="filled"
                      value={name}
                      onChange={(e) => setName(e.target.value)} />
                    <TextField
                      sx={{ mt: 2, mb: 2, input: { color: "#e9e9e9" } }}
                      placeholder="Password"
                      label="Password"
                      variant="filled"
                      value={password}
                      type="password"
                      onChange={(e) => setPassword(e.target.value)}
                      onKeyDown={(e) => { if (e.key === "Enter") { handleSignIn() } }} />
                    <Button
                      size="large"
                      variant="contained"
                      color="primary"
                      fullWidth
                      onClick={() => handleSignIn()}>
                      Log in
                    </Button>
                  </FormControl>
                );
              case 1:
                return (
                  <FormControl margin="none" fullWidth>
                    <TextField
                      sx={{ mt: 2, input: { color: "#e9e9e9" } }}
                      placeholder="Email"
                      label="Email"
                      variant="filled"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)} />
                    <TextField
                      sx={{ mt: 2, input: { color: "#e9e9e9" } }}
                      placeholder="Name"
                      label="Name"
                      variant="filled"
                      value={name}
                      onChange={(e) => setName(e.target.value)} />
                    <TextField
                      sx={{ mt: 2, mb: 2, input: { color: "#e9e9e9" } }}
                      placeholder="Password"
                      label="Password"
                      variant="filled"
                      value={password}
                      type="password"
                      onChange={(e) => setPassword(e.target.value)}
                      onKeyDown={(e) => { if (e.key === "Enter") { handleSignUp() } }} />
                    <Button
                      size="large"
                      variant="contained"
                      color="primary"
                      fullWidth
                      onClick={() => handleSignUp()}>
                      Create Account
                    </Button>
                  </FormControl>
                )
            };
          })()}
          {accountCreated && tabIndex === 1 && <Typography>Account successfully created! Please log in.</Typography>}
          {accountFailedMessage.length > 0 && tabIndex === 1 && <Typography>{accountFailedMessage}</Typography>}
          {loginFailedMessage.length > 0 && tabIndex === 0 && <Typography>{loginFailedMessage}</Typography>}
        </Box>
      </Box>
      <Box sx={{ marginTop: "auto" }}>
        <Footer />
      </Box>
    </Box>
  )
}
