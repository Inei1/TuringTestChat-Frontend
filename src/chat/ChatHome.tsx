import { DefaultEventsMap } from '@socket.io/component-emitter';
import { useNavigate } from 'react-router-dom';
import { Socket } from 'socket.io-client';
import { Header } from '../Header';
import { Box, Button, Container, Typography } from '@mui/material';
import logopng from "../img/TTCbgplainv1.png";
import logowebp from "../img/TTCbgplainv1.webp";
import { Footer } from '../homepage/Footer';

export interface SelectRoomProps {
  socket: Socket<DefaultEventsMap, DefaultEventsMap>;
}

export const ChatHome = (props: SelectRoomProps) => {
  const navigate = useNavigate();

  const enterChat = (e: any) => {
    navigate('/chat');
  };

  return (
    <>
      <Box sx={{
        minHeight: "100vh",
        backgroundColor: "secondary.main",
        background: `url(${logowebp}), url(${logopng})`,
        backgroundPosition: "center",
        backgroundSize: "100vw",
        backgroundPositionY: 60,
        maxWidth: "100vw",
      }}>
        <Header />
        <Container component="section">
          <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <Box sx={{ maxWidth: 800, mt: 15 }}>
              {/* <Typography>Select some interests</Typography> */}
              {/* <Typography>I want to (pretend to) be...</Typography>
          <Typography>Human</Typography>
          <Typography>Bot</Typography>
          <Typography>Both</Typography> */}
              {/* <Typography>Spectator</Typography> */}
              {/* <Typography>Select language: English, Spanish, etc</Typography> */}
              {/* <Typography>Select duration: 2.5, 5 min, unlimited</Typography>*/}

              <Typography sx={{ fontSize: 18, mb: 5 }}>You will be paired anonymously with a human or with ChatGPT on entering the chat room.
                Your task is to perform the Turing Test by identifying which of the two you think you were talking to.</Typography>
              <Typography sx={{ fontSize: 18, my: 5 }}>Your chat partner will also be trying to do the same for you.
                You must simultaneously attempt to convince your partner while also determining what they are.</Typography>
              <Typography sx={{ fontSize: 18, my: 5 }}>You will gain or lose points based on performance. Successfully guessing your partner's identity and convincing your partner of your own identity will give you up to 10 points each. Failing to do so for either will cost you up to 3 points each.</Typography>
              <Typography sx={{ my: 5 }} variant="h4">Do not share any personal information.</Typography>
              <Button sx={{ width: "100%", height: 75, fontSize: 30 }} variant="contained" onClick={(e) => enterChat(e)}>Enter Chat Room</Button>
              {/* <Button>Enter Group Chat Room</Button> */}
            </Box>
          </Box>
        </Container>
      </Box>
      <Footer />
    </>
  );
};
