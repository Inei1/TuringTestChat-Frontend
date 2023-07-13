import * as React from "react";
import type { AppProps } from "next/app";
import { EmotionCache } from "@emotion/react";
import { ThemeProvider, CssBaseline, createTheme, Box } from "@mui/material";
import { darkTheme } from "@/util/darkTheme";
import Head from "next/head";
import { LoginContextType, User } from "@/types";
import { Socket, io } from "socket.io-client";
import { DefaultEventsMap } from '@socket.io/component-emitter';
import Script from "next/script";
import { Constants } from "@/Constants";
import { useEffect } from "react";

export interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

const darkThemeProvider = createTheme(darkTheme);

export const LoginContext = React.createContext<LoginContextType>({
  user: null,
  setUser: () => { },
});

export const SocketContext = React.createContext<Socket<DefaultEventsMap, DefaultEventsMap>>(
  io(process.env.NODE_ENV === "production" ? "wss://api.turingtestchat.com" : "localhost:8080",
    { autoConnect: false, transports: ["websocket"], upgrade: false, closeOnBeforeunload: false }));

const MyApp: React.FunctionComponent<MyAppProps> = (props) => {
  const { Component, pageProps } = props;

  const [user, setUser] = React.useState<User | null>(null);

  useEffect(() => {
    const getUser = async (username: string) => {
      const result = await fetch(Constants.BASE_URL + `account/user/${username}`, {
        method: "GET",
        headers: { 'Content-Type': 'application/json' },
        credentials: "include",
      });
      setUser(await result.json());
    }
    const user = localStorage.getItem("user");
    console.log(user);
    if (user) {
      getUser(localStorage.getItem("user")!).catch(console.error);
    }

  }, []);

  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </Head>
      <Script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5833731328065632"
        crossOrigin="anonymous"></Script>
      <Script async src="https://www.googletagmanager.com/gtag/js?id=G-J8W08XRDN6" />
      <Script id="google-analytics">{`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-J8W08XRDN6');
          `}
      </Script>
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