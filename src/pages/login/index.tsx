import { Constants } from "@/Constants";
import { Footer } from "@/homepage/Footer";
import { Box, Button, Checkbox, FormControl, FormControlLabel, Grid, Tab, Tabs, TextField, Typography } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { LoginContext } from "../_app";
import { StatusCodes } from "http-status-codes";
import { isMobile } from "react-device-detect";

export const Login = () => {

  const { user, setUser } = useContext(LoginContext);

  const router = useRouter();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [accountCreatedMessage, setAccountCreatedMessage] = useState("");
  const [accountFailedMessage, setAccountFailedMessage] = useState("");
  const [password, setPassword] = useState("");
  const [tabIndex, setTabIndex] = useState(0);
  const [tosAccepted, setTosAccepted] = useState(false);
  const [loginFailedMessage, setLoginFailedMessage] = useState("");
  const [registerLoading, setRegisterLoading] = useState(false);
  const [loginLoading, setLoginLoading] = useState(false);

  const handleSignIn = async (e: any) => {
    setLoginLoading(true);
    e.preventDefault();
    try {
      const result = await fetch(Constants.BASE_URL + "login/password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username: name.trim(), password: password }),
      });
      if (result.ok) {
        const resultJson = await result.json();
        setUser(resultJson.user);
        router.push("/home");
        localStorage.setItem("user", resultJson.user.username);
      } else if (result.status === StatusCodes.UNAUTHORIZED) {
        setLoginFailedMessage("Incorrect username or password");
        setTimeout(() => setLoginFailedMessage(""), 3000);
      } else if (result.status === StatusCodes.BAD_REQUEST) {
        setLoginFailedMessage("Enter a valid username and password");
        setTimeout(() => setLoginFailedMessage(""), 3000);
      } else {
        setLoginFailedMessage("An unknown error occurred");
        setTimeout(() => setLoginFailedMessage(""), 3000);
      }
    } catch (err) {
      console.error(err);
    }
    setLoginLoading(false);
  };

  const handleSignInGoogle = async () => {
    router.push("http://localhost:8080/login/google");
    //   const result = await fetch(Constants.BASE_URL + "login/google", {
    //     method: "GET",
    //     headers: { "Content-Type": "application/json" },
    //   });
    //   if (result.ok) {
    //     const resultJson = await result.json();
    //     setUser(resultJson.user);
    //     router.push("/home");
    //   }
    // } catch (err) {
    //   console.error(err);
    // }
  }

  const validateSignup = () => {
    if (email.length === 0) {
      setAccountFailedMessage("Email must not be empty");
      setTimeout(() => setAccountFailedMessage(""), 3000);
      return false;
    }
    if (email.length > 254) {
      setAccountFailedMessage("Email must be 254 characters or less");
      setTimeout(() => setAccountFailedMessage(""), 3000);
      return false;
    }
    // validate email regex
    if (!email.match("^(?:(?!.*?[.]{2})[a-zA-Z0-9](?:[a-zA-Z0-9.+!%-]{1,64}|)|\"[a-zA-Z0-9.+!% -]{1,64}\")@[a-zA-Z0-9][a-zA-Z0-9.-]+(.[a-z]{2,}|.[0-9]{1,})$")) {
      setAccountFailedMessage("Invalid email");
      setTimeout(() => setAccountFailedMessage(""), 3000);
      return false;
    }
    // don't allow < > & ' " or /
    // backend escapes these so they will not work properly when trying to log in
    if (email.match("[<>&\'\"/]+")) {
      setAccountFailedMessage("Email cannot contain < > & \' \" or /");
      setTimeout(() => setAccountFailedMessage(""), 3000);
      return false;
    }
    if (name.length === 0) {
      setAccountFailedMessage("Username must not be empty");
      setTimeout(() => setAccountFailedMessage(""), 3000);
      return false;
    }
    if (name.length > 64) {
      setAccountFailedMessage("Username must be 64 characters or less");
      setTimeout(() => setAccountFailedMessage(""), 3000);
      return false;
    }
    if (name.match("[<>&\'\"/]+")) {
      setAccountFailedMessage("Name cannot contain < > & \' \" or /");
      setTimeout(() => setAccountFailedMessage(""), 3000);
      return false;
    }
    if (name.match(/^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/gi)) {
      setAccountFailedMessage("Name cannot be a UUID");
      setTimeout(() => setAccountFailedMessage(""), 3000);
      return false;
    }
    if (password.length === 0) {
      setAccountFailedMessage("Password must not be empty");
      setTimeout(() => setAccountFailedMessage(""), 3000);
      return false;
    }
    if (password.length < 6) {
      setAccountFailedMessage("Password must be at least 6 characters long");
      setTimeout(() => setAccountFailedMessage(""), 3000);
      return false;
    }
    if (password.length > 64) {
      setAccountFailedMessage("Password must be 64 characters or less");
      setTimeout(() => setAccountFailedMessage(""), 3000);
      return false;
    }
    if (password.match("[<>&\'\"/]+")) {
      setAccountFailedMessage("Password cannot contain < > & \' \" or /");
      setTimeout(() => setAccountFailedMessage(""), 3000);
      return false;
    }
    return true;
  }

  const handleSignUp = async (e: any) => {
    setRegisterLoading(true);
    e.preventDefault();
    const validate = validateSignup()
    if (validate) {
      try {
        const result = await fetch(Constants.BASE_URL + "account/register", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ username: name.trim(), email: email.trim(), password: password.trim() }),
        }).then(res => res.json());
        if (result.ok) {
          setAccountCreatedMessage(result.message);
        } else {
          setAccountFailedMessage(result.message);
          setTimeout(() => setAccountFailedMessage(""), 3000);
        }
      } catch (err) {
        throw err;
      }
    }
    setRegisterLoading(false);
  };

  useEffect(() => {
    if (globalThis.ezstandalone) {
      ezstandalone.define(121, 126);
      if (!ezstandalone.enabled) {
        ezstandalone.enable();
        ezstandalone.display();
      } else {
        ezstandalone.refresh();
      }
    }
  }, []);

  return (
    <>
      <Box sx={{
        minHeight: isMobile ? "110vh" : "102.5vh",
        backgroundColor: "secondary.main",
        background: "radial-gradient(circle, rgba(19,42,122,1) 0%, rgba(29,29,29,1) 100%)",
        backgroundPosition: "center",
        backgroundSize: "100vw",
        maxWidth: "100vw",
      }}>
        <Link href="/">
          <Image src="/TTCLogov2.png" alt="Turing Test Chat logo" width={isMobile ? 128 : 256} height={isMobile ? 128 : 256} style={{ marginTop: "1em", marginLeft: "1em" }} />
        </Link>
        <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
          <Box sx={{ width: 350, height: 400, mt: isMobile ? 0 : -20 }}>
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
                      {/* <div id="g_id_onload"
                        data-client_id="503289598094-1olualu4iqgr429omgd1tl2r2ubjij1v.apps.googleusercontent.com"
                        data-context="signin"
                        data-ux_mode="popup"
                        data-login_uri="https://www.turingtestchat.com/login"
                        data-auto_prompt="false">
                      </div>

                      <div className="g_id_signin"
                        data-type="standard"
                        data-shape="rectangular"
                        data-theme="filled_blue"
                        data-text="signin_with"
                        data-size="large"
                        data-logo_alignment="left">
                      </div> */}
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
                          disabled={loginLoading}
                          type="submit"
                          size="large"
                          variant="contained"
                          color="primary"
                          fullWidth
                          onClick={(e) => handleSignIn(e)}>
                          {loginLoading ? "Processing" : "Log in"}
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
                        <FormControlLabel
                          sx={{ mr: "auto" }}
                          label={`I accept the Terms of Service and Privacy Policy, and I am at least 13 years of age or older`}
                          control={<Checkbox checked={tosAccepted} onChange={(e) => setTosAccepted(e.target.checked)} />} />
                        <Button
                          disabled={!tosAccepted || registerLoading}
                          type="submit"
                          size="large"
                          variant="contained"
                          color="primary"
                          fullWidth
                          onClick={(e) => handleSignUp(e)}>
                          {registerLoading ? "Processing" : "Create Account"}
                        </Button>
                      </FormControl>
                    </form>
                  )
              };
            })()}
            <Box sx={{ mt: 3 }} />
            <Link href="/forgotpassword" style={{ color: "#E9E9E9", fontFamily: "monospace", marginLeft: 100, }}>Forgot Password?</Link>
            {accountCreatedMessage.length > 0 && tabIndex === 1 && <Typography>{accountCreatedMessage}</Typography>}
            {accountFailedMessage.length > 0 && tabIndex === 1 && <Typography>{accountFailedMessage}</Typography>}
            {loginFailedMessage.length > 0 && <Typography>{loginFailedMessage}</Typography>}
            {/* <Link style={{ color: "#E9E9E9", fontFamily: "monospace" }} href={"/forgotpassword"}>Forgot Password?</Link> */}
          </Box>
        </Box>
        <div id="ezoic-pub-ad-placeholder-126" />
      </Box>
      <Footer />
    </>
  )
}

export default Login;