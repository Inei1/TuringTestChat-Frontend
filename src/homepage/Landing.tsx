import { LoginContext } from "@/pages/_app";
import { Button, Container, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";

export const Landing = () => {

  const { user, setUser } = useContext(LoginContext);

  return (
    <>
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          maxWidth: "50vw",
          mt: 5
        }}>
        <Image alt="Turing Test Chat logo" src="/TTCLogov2.png" width={250} height={250} />
        <Typography variant="h1" style={{ fontFamily: "monospace", fontSize: 100, fontWeight: "normal", color: "#e9e9e9" }}>
          Turing Test Chat
        </Typography>
        <Typography>V1.1.4</Typography>
        {!user && <Link href="/login" style={{ marginTop: "2em", marginBottom: "2em" }}>
          <Button
            color="info"
            variant="contained">Log in or Register for free</Button>
        </Link>}
        {user && <Link href={"/home"} style={{ marginTop: "2em", marginBottom: "2em" }}>
          <Button
            color="info"
            variant="contained">Go to chat</Button>
        </Link>}
      </Container>
    </>
  );
}
