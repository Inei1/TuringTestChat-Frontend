import { Box, Button, FormControl, Tab, Tabs, TextField, Typography } from "@mui/material";
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
  const [accountFailedMessage, setAccountFailedMessage] = useState("");
  const [password, setPassword] = useState("");
  const [tabIndex, setTabIndex] = useState(0);

  const handleSignIn = async () => {
    try {
      const result = await fetch(Constants.BASE_URL + "login/password", {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username: name, password: password }),
      }).then(res => res.json());
      if (result.succeeded) {
        localStorage.setItem("user", result.user);
        navigate("/joinchat");
      }
    } catch (err) {
      console.error(err);
    }
  };

  const handleSignUp = async () => {
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
  };

  const handleForget = (email: string) => {
    console.log({ email });
  };

  return (
    <Box sx={{height: "100vh"}}>
      <Typography>Logo</Typography>
      <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
        <Box sx={{ minWidth: 350, minHeight: 400 }}>
          <Typography sx={{ mb: 2 }} align="center" variant="h5" color="inherit">Turing Test Chat</Typography>
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
                  <FormControl margin="none" fullWidth>
                    <TextField
                      sx={{ mt: 2 }}
                      placeholder="Name or email"
                      label="Name or email"
                      variant="filled"
                      value={name}
                      onChange={(e) => setName(e.target.value)} />
                    <TextField
                      sx={{ mt: 2, mb: 2 }}
                      placeholder="Password"
                      label="Password"
                      variant="filled"
                      value={password}
                      type="password"
                      onChange={(e) => setPassword(e.target.value)} />
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
                      sx={{ mt: 2 }}
                      placeholder="Email"
                      label="Email"
                      variant="filled"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)} />
                    <TextField
                      sx={{ mt: 2 }}
                      placeholder="Name"
                      label="Name"
                      variant="filled"
                      value={name}
                      onChange={(e) => setName(e.target.value)} />
                    <TextField
                      sx={{ mt: 2, mb: 2 }}
                      placeholder="Password"
                      label="Password"
                      variant="filled"
                      value={password}
                      type="password"
                      onChange={(e) => setPassword(e.target.value)} />
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
        </Box>
      </Box>
      <Box sx={{ marginTop: "auto" }}>
        <Footer />
      </Box>
    </Box>
  )
}
