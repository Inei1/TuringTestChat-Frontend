import Link from "next/link";
import { AppBar, Box, Button, Container, Toolbar } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { LoginContext } from "./pages/_app";
import { User } from "./User";
import { isMobile } from "react-device-detect";
import Image from "next/image";
import CommunityMenu from "./homepage/CommunityMenu";

export const Header = () => {

  const { user, setUser } = useContext(LoginContext);
  const [mobile, setMobile] = useState(true);

  useEffect(() => {
    setMobile(isMobile);
  });

  return (
    <>
      <AppBar position="sticky" component="nav" sx={{ maxWidth: "100%" }}>
        <Container maxWidth={mobile ? "xl" : "lg"}>
          <Toolbar>
            <Link href="/">
              <Image src="/TTCLogov2.png" alt="Turing Test Chat logo" width={48} height={48} style={{ marginTop: 5, marginLeft: mobile ? "-1em" : "1em" }} />
            </Link>
            {mobile ? <Box /> : <Box sx={{ flexGrow: 0.1 }} />}
            <Link
              href="/home"
              style={{ color: "#e9e9e9", fontFamily: "monospace", fontSize: mobile ? 12 : 20, textDecoration: "none", fontWeight: "normal", marginLeft: "1em" }}>Chat</Link>
            {mobile ? <Box /> : <Box sx={{ flexGrow: 0.1 }} />}
            <Link
              href="/blog"
              color="info"
              style={{
                color: "#e9e9e9",
                fontFamily: "monospace",
                fontSize: mobile ? 12 : 20,
                textDecoration: "none",
                fontWeight: "normal",
                marginLeft: "1em",
                marginRight: "1em"
              }}>Blog</Link>
            {mobile ? <Box /> : <Box sx={{ flexGrow: 0.1 }} />}
            <CommunityMenu />
            {user === null && <Box sx={{ ml: "auto" }}>
              <Button
                color="info"
                variant="contained"
                sx={{ mt: 0, }}
                size="small">
                <Link href="/login" style={{ textDecoration: "none", color: "#000000", fontSize: mobile ? 10 : 16, whiteSpace: "nowrap" }}>Log in/Sign up</Link>
              </Button>
            </Box>}
            {user && <User />}
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
}
