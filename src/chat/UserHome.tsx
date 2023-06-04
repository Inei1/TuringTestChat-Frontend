import { DefaultEventsMap } from '@socket.io/component-emitter';
import { Link, useNavigate } from 'react-router-dom';
import { Socket } from 'socket.io-client';
import { Header } from '../Header';
import { Box, Button, Container, Typography } from '@mui/material';
import { Footer } from '../homepage/Footer';
import { Helmet } from 'react-helmet-async';
import { useContext, useEffect, useState } from 'react';
import { User } from '../types';
import { Constants } from '../Constants';
import { LoginContext } from '../App';

export interface ChatHomeProps {
  socket: Socket<DefaultEventsMap, DefaultEventsMap>;
}

export const UserHome = (props: ChatHomeProps) => {

  const { user, setUser } = useContext(LoginContext);

  const navigate = useNavigate();

  const enterChat = (e: any) => {
    props.socket.connect();
    props.socket.emit("startRoom");
    navigate('/chatwaiting');
  };

  const getExpMessage = () => {
    if (!user) {
      return "user not found"
    }
    return "You have " + user.detection + " detection exp with " + user.detectionWins + "/" +
      user.detectionLosses + "win/loss (" +
      (100 * (user.detectionWins / Math.max(user.detectionWins + user.detectionLosses, 1))).toFixed(0) + "%) and " +
      user.deception + " deception exp with " + user.deceptionWins / user.deceptionLosses + " win/loss (" +
      (100 * (user!.deceptionWins / Math.max(user!.deceptionWins +
        user!.deceptionLosses, 1))).toFixed(0) + "%)."
  }

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
            <Box sx={{ maxWidth: 800, mt: 5 }}>
              <Typography sx={{ fontSize: 18, mb: 5 }}>You will be paired anonymously with a human or with ChatGPT on entering the chat room.
                Your task is to perform the Turing Test by identifying which of the two you think you were talking to.</Typography>
              <Typography sx={{ fontSize: 18, my: 5 }}>Your chat partner will also be trying to do the same for you.
                You must simultaneously attempt to convince your partner while also determining what they are.</Typography>
              <Typography sx={{ fontSize: 18, my: 5 }}>You will gain or lose exp based on performance. Successfully guessing your partner's identity and convincing your partner of your own identity will give you up to 10 exp each. Failing to do so for either will cost you up to 3 exp each. If you use the back button or otherwise leave the page, you will lose exp.</Typography>
              <Typography sx={{ fontSize: 18, my: 5 }}>Have any questions? Check out the { }
                <Link to="/betafaq" style={{ color: "#e9e9e9", fontFamily: "monospace", fontSize: 18 }}>Beta FAQ</Link></Typography>
              <Typography sx={{ fontSize: 20, my: 5 }}>
                {getExpMessage()}
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
