import * as React from "react";
import type { AppProps } from "next/app";
import { EmotionCache } from "@emotion/react";
import { ThemeProvider, CssBaseline, createTheme, Box } from "@mui/material";
import { darkTheme } from "@/util/darkTheme";
import Head from "next/head";
import { LoginContextType, User } from "@/types";
import { Socket, io } from "socket.io-client";
import { DefaultEventsMap } from '@socket.io/component-emitter';

export interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

const darkThemeProvider = createTheme(darkTheme);

export const LoginContext = React.createContext<LoginContextType>({
  user: null,
  setUser: () => { },
});

export const SocketContext = React.createContext<Socket<DefaultEventsMap, DefaultEventsMap>>(
  io(process.env.NODE_ENV === "production" ? "wss://api.turingtestchat.com" : "192.168.0.166:8080",
    { autoConnect: false, transports: ["websocket"], upgrade: false, closeOnBeforeunload: false }));

const MyApp: React.FunctionComponent<MyAppProps> = (props) => {
  const { Component, pageProps } = props;

  const [user, setUser] = React.useState<User | null>(null);

  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </Head>
      <ThemeProvider theme={darkThemeProvider}>
        <LoginContext.Provider value={{ user, setUser }}>
          <CssBaseline />
          <Box sx={{ mt: "-18px" }} />
          <Component {...pageProps} />
        </LoginContext.Provider>
      </ThemeProvider>
    </>
  );
};

export default MyApp;