import { createContext, useState } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { SelectRoom } from './chat/SelectRoom';
import { ChatRoom } from './chat/ChatRoom';
import { io } from 'socket.io-client';
import { LoginState } from './types';
import { Homepage } from './Homepage';
import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@emotion/react';
import { Login } from './homepage/Login';
import { Subscribe } from './homepage/Subscribe';
import { Box } from '@mui/material';
import { Header } from './Header';
import { PrivacyPolicy } from './homepage/PrivacyPolicy';
import { Tos } from './homepage/Tos';

interface LoginStateContextType {
  loginState: LoginState;
  setLoginState: React.Dispatch<React.SetStateAction<LoginState>>;
}

export const LoginStateContext = createContext<LoginStateContextType>({
  loginState: { tabIndex: 0, loggedIn: false },
  setLoginState: () => null,
});

const socket = io("https://api.turingtestchat.com");

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
      path: "/joinchat",
      element:
        <SelectRoom socket={socket} />
    },
    {
      path: "/chat",
      element:
        <ChatRoom
          socket={socket} />
    },
    {
      path: "/waitlist",
      element:
        <Box sx={{ width: "100vw", height: "100vh" }}>
          <Header />
          <Subscribe />
        </Box>
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

