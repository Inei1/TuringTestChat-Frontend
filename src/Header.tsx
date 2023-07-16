import Link from "next/link";
import { AppBar, Box, Button, Container, Toolbar } from "@mui/material";
import React, { useContext } from "react";
import { LoginContext } from "./pages/_app";
import { User } from "./User";
import { BrowserView, MobileView } from "react-device-detect";
import Image from "next/image";
import CommunityMenu from "./homepage/CommunityMenu";
import NoSSRWrapper from "./NoSSRWrapper";

const Header = () => {

  const { user, setUser } = useContext(LoginContext);

  return (
    <>
      <MobileView>
        <AppBar position="sticky" component="nav" sx={{ maxWidth: "100%" }}>
          <Container maxWidth="xl">
            <Toolbar>
              <Link href="/">
                <Image src="/TTCLogov2.png" alt="Turing Test Chat logo" width={48} height={48} style={{ marginTop: 5, marginLeft: "-1em" }} />
              </Link>
              <Link
                href="/home"
                style={{ color: "#e9e9e9", fontFamily: "monospace", fontSize: 12, textDecoration: "none", fontWeight: "normal", marginLeft: "1em" }}>Chat</Link>
              <Link
                href="/blog"
                color="info"
                style={{
                  color: "#e9e9e9",
                  fontFamily: "monospace",
                  fontSize: 12,
                  textDecoration: "none",
                  fontWeight: "normal",
                  marginLeft: "1em",
                  marginRight: "1em"
                }}>Blog</Link>
              <CommunityMenu />
              {user === null && <Box sx={{ ml: "auto" }}>
                <Button
                  color="info"
                  variant="contained"
                  sx={{ mt: 0, }}
                  size="small">
                  <Link href="/login" style={{ textDecoration: "none", color: "#000000", fontSize: 10, whiteSpace: "nowrap" }}>Log in/Sign up</Link>
                </Button>
              </Box>}
              {user && <User />}
            </Toolbar>
          </Container>
        </AppBar>
      </MobileView>
      <BrowserView>
        <AppBar position="sticky" component="nav" sx={{ maxWidth: "100%" }}>
          <Container maxWidth="lg">
            <Toolbar>
              <Link href="/">
                <Image src="/TTCLogov2.png" alt="Turing Test Chat logo" width={48} height={48} style={{ marginTop: 5, }} />
              </Link>
              <Box sx={{ flexGrow: 0.1 }} />
              <Link
                href="/home"
                style={{ color: "#e9e9e9", fontFamily: "monospace", fontSize: 20, textDecoration: "none", fontWeight: "normal", marginLeft: "1em" }}>Chat</Link>
              <Box sx={{ flexGrow: 0.1 }} />
              <Link
                href="/blog"
                color="info"
                style={{
                  color: "#e9e9e9",
                  fontFamily: "monospace",
                  fontSize: 20,
                  textDecoration: "none",
                  fontWeight: "normal",
                  marginLeft: "1em",
                  marginRight: "1em"
                }}>Blog</Link>
              <Box sx={{ flexGrow: 0.1 }} />
              <CommunityMenu />
              {user === null && <Box sx={{ ml: "auto" }}>
                <Button
                  color="info"
                  variant="contained"
                  sx={{ mt: 0, }}
                  size="small">
                  <Link href="/login" style={{ textDecoration: "none", color: "#000000", fontSize: 16, whiteSpace: "nowrap" }}>Log in/Sign up</Link>
                </Button>
              </Box>}
              {user && <User />}
            </Toolbar>
          </Container>
        </AppBar>
      </BrowserView>
    </>
  );
}

export default NoSSRWrapper(Header);
