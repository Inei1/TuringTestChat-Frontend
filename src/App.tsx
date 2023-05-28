import { createContext } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { LoginState } from './types';
import { Homepage } from './Homepage';
import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@emotion/react';
import { Login } from './homepage/Login';
import { Subscribe } from './homepage/Subscribe';
import { Box, Container, Typography } from '@mui/material';
import { Header } from './Header';
import { PrivacyPolicy } from './homepage/PrivacyPolicy';
import { Tos } from './homepage/Tos';
import ReactGA from "react-ga4";
import { Blog } from './homepage/Blog';
import { Blog2 } from './blog/Blog2';
import { Blog1 } from './blog/Blog1';
import { Blog3 } from './blog/Blog3';
import { Blog4 } from './blog/Blog4';
import { Helmet } from 'react-helmet-async';
import { Footer } from './homepage/Footer';
import { Blog5 } from './blog/Blog5';
import { Blog6 } from './blog/Blog6';
import { BetaFaq } from './homepage/BetaFaq';

ReactGA.initialize("G-J8W08XRDN6");

interface LoginStateContextType {
  loginState: LoginState;
  setLoginState: React.Dispatch<React.SetStateAction<LoginState>>;
}

export const LoginStateContext = createContext<LoginStateContextType>({
  loginState: { tabIndex: 0, loggedIn: false },
  setLoginState: () => null,
});

//const socket = io("https://www.turingtestchat.com");

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
      main: "#e9e9e9",
    },
  },
  typography: {
    fontFamily: "monospace",
    allVariants: {
      color: "#e9e9e9",
    }
  },
});

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element:
        <Homepage />
    },
    {
      path: "/login",
      element:
        <Login />
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
      path: "/betafaq",
      element:
        <BetaFaq />
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
    },
    {
      path: "/VGhpcyBpcyB0aGUgYmVnaW5uaW5nIG9mIHRoZSByb2JvdCByZXZvbHV0aW9u",
      element: null
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

