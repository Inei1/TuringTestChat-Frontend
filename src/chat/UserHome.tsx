import { DefaultEventsMap } from '@socket.io/component-emitter';
import { Link, useNavigate } from 'react-router-dom';
import { Socket } from 'socket.io-client';
import { Header } from '../Header';
import { Box, Button, Checkbox, Container, Grid, TextField, Typography } from '@mui/material';
import { Footer } from '../homepage/Footer';
import { Helmet } from 'react-helmet-async';
import { useEffect, useState } from 'react';
import { Constants } from '../Constants';

export interface ChatHomeProps {
  socket: Socket<DefaultEventsMap, DefaultEventsMap>;
}

export const UserHome = (props: ChatHomeProps) => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [betaMessage, setBetaMessage] = useState("");
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    setChecked(localStorage.getItem("checked") === "true");
    //props.socket.disconnect();
  }, []);

  const onCheckBox = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      setChecked(true);
      localStorage.setItem("checked", "true");
    } else {
      setChecked(false);
      localStorage.setItem("checked", "false");
    }
  }

  const validateEmail = (email: string) => {
    if (email.length === 0) {
      setBetaMessage("Email must not be empty");
      return false;
    }
    // validate email regex
    if (!email.match("^(?:(?!.*?[.]{2})[a-zA-Z0-9](?:[a-zA-Z0-9.+!%-]{1,64}|)|\"[a-zA-Z0-9.+!% -]{1,64}\")@[a-zA-Z0-9][a-zA-Z0-9.-]+(.[a-z]{2,}|.[0-9]{1,})$")) {
      setBetaMessage("Invalid email");
      return false;
    }
    // don't allow < > & ' " or /
    // backend escapes these so they will not work properly when trying to log in
    if (email.match("[<>&\'\"/]+")) {
      setBetaMessage("Email cannot contain < > & \' \" or /");
      return false;
    }
    return true;
  }

  const emailSubscribe = async () => {
    if (validateEmail(email)) {
      setBetaMessage((await fetch(Constants.BASE_URL + "account/waitlist", {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        credentials: "include",
        body: JSON.stringify({ email: email })
      }).then(res => res.json())).message);
    }
  };

  const enterChat = (e: any) => {
    props.socket.connect();
    props.socket.emit("startRoom");
    navigate('/chatwaiting');
  };

  return (
    <>
      <Box sx={{
        minHeight: "100vh",
        backgroundColor: "secondary.main",
        background: "radial-gradient(circle, rgba(19,42,122,1) 0%, rgba(29,29,29,1) 100%)",
        backgroundPosition: "center",
        backgroundSize: "100vw",
        backgroundPositionY: 60,
        maxWidth: "100vw",
      }}>
        <Helmet>
          <title>Home | Turing Test Chat</title>
        </Helmet>
        <Header />
        <Container component="section">
          <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <Box sx={{ maxWidth: 800, mt: 15 }}>
              <Typography sx={{ fontSize: 18, mb: 5 }}>You will be paired anonymously with a human or with ChatGPT on entering the chat room.
                Your task is to perform the Turing Test by identifying which of the two you think you were talking to.</Typography>
              <Typography sx={{ fontSize: 18, my: 5 }}>Your chat partner will also be trying to do the same for you.
                You must simultaneously attempt to convince your partner while also determining what they are.</Typography>
              <Typography sx={{ fontSize: 18, my: 5 }}>You will gain or lose exp based on performance. Successfully guessing your partner's identity and convincing your partner of your own identity will give you up to 10 exp each. Failing to do so for either will cost you up to 3 exp each. If you use the back button or otherwise leave the page, you will lose exp.</Typography>
              <Typography sx={{ fontSize: 18, my: 5 }}>Have any questions? Check out the {}
                <Link to="/betafaq" style={{ color: "#e9e9e9", fontFamily: "monospace", fontSize: 18 }}>Beta FAQ</Link></Typography>
              <Typography sx={{ fontSize: 20, my: 5 }}>
                You have {localStorage.getItem("detection") ?
                localStorage.getItem("detection") : 0} detection exp with {}
                {localStorage.getItem("detectionWins") ?
                localStorage.getItem("detectionWins") : 0}/
                {localStorage.getItem("detectionLosses") ?
                localStorage.getItem("detectionLosses") : 0} win/loss ({(100 * Number(localStorage.getItem("detectionWins") ?
                localStorage.getItem("detectionWins") : 0) / Number(localStorage.getItem("detectionLosses") ?
                Number(localStorage.getItem("detectionLosses")) : 1)).toFixed(0)}%) and {}
                {localStorage.getItem("deception") ?
                localStorage.getItem("deception") : 0} deception exp with {}
                {localStorage.getItem("deceptionWins") ?
                localStorage.getItem("deceptionWins") : 0}/
                {localStorage.getItem("deceptionLosses") ?
                localStorage.getItem("deceptionLosses") : 0} win/loss ({(100 * Number(localStorage.getItem("deceptionWins") ?
                localStorage.getItem("deceptionWins") : 0) / Number(localStorage.getItem("deceptionLosses") ?
                Number(localStorage.getItem("deceptionLosses")) : 1)).toFixed(0)}%).
                </Typography>
              <Grid container>
                <Grid item>
                  <Checkbox checked={checked} onChange={onCheckBox} sx={{ color: "#e9e9e9" }} />
                </Grid>
                <Grid item sx={{mt: 1}}>
                  <Typography>By checking this box you acknowledge you are 13 years of age or older</Typography>
                </Grid>
              </Grid>
              <Button disabled={!checked} sx={{ width: "100%", height: 75, fontSize: 30 }} variant="contained" onClick={(e) => enterChat(e)}>Enter Chat Room</Button>
              <Typography sx={{ fontSize: 18, mt: 5 }}>(Optional) enter email here to receive bonus beta tester credits on the full release.
                You will not receive any emails by joining this list, unless you also join the waitlist.
                If you join both the waitlist and this list, you will receive rewards for both!</Typography>
              <TextField
                placeholder="Your email (optional)"
                variant="standard"
                color="info"
                sx={{ width: '100%', input: { color: "#e9e9e9" } }}
                onChange={(e) => setEmail(e.target.value)}
                onKeyDown={(e) => { if (e.key === "Enter") { emailSubscribe() } }}
              />
              <Button
                color="error"
                variant="contained"
                sx={{ width: '100%', mb: 2 }}
                onClick={emailSubscribe}>
                Receive bonus rewards
              </Button>
              {betaMessage.length > 0 && <Typography>{betaMessage}</Typography>}
            </Box>
          </Box>
        </Container>
      </Box>
      <Footer />
    </>
  );
};
