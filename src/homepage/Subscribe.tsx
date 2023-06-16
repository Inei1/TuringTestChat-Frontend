import { Box, Button, Container, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { Constants } from "../Constants";

export const Subscribe = () => {

  const [email, setEmail] = useState("");
  const [comment, setComment] = useState("");
  const [waitlistMessage, setWaitlistMessage] = useState("");

  const validateEmail = (email: string) => {
    if (email.length === 0) {
      setWaitlistMessage("Email must not be empty");
      return false;
    }
    // validate email regex
    if (!email.match("^(?:(?!.*?[.]{2})[a-zA-Z0-9](?:[a-zA-Z0-9.+!%-]{1,64}|)|\"[a-zA-Z0-9.+!% -]{1,64}\")@[a-zA-Z0-9][a-zA-Z0-9.-]+(.[a-z]{2,}|.[0-9]{1,})$")) {
      setWaitlistMessage("Invalid email");
      return false;
    }
    // don't allow < > & ' " or /
    // backend escapes these so they will not work properly when trying to log in
    if (email.match("[<>&\'\"/]+")) {
      setWaitlistMessage("Email cannot contain < > & \' \" or /");
      return false;
    }
    return true;
  }

  const emailSubscribe = async () => {
    if (validateEmail(email)) {
      setWaitlistMessage((await fetch(Constants.BASE_URL + "account/waitlist", {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        credentials: "include",
        body: JSON.stringify({ email: email, comment: comment })
      }).then(res => res.json())).message);
    }
  };

  return (
    <Box>
      <Container component="section">
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            bgcolor: 'inherit',
            mt: 5
          }}
        >
          <Box sx={{ maxWidth: 800 }}>
            <Typography variant="h5">
              Join the waitlist to be notified when Turing Test Chat releases for free.
            </Typography>
            <TextField
              placeholder="Your email"
              variant="standard"
              color="info"
              sx={{ width: '100%', mt: 3, input: { color: "#e9e9e9" } }}
              onChange={(e) => setEmail(e.target.value)}
              onKeyDown={(e) => { if (e.key === "Enter") { emailSubscribe() } }}
            />
            <TextField
              placeholder="Comment (optional)"
              variant="standard"
              color="info"
              sx={{ width: '100%', mt: 2, mb: 2, input: { color: "#e9e9e9" } }}
              onChange={(e) => setComment(e.target.value)}
              onKeyDown={(e) => { if (e.key === "Enter") { emailSubscribe() } }}
            />
            <Button
              color="error"
              variant="contained"
              sx={{ width: '100%' }}
              onClick={emailSubscribe}>
              Join waitlist
            </Button>
            <Typography>
              <b>Turing Test Chat</b> is offering bonus rewards to those who sign up now for its full release.
              By joining, you will receive updates until the release date.
              However, if you wish to opt-out at any time, you can do so with two clicks.
              This is a great opportunity to stay updated with the latest news and be rewarded for your interest in the upcoming launch.
              <b>Don't miss out on this chance and sign up today!</b>
            </Typography>
            {waitlistMessage.length > 0 && <Typography>{waitlistMessage}</Typography>}
          </Box>
        </Box>
      </Container>
    </Box>
  );
}