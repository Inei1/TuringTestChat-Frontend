import { Box, Button, ButtonGroup, Container, Grid, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import useInterval from "use-interval";
import { Timer } from "./Timer";
import { Socket } from "socket.io-client";
import { DefaultEventsMap } from '@socket.io/component-emitter';

export interface ChatEndProps {
  socket: Socket<DefaultEventsMap, DefaultEventsMap>;
  chatActive: boolean;
  setChatActive: (over: boolean) => void;
  roomId: string;
}

export const ChatEnd = (props: ChatEndProps) => {

  const [seconds, setSeconds] = useState(30);
  const [result, setResult] = useState("");
  const [selfPoints, setSelfPoints] = useState(0);
  const [confirm, setConfirm] = useState(false);
  const [otherResult, setOtherResult] = useState("");
  const [otherPoints, setOtherPoints] = useState(0);

  useInterval(() => {
    setSeconds(seconds - 1);
  }, 1000)

  useEffect(() => {
    props.socket.on("otherResult", (data) => {
      setOtherResult(data.result);
      setOtherPoints(data.points);
    });
    props.socket.on("selfResult", (data) => {
      setSelfPoints(data.points);
    });
  }, [props.socket]);

  const selectResult = (result: string) => {
    setResult(result);
  };

  const sendResult = () => {
    props.socket.emit("result", {
      name: localStorage.getItem("user"),
      roomId: props.roomId,
      result: result
    });
    setConfirm(true);
  }

  return (
    <Container>
      <Grid
        container
        direction="column"
        alignItems="center"
        justifyContent="center">
        <Grid item>
          <Timer millis={5}
            sx={{}} />
        </Grid>
        <Grid item>
          <Typography variant="h1" sx={{ fontSize: 50, my: 3 }}>Who do you think you just talked to?</Typography>
        </Grid>
        <Grid item>
          <ButtonGroup variant="contained">
            <Button onClick={() => selectResult("DefinitelyHuman")}
              sx={{ backgroundColor: result === "DefinitelyHuman" ? "#1538B2" : "#1F51FF" }}>
              <Grid container direction="column">
                <Grid item>
                  <Box component="img" alt="Human" src="TTCHumanv2.png" maxWidth={"8vw"} />
                </Grid>
                <Grid item>
                  Definitely a Human
                </Grid>
              </Grid>
            </Button>
            <Button onClick={() => selectResult("ProbablyHuman")}
              sx={{ backgroundColor: result === "ProbablyHuman" ? "#1538B2" : "#1F51FF" }}>
              <Grid container direction="column">
                <Grid item>
                  <Box component="img" alt="Maybe Human" src="TTCUnknownHuman.png" maxWidth={"8vw"} />
                </Grid>
                <Grid item>
                  Possibly a Human
                </Grid>
              </Grid>
            </Button>
            <Button onClick={() => selectResult("Unknown")}
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
            <Button onClick={() => selectResult("ProbablyBot")}
              sx={{ backgroundColor: result === "ProbablyBot" ? "#1538B2" : "#1F51FF" }}>
              <Grid container direction="column">
                <Grid item>
                  <Box component="img" alt="Maybe Bot" src="TTCUnknownBot.png" maxWidth={"8vw"} />
                </Grid>
                <Grid item>
                  Possibly a bot
                </Grid>
              </Grid>
            </Button>
            <Button onClick={() => selectResult("DefinitelyBot")}
              sx={{ backgroundColor: result === "DefinitelyBot" ? "#1538B2" : "#1F51FF" }}>
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
        <Grid item sx={{ mt: 2 }}>
          {!confirm && <Button variant="contained" onClick={sendResult}>Confirm</Button>}
        </Grid>
        <Grid
          container
          alignItems="center"
          justifyContent="center"
          spacing={5}>
          <Grid item sx={{ mt: 2 }}>
            {confirm && <Typography>You chose:</Typography>}
            {result === "DefinitelyHuman" && <Box component="img" alt="Human" src="TTCHumanv2.png" maxWidth={"8vw"} />}
            {result === "ProbablyHuman" && <Box component="img" alt="Maybe Human" src="TTCUnknownHuman.png" maxWidth={"8vw"} />}
            {result === "Unknown" && <Box component="img" alt="Unknown" src="TTCUnknown.png" maxWidth={"8vw"} />}
            {result === "ProbablyBot" && <Box component="img" alt="Maybe Bot" src="TTCUnknownBot.png" maxWidth={"8vw"} />}
            {result === "DefinitelyBot" && <Box component="img" alt="Bot" src="TTCLogov2.png" maxWidth={"8vw"} />}
            <Typography>{result}</Typography>
          </Grid>
          <Grid item sx={{ mt: 2 }}>
            {confirm && <Typography>They were:</Typography>}
            <Box component="img" alt="Human" src="TTCHumanv2.png" maxWidth={"8vw"} />
            <Typography>Human</Typography>
          </Grid>
          <Grid item>
          </Grid>
        </Grid>
        <Grid item>
          <Typography>You received {selfPoints} points from your selection</Typography>
        </Grid>
        <Grid item sx={{ my: 2 }}>
          {result && result.length > 0 && confirm && otherResult.length === 0 &&
            <Typography>Waiting for other person...</Typography>}
          {otherResult && otherResult.length > 0 && <Typography>They chose:</Typography>}
        </Grid>
        <Grid item>
          {otherResult === "DefinitelyHuman" && <Box component="img" alt="Human" src="TTCHumanv2.png" maxWidth={"8vw"} />}
          {otherResult === "ProbablyHuman" && <Box component="img" alt="Maybe Human" src="TTCUnknownHuman.png" maxWidth={"8vw"} />}
          {otherResult === "Unknown" && <Box component="img" alt="Unknown" src="TTCUnknown.png" maxWidth={"8vw"} />}
          {otherResult === "ProbablyBot" && <Box component="img" alt="Maybe Bot" src="TTCUnknownBot.png" maxWidth={"8vw"} />}
          {otherResult === "DefinitelyBot" && <Box component="img" alt="Bot" src="TTCLogov2.png" maxWidth={"8vw"} />}
        </Grid>
        <Grid item>
          <Typography>{otherResult}</Typography>
        </Grid>
        <Grid item>
          {otherPoints !== 0 && <Typography>You received {otherPoints} points from the other person's selection</Typography>}
        </Grid>
      </Grid>
    </Container>
  );
};
