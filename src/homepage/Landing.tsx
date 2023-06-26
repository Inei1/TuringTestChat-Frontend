import { Button, Container, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { useContext, useState } from "react";
import useInterval from "use-interval";

export const Landing = () => {

  //const { user, setUser } = useContext(LoginContext);

  const [timeUntilBeta, setTimeUntilBeta] = useState(1685750400000 - Date.now());

  useInterval(() => {
    setTimeUntilBeta(timeUntilBeta - 1000);
  }, 1000)

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
        <Typography variant="h1" style={{ fontFamily: "monospace", fontSize: 100, fontWeight: "normal", color: "#e9e9e9" }}>Turing Test Chat</Typography>
        {/* {!user && <Link to="/login" style={{ marginTop: "2em", marginBottom: "2em" }}>
          <Button
            color="info"
            variant="contained">Login or Register for free</Button>
        </Link>}
        {user && <Link to={"/home"} style={{ marginTop: "2em", marginBottom: "2em" }}>
          <Button
            color="info"
            variant="contained">Go to chat</Button>
        </Link>}
        <Link to="/faq">
          <Button variant="contained" color="success">FAQ</Button>
        </Link> */}
      </Container>
    </>
  );
}
