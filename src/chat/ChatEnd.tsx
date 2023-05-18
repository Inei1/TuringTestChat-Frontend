import { Box, Button, ButtonGroup, Container, Grid, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { Timer } from "./Timer";
import { Socket } from "socket.io-client";
import { DefaultEventsMap } from '@socket.io/component-emitter';
import { useNavigate } from "react-router-dom";

export interface ChatEndProps {
  socket: Socket<DefaultEventsMap, DefaultEventsMap>;
  chatActive: boolean;
  setChatActive: (over: boolean) => void;
  roomId: string;
  endResultMillis: number;
  goal: string;
}

export const ChatEnd = (props: ChatEndProps) => {

  const navigate = useNavigate();

  const [result, setResult] = useState("");
  const [other, setOther] = useState("");
  const [selfPoints, setSelfPoints] = useState(0);
  const [otherResult, setOtherResult] = useState("");
  const [otherPoints, setOtherPoints] = useState(0);
  const [resultOver, setResultOver] = useState(false);

  useEffect(() => {
    props.socket.on("otherResult", (data) => {
      setOtherResult(data.result);
      setOtherPoints(data.points);
    });
    props.socket.on("selfResult", (data) => {
      setSelfPoints(data.points);
      setOther(data.other);
      setResult(data.result);
      setResultOver(true);
    });
    props.socket.on("noResult", () => {
      setOtherResult("Did not pick");
      setOtherPoints(10);
      setOther("Human");
    });
    props.socket.on("completeChat", () => setResultOver(true));
  }, [props.socket]);

  const sendResult = (result: string) => {
    props.socket.emit("result", {
      name: localStorage.getItem("user"),
      roomId: props.roomId,
      result: result
    });
  }

  return (
    <Container>
      <Grid
        container
        direction="column"
        alignItems="center"
        justifyContent="center">
        <Grid item>
          {!resultOver && <Timer millis={props.endResultMillis} />}
        </Grid>
        <Grid item>
          <Typography variant="h1" sx={{ fontSize: 50, my: 3 }}>Who do you think you just talked to?</Typography>
        </Grid>
        <Grid item>
          <ButtonGroup variant="contained">
            <Button onClick={() => sendResult("Definitely a human")}
              sx={{ backgroundColor: result === "Definitely a human" ? "#1538B2" : "#1F51FF" }}>
              <Grid container direction="column">
                <Grid item>
                  <Box component="img" alt="Human" src="TTCHumanv2.png" maxWidth={"8vw"} />
                </Grid>
                <Grid item>
                  Definitely a Human
                </Grid>
              </Grid>
            </Button>
            <Button onClick={() => sendResult("Possibly a human")}
              sx={{ backgroundColor: result === "Possibly a human" ? "#1538B2" : "#1F51FF" }}>
              <Grid container direction="column">
                <Grid item>
                  <Box component="img" alt="Maybe Human" src="TTCUnknownHuman.png" maxWidth={"8vw"} />
                </Grid>
                <Grid item>
                  Possibly a Human
                </Grid>
              </Grid>
            </Button>
            <Button onClick={() => sendResult("Unknown")}
              sx={{ backgroundColor: result === "Unknown" ? "#1538B2" : "#1F51FF" }}>
              <Grid container direction="column">
                <Grid item>
                  <Box component="img" alt="Unknown" src="TTCUnknown.png" maxWidth={"8vw"} />
                </Grid>
                <Grid item>
                  I don't know
                </Grid>
              </Grid>
            </Button>
            <Button onClick={() => sendResult("Possibly a bot")}
              sx={{ backgroundColor: result === "Possibly a bot" ? "#1538B2" : "#1F51FF" }}>
              <Grid container direction="column">
                <Grid item>
                  <Box component="img" alt="Maybe Bot" src="TTCUnknownBot.png" maxWidth={"8vw"} />
                </Grid>
                <Grid item>
                  Possibly a bot
                </Grid>
              </Grid>
            </Button>
            <Button onClick={() => sendResult("Definitely a bot")}
              sx={{ backgroundColor: result === "Definitely a bot" ? "#1538B2" : "#1F51FF" }}>
              <Grid container direction="column">
                <Grid item>
                  <Box component="img" alt="Bot" src="TTCLogov2.png" maxWidth={"8vw"} />
                </Grid>
                <Grid item>
                  Definitely a Bot
                </Grid>
              </Grid>
            </Button>
          </ButtonGroup>
        </Grid>
        <Grid
          container
          alignItems="center"
          justifyContent="center"
          spacing={5}>
          <Grid item sx={{ mt: 2 }}>
            {(result.length > 0 || resultOver) && <Typography>You chose:</Typography>}
            {result === "Definitely a human" && <Box component="img" alt="Human" src="TTCHumanv2.png" maxWidth={"8vw"} />}
            {result === "Possibly a human" && <Box component="img" alt="Maybe Human" src="TTCUnknownHuman.png" maxWidth={"8vw"} />}
            {result === "Unknown" && <Box component="img" alt="Unknown" src="TTCUnknown.png" maxWidth={"8vw"} />}
            {result === "Possibly a bot" && <Box component="img" alt="Maybe Bot" src="TTCUnknownBot.png" maxWidth={"8vw"} />}
            {result === "Definitely a bot" && <Box component="img" alt="Bot" src="TTCLogov2.png" maxWidth={"8vw"} />}
            {resultOver && <Typography>{result === "" ? "Did not pick" : result}</Typography>}
          </Grid>
          <Grid item sx={{ mt: 2 }}>
            {other.length > 0 && <Typography>They were:</Typography>}
            {other === "Human" && <Box component="img" alt="Human" src="TTCHumanv2.png" maxWidth={"8vw"} />}
            {other === "Bot" && <Box component="img" alt="Bot" src="TTCLogov2.png" maxWidth={"8vw"} />}
            <Typography>{other}</Typography>
          </Grid>
          <Grid item>
          </Grid>
        </Grid>
        <Grid item>
          <Typography>You received {selfPoints} points from your selection</Typography>
        </Grid>
        <Grid item sx={{ my: 2 }}>
          {result && result.length > 0 && otherResult.length === 0 &&
            <Typography>Waiting for other person...</Typography>}
          {otherResult && otherResult.length > 0 && <Typography>They chose:</Typography>}
        </Grid>
        <Grid item>
          {otherResult === "Definitely a human" && <Box component="img" alt="Human" src="TTCHumanv2.png" maxWidth={"8vw"} />}
          {otherResult === "Possibly a human" && <Box component="img" alt="Maybe Human" src="TTCUnknownHuman.png" maxWidth={"8vw"} />}
          {otherResult === "Unknown" && <Box component="img" alt="Unknown" src="TTCUnknown.png" maxWidth={"8vw"} />}
          {otherResult === "Possibly a bot" && <Box component="img" alt="Maybe Bot" src="TTCUnknownBot.png" maxWidth={"8vw"} />}
          {otherResult === "Definitely a bot" && <Box component="img" alt="Bot" src="TTCLogov2.png" maxWidth={"8vw"} />}
        </Grid>
        <Grid item>
          <Typography>{otherResult}</Typography>
        </Grid>
        <Grid item>
          {otherPoints !== 0 && <Typography>You received {otherPoints} points from the other person's selection</Typography>}
        </Grid>
        <Grid item>
          {resultOver && <Button variant="contained" onClick={() => navigate("/home")} sx={{ my: 3 }}>Return to home</Button>}
        </Grid>
      </Grid>
    </Container>
  );
};
