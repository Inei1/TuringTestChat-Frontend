import { createContext } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { UserHome } from './chat/UserHome';
import { ChatRoom } from './chat/ChatRoom';
import { io } from 'socket.io-client';
import { LoginState } from './types';
import { Homepage } from './Homepage';
import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@emotion/react';
import { Login } from './homepage/Login';
import { PrivacyPolicy } from './homepage/PrivacyPolicy';
import { Tos } from './homepage/Tos';
import ReactGA from "react-ga4";
import { ChatWaiting } from './chat/ChatWaiting';

ReactGA.initialize("G-J8W08XRDN6");

interface LoginStateContextType {
  loginState: LoginState;
  setLoginState: React.Dispatch<React.SetStateAction<LoginState>>;
}

export const LoginStateContext = createContext<LoginStateContextType>({
  loginState: { tabIndex: 0, loggedIn: false },
  setLoginState: () => null,
});

const socket = io(process.env.NODE_ENV === "production" ? "https://www.turingtestchat.com" : "localhost:8080", { autoConnect: false });

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
      path: "/login",
      element:
        <Login />
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
    // {
    //   path: "/home/settings",
    //   element:
    //     <Settings />
    // }
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

