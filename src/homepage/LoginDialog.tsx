import { Box, Button, Dialog, FormControl, IconButton, Tab, Tabs, TextField, Typography } from "@mui/material";
import React, { useContext, useState } from "react";
// import CloseIcon from '@mui/icons-material/Close';
import { setAccesstoken } from "../setAccesstoken";
import { Constants } from "../Constants";
import { LoginStateContext } from "../App";

export interface LoginDialogProps {
  open: boolean;
  tabIndex: number;
  onClose: any;
  onChange: any;
}

export const LoginDialog = (props: LoginDialogProps) => {

  const { loginState, setLoginState } = useContext(LoginStateContext);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [accountCreated, setAccountCreated] = useState(false);
  const [accountFailed, setAccountFailed] = useState(false);
  const [accountFailedMessage, setAccountFailedMessage] = useState("");
  const [password, setPassword] = useState("");

  const handleSignIn = async () => {
    try {
      const result = await fetch(Constants.BASE_URL + "api/auth/login/" + name, {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password: password }),
        credentials: "include",
      }).then(res => res.json());
      if (result.succeeded) {
        localStorage.setItem("user", result.user);
        setAccesstoken(result.accessToken);
        props.onClose();
        if (result.accessToken) {
          setAccesstoken(result.accessToken);
        }
      }
    } catch (err) {
      console.error(err);
    }
  };

  const handleSignUp = async () => {
    try {
      const result = await fetch(Constants.BASE_URL + "api/users/" + name, {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: email, password: password }),
      }).then(res => res.json());
      if (result.succeeded) {
        setAccountCreated(true);
        if (result.accessToken) {
          setAccesstoken(result.accessToken);
        }
      } else {
        setAccountFailed(true);
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
    <Dialog open={props.open} onClose={props.onClose} fullWidth maxWidth="xs">
      <Box p={2}>
        <IconButton
          aria-label=""
          onClick={props.onClose}>
          {/* <CloseIcon color="action" /> */}
        </IconButton>
        <Typography sx={{ mb: 2 }} align="center" variant="h5" color="inherit">Idle Game Engine</Typography>
        <Tabs
          variant="fullWidth"
          value={props.tabIndex}
          centered
          aria-label="login tabs"
          onChange={(_, number) => props.onChange(number)}>
          <Tab label="Log in" tabIndex={0} />
          <Tab label="Register" tabIndex={1} />
        </Tabs>
        {(() => {
          switch (props.tabIndex) {
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
        {accountCreated && props.tabIndex === 1 && <Typography>Account successfully created! Please log in.</Typography>}
        {accountFailed && props.tabIndex === 1 && <Typography>{accountFailedMessage}</Typography>}
      </Box>
    </Dialog>
  )
}
