import * as React from "react";
import type { AppProps } from "next/app";
import { EmotionCache } from "@emotion/react";
import { ThemeProvider, CssBaseline, createTheme, Box } from "@mui/material";
import { darkTheme } from "@/util/darkTheme";
import Head from "next/head";
import { useRouter } from "next/router";

export interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

const darkThemeProvider = createTheme(darkTheme);

const MyApp: React.FunctionComponent<MyAppProps> = (props) => {
  const { Component, pageProps } = props;

  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={darkThemeProvider}>
        <CssBaseline />
        <Box sx={{ mt: "-18px" }} />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
};

export default MyApp;