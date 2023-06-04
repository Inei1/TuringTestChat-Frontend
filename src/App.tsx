import { createContext, useState } from 'react';
import { createBrowserRouter, RouterProvider, } from 'react-router-dom';
import { UserHome } from './chat/UserHome';
import { ChatRoom } from './chat/ChatRoom';
import { io } from 'socket.io-client';
import { LoginContextType, User } from './types';
import { Homepage } from './Homepage';
import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@emotion/react';
import { PrivacyPolicy } from './homepage/PrivacyPolicy';
import { Tos } from './homepage/Tos';
import ReactGA from "react-ga4";
import { ChatWaiting } from './chat/ChatWaiting';
import { Blog } from './homepage/Blog';
import { Blog2 } from './blog/Blog2';
import { Blog1 } from './blog/Blog1';
import { Blog3 } from './blog/Blog3';
import { Blog4 } from './blog/Blog4';
import { Blog5 } from './blog/Blog5';
import { Blog6 } from './blog/Blog6';
import { Faq } from './homepage/Faq';
import { Unknown } from './unknown';
import { ErrorPage } from './homepage/ErrorPage';
import { NotFoundPage } from './homepage/NotFoundPage';
import { ErrorBoundaryComponent } from './homepage/ErrorBoundaryComponent';
import { Login } from './homepage/Login';
import { EarnCredits } from './homepage/EarnCredits';

ReactGA.initialize("G-J8W08XRDN6");

export const LoginContext = createContext<LoginContextType>({
  user: null,
  setUser: () => { },
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

  const [user, setUser] = useState<User | null>(null);

  const router = createBrowserRouter([
    {
      element: <ErrorBoundaryComponent />,
      children: [
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
          path: "/login",
          element:
            <Login />
        },
        {
          path: "/faq",
          element:
            <Faq />
        },
        {
          path: "/earncredits",
          element:
            <EarnCredits />
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
          path: "/unknown",
          element:
            <Unknown />
        },
        {
          path: "*",
          errorElement:
            <ErrorPage />,
          element:
            <NotFoundPage />
        }
      ]
    }
  ]);
  return (
    <div style={{ backgroundColor: "#1D1D1D" }} className="App">
      <ThemeProvider theme={theme}>
        <LoginContext.Provider value={{ user, setUser }}>
          <RouterProvider router={router} />
        </LoginContext.Provider>
      </ThemeProvider>
    </div>
  );
}

export default App;
