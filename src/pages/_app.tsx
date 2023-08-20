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
  io(process.env.NODE_ENV === "production" ? "wss://api.turingtestchat.com" : "192.168.0.105:8080",
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
    if (!user) {
      localStorage.setItem("user", "guest");
    }
    if (user && user !== "guest") {
      getUser(localStorage.getItem("user")!).catch(console.error);
    }
  }, []);

  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <style>
          @import url('https://fonts.googleapis.com/css2?family=Montserrat&family=Open+Sans:wght@500&display=swap');
        </style>
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
      <Script id="nitropay-setup" data-cfasync="false">{`
      window.nitroAds = window.nitroAds || {
        createAd: function () {
          return new Promise(e => {
            window.nitroAds.queue.push(["createAd", arguments, e])
          })
        }, addUserToken: function () {
          window.nitroAds.queue.push(["addUserToken", arguments])
        }, queue: [] };`}</Script>
      <Script id="nitropay-setup-2" data-cfasync="false" async src="https://s.nitropay.com/ads-1627.js"></Script>
      <Script id="bottom-anchor-ads">{`
        window['nitroAds'].createAd('bottom-anchor', {
          "refreshLimit": 100,
          "refreshTime": 30,
          "format": "anchor",
          "anchor": "bottom",
          "anchorPersistClose": false,
          "mediaQuery": "(min-width: 0px)",
          "report": {
            "enabled": true,
            "icon": true,
            "wording": "Report Ad",
            "position": "top-right"
          }
        });
        `}</Script>
      <Script id="top-anchor-ads">{`
        window['nitroAds'].createAd('top-anchor', {
          "refreshLimit": 100,
          "refreshTime": 30,
          "format": "anchor",
          "anchor": "top",
          "anchorPersistClose": false,
          "mediaQuery": "(min-width: 0px)",
          "report": {
            "enabled": true,
            "icon": true,
            "wording": "Report Ad",
            "position": "bottom-right"
          }
        });
        `}</Script>
      <ThemeProvider theme={darkThemeProvider}>
        <LoginContext.Provider value={{ user, setUser }}>
          <CssBaseline />
          <Component {...pageProps} />
        </LoginContext.Provider>
      </ThemeProvider>
    </>
  );
};

export default MyApp;