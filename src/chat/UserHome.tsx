import { DefaultEventsMap } from '@socket.io/component-emitter';
import { Link, useNavigate } from 'react-router-dom';
import { Socket } from 'socket.io-client';
import { Header } from '../Header';
import { Box, Button, Container, Typography } from '@mui/material';
import { Footer } from '../homepage/Footer';
import { Helmet } from 'react-helmet-async';

export interface ChatHomeProps {
  socket: Socket<DefaultEventsMap, DefaultEventsMap>;
}

export const UserHome = (props: ChatHomeProps) => {
  const navigate = useNavigate();

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
                You have {localStorage.getItem("detection")} detection exp with {}
                {localStorage.getItem("detectionWins")}/
                {localStorage.getItem("detectionLosses")} win/loss (
                {(100 * (Number(localStorage.getItem("detectionWins")) /
                Math.max(Number(localStorage.getItem("detectionLosses")) +
                Number(localStorage.getItem("detectionWins")), 1))).toFixed(0)}%) and {}
                {localStorage.getItem("deception") ?
                localStorage.getItem("deception") : 0} deception exp with {}
                {localStorage.getItem("deceptionWins") ?
                localStorage.getItem("deceptionWins") : 0}/
                {localStorage.getItem("deceptionLosses") ?
                localStorage.getItem("deceptionLosses") : 0} win/loss (
                  {(100 * (Number(localStorage.getItem("deceptionWins")) /
                  Math.max(Number(localStorage.getItem("deceptionLosses")) +
                  Number(localStorage.getItem("deceptionWins")), 1))).toFixed(0)}%)
                </Typography>
              <Button sx={{ width: "100%", height: 75, fontSize: 30 }} variant="contained" onClick={(e) => enterChat(e)}>Enter Chat Room</Button>
            </Box>
          </Box>
        </Container>
      </Box>
      <Footer />
    </>
  );
};
