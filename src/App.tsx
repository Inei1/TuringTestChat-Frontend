import { createContext } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { UserHome } from './chat/UserHome';
import { ChatRoom } from './chat/ChatRoom';
import { io } from 'socket.io-client';
import { LoginState } from './types';
import { Homepage } from './Homepage';
import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@emotion/react';
import { PrivacyPolicy } from './homepage/PrivacyPolicy';
import { Tos } from './homepage/Tos';
import ReactGA from "react-ga4";
import { ChatWaiting } from './chat/ChatWaiting';
import { Box, Container, Typography } from '@mui/material';
import { Helmet } from 'react-helmet-async';
import { Header } from './Header';
import { Subscribe } from './homepage/Subscribe';
import { Footer } from './homepage/Footer';
import { Blog } from './homepage/Blog';
import { Blog2 } from './blog/Blog2';
import { Blog1 } from './blog/Blog1';
import { Blog3 } from './blog/Blog3';
import { Blog4 } from './blog/Blog4';
import { Blog5 } from './blog/Blog5';
import { Blog6 } from './blog/Blog6';

ReactGA.initialize("G-J8W08XRDN6");

interface LoginStateContextType {
  loginState: LoginState;
  setLoginState: React.Dispatch<React.SetStateAction<LoginState>>;
}

export const LoginStateContext = createContext<LoginStateContextType>({
  loginState: { tabIndex: 0, loggedIn: false },
  setLoginState: () => null,
});

const socket = io(process.env.NODE_ENV === "production" ? "https://www.turingtestchat.com" : "localhost:8080",
  { autoConnect: false, transports: ["websocket"], upgrade: false, closeOnBeforeunload: false });

const theme = createTheme({
  palette: {
    contrastThreshold: 4.5,
    primary: {
      main: "#1F51FF",
    },
    secondary: {
      main: "#1D1D1D",
    },
    info: {
      main: "#E9E9E9",
    },
  },
  typography: {
    fontFamily: "monospace",
    allVariants: {
      color: "#E9E9E9",
    }
  },
  components: {
    MuiMenu: {
      styleOverrides: {
        list: {
          "&[role='menu']": {
            backgroundColor: "#E9E9E9"
          }
        }
      }
    }
  }
});

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element:
        <Homepage />
    },
    {
      path: "/home",
      element:
        <UserHome socket={socket} />
    },
    {
      path: "/chatwaiting",
      element:
        <ChatWaiting socket={socket} />
    },
    {
      path: "/chat",
      element:
        <ChatRoom
          socket={socket} />
    },
    {
      path: "/privacypolicy",
      element:
        <PrivacyPolicy />
    },
    {
      path: "/tos",
      element:
        <Tos />
    },
    {
      path: "/waitlist",
      element:
        <>
          <Box sx={{ maxWidth: "100vw", minHeight: "100vh", background: "radial-gradient(circle, rgba(19,42,122,1) 0%, rgba(29,29,29,1) 100%)", }}>
            <Helmet>
              <title>Subscribe to Waitlist | Turing Test Chat</title>
            </Helmet>
            <Header />
            <Container sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              bgcolor: 'inherit',
              mt: 5,
            }}>
              <Typography variant="h1" sx={{ fontSize: 50 }}>Waitlist</Typography>
              <Subscribe />
            </Container>
          </Box>
          <Footer />
        </>
    },
    {
      path: "/blog",
      element:
        <Blog />
    },
    {
      path: "/blog/1",
      element:
        <Blog1 />
    },
    {
      path: "/blog/2",
      element:
        <Blog2 />
    },
    {
      path: "/blog/3",
      element:
        <Blog3 />
    },
    {
      path: "/blog/4",
      element:
        <Blog4 />
    },
    {
      path: "/blog/5",
      element:
        <Blog5 />
    },
    {
      path: "/blog/6",
      element:
        <Blog6 />
    }
  ]);
  return (
    <div style={{ backgroundColor: "#1D1D1D" }} className="App">
      <ThemeProvider theme={theme}>
        <RouterProvider router={router} />
      </ThemeProvider>
    </div>
  );
}

export default App;

