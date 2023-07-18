"use client";

import { Box, Button, ButtonGroup, Container, Grid, Typography } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import { Timer } from "./Timer";
import { Socket } from "socket.io-client";
import { DefaultEventsMap } from '@socket.io/component-emitter';
import Link from "next/link";
import Image from "next/image";
import { isMobile } from "react-device-detect";

export interface ChatEndProps {
  socket: Socket<DefaultEventsMap, DefaultEventsMap>;
  chatActive: boolean;
  setChatActive: (over: boolean) => void;
  resultOver: boolean;
  setResultOver: (over: boolean) => void;
  endResultMillis: number;
  goal: string;
  otherLeft: boolean;
  user: string;
}

export const ChatEnd = (props: ChatEndProps) => {

  const selectionsRef = useRef<HTMLDivElement>(null);
  const returnToHomeRef = useRef<HTMLDivElement>(null);

  const [result, setResult] = useState("");
  const [other, setOther] = useState("");
  const [otherGoal, setOtherGoal] = useState("");
  const [detectionExp, setDetectionExp] = useState(0);
  const [otherResult, setOtherResult] = useState("");
  const [deceptionExp, setDeceptionExp] = useState(0);

  useEffect(() => {
    props.socket.on("otherResult", (data) => {
      setOtherResult(data.result);
      setDeceptionExp(data.points);
    });
    props.socket.on("selfResult", (data) => {
      setDetectionExp(data.points);
      setOther(data.other);
      setOtherGoal(data.otherGoal);
      setResult(data.result);
      props.setResultOver(true);
    });
    props.socket.on("noResult", (data) => {
      setOtherResult("Did not pick");
      setDeceptionExp(10);
      setOther("Human");
      setOtherGoal(data.otherGoal);
    });
    props.socket.on("completeChat", () => props.setResultOver(true));
  }, [props.socket]);

  const sendResult = (result: string) => {
    props.socket.emit("result", {
      name: props.user,
      result: result
    });
  }

  useEffect(() => {
    if (!props.chatActive) {
      setTimeout(() => selectionsRef.current?.scrollIntoView({ behavior: 'smooth' }), 10);
    }
  }, [props.chatActive]);

  useEffect(() => {
    if (props.resultOver) {
      setTimeout(() => returnToHomeRef.current?.scrollIntoView({ behavior: 'smooth' }), 10);
    }
  }, [props.resultOver]);

  useEffect(() => {
    if (props.resultOver) {
      setTimeout(() => returnToHomeRef.current?.scrollIntoView({ behavior: 'smooth' }), 10);
    }
  }, [otherResult])

  return (
    <Container>
      <Grid
        container
        direction="column"
        alignItems="center"
        justifyContent="center">
        <Grid item>
          {!props.resultOver && <Timer millis={props.endResultMillis} fontSize={isMobile ? "2em" : "5em"} />}
        </Grid>
        <Grid item>
          <Typography variant="h1" sx={{ fontSize: 50, my: 3 }}>Who do you think you just talked to?</Typography>
        </Grid>
        <Grid item>
          <ButtonGroup variant="contained">
            <Button disabled={result.length > 0} onClick={() => sendResult("Definitely a human")}
              sx={{ backgroundColor: result === "Definitely a human" ? "#1538B2" : "#1F51FF", fontSize: isMobile ? 10 : 16 }} size="small">
              <Grid container direction="column">
                <Grid item>
                <Image alt="Definitely a human" src="/TTCHumanv2.png" width={isMobile ? 25 : 100} height={isMobile ? 25 : 100} />
                </Grid>
                <Grid item>
                  Definitely a Human
                </Grid>
              </Grid>
            </Button>
            <Button disabled={result.length > 0} onClick={() => sendResult("Possibly a human")}
              sx={{ backgroundColor: result === "Possibly a human" ? "#1538B2" : "#1F51FF", fontSize: isMobile ? 10 : 16 }} size="small">
              <Grid container direction="column">
                <Grid item>
                  <Image alt="Possibly a human" src="/TTCUnknownHuman.png" width={isMobile ? 25 : 100} height={isMobile ? 25 : 100} />
                </Grid>
                <Grid item>
                  Possibly a Human
                </Grid>
              </Grid>
            </Button>
            <Button disabled={result.length > 0} onClick={() => sendResult("Unknown")}
              sx={{ backgroundColor: result === "Unknown" ? "#1538B2" : "#1F51FF", fontSize: isMobile ? 10 : 16 }} size="small">
              <Grid container direction="column">
                <Grid item>
                  <Image alt="Unknown" src="/TTCUnknown.png" width={isMobile ? 25 : 100} height={isMobile ? 25 : 100} />
                </Grid>
                <Grid item>
                  I don't know
                </Grid>
              </Grid>
            </Button>
            <Button disabled={result.length > 0} onClick={() => sendResult("Possibly a bot")}
              sx={{ backgroundColor: result === "Possibly a bot" ? "#1538B2" : "#1F51FF", fontSize: isMobile ? 10 : 16 }} size="small">
              <Grid container direction="column">
                <Grid item>
                  <Image alt="Possibly a bot" src="/TTCUnknownBot.png" width={isMobile ? 25 : 100} height={isMobile ? 25 : 100} />
                </Grid>
                <Grid item>
                  Possibly a bot
                </Grid>
              </Grid>
            </Button>
            <Button disabled={result.length > 0} onClick={() => sendResult("Definitely a bot")}
              sx={{ backgroundColor: result === "Definitely a bot" ? "#1538B2" : "#1F51FF", fontSize: isMobile ? 10 : 16 }} size="small">
              <Grid container direction="column">
                <Grid item>
                  <Image alt="Definitely a bot" src="/TTCLogov2.png" width={isMobile ? 25 : 100} height={isMobile ? 25 : 100} />
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
            {(result.length > 0 || props.resultOver) && <Typography>You chose:</Typography>}
            {result === "Definitely a human" && <Image alt="Human" src="/TTCHumanv2.png" width={isMobile ? 50 : 100} height={isMobile ? 50 : 100} />}
            {result === "Possibly a human" && <Image alt="Maybe Human" src="/TTCUnknownHuman.png" width={isMobile ? 50 : 100} height={isMobile ? 50 : 100} />}
            {result === "Unknown" && <Image alt="Unknown" src="/TTCUnknown.png" width={isMobile ? 50 : 100} height={isMobile ? 50 : 100} />}
            {result === "Possibly a bot" && <Image alt="Maybe Bot" src="/TTCUnknownBot.png" width={isMobile ? 50 : 100} height={isMobile ? 50 : 100} />}
            {result === "Definitely a bot" && <Image alt="Bot" src="/TTCLogov2.png" width={isMobile ? 50 : 100} height={isMobile ? 50 : 100} />}
            {props.resultOver && <Typography>{result === "" ? "Did not pick" : result}</Typography>}
          </Grid>
          <Grid item sx={{ mt: 2 }}>
            {other.length > 0 && <Typography>They were:</Typography>}
            {other === "Human" && <Image alt="Human" src="/TTCHumanv2.png" width={isMobile ? 50 : 100} height={isMobile ? 50 : 100} />}
            {other === "Bot" && <Image alt="Bot" src="/TTCLogov2.png" width={isMobile ? 50 : 100} height={isMobile ? 50 : 100} />}
            <Typography>{other}</Typography>
          </Grid>
          <Grid item>
            {otherGoal && otherGoal.length > 0 && <Typography>Their goal was: </Typography>}
            {otherGoal === "Human" && <Image alt="Human" src="/TTCHumanv2.png" width={isMobile ? 50 : 100} height={isMobile ? 50 : 100} />}
            {otherGoal === "Bot" && <Image alt="Bot" src="/TTCLogov2.png" width={isMobile ? 50 : 100} height={isMobile ? 50 : 100} />}
            <Typography>{otherGoal}</Typography>
          </Grid>
        </Grid>
        <Grid item>
          {(result !== "" || detectionExp !== 0) && <Typography>You received {detectionExp} detection exp from your selection</Typography>}
        </Grid>
        <Grid item sx={{ my: 2 }}>
          {props.otherLeft && other === "Human" &&
            <>
              <Typography>Other chatter left</Typography>
              <Typography>You gained 2 deception exp</Typography>
            </>}
          {result && result.length > 0 && otherResult.length === 0 && !props.otherLeft && other !== "Bot" &&
            <Typography>Waiting for other chatter...</Typography>}
          {otherResult && otherResult.length > 0 && result && result.length > 0 && <Typography>They chose:</Typography>}
        </Grid>
        {result && result.length > 0 && <Grid item ref={selectionsRef}>
          {otherResult === "Definitely a human" && <Image alt="Human" src="/TTCHumanv2.png" width={isMobile ? 50 : 100} height={isMobile ? 50 : 100} />}
          {otherResult === "Possibly a human" && <Image alt="Maybe Human" src="/TTCUnknownHuman.png" width={isMobile ? 50 : 100} height={isMobile ? 50 : 100} />}
          {otherResult === "Unknown" && <Image alt="Unknown" src="/TTCUnknown.png" width={isMobile ? 50 : 100} height={isMobile ? 50 : 100} />}
          {otherResult === "Possibly a bot" && <Image alt="Maybe Bot" src="/TTCUnknownBot.png" width={isMobile ? 50 : 100} height={isMobile ? 50 : 100} />}
          {otherResult === "Definitely a bot" && <Image alt="Bot" src="/TTCLogov2.png" width={isMobile ? 50 : 100} height={isMobile ? 50 : 100} />}
        </Grid>}
        <Grid item>
          {result && result.length > 0 && <Typography>{otherResult}</Typography>}
        </Grid>
        <Grid item>
          {result && result.length > 0 && deceptionExp !== 0 && <Typography>You received {deceptionExp} deception exp from the other chatter's selection</Typography>}
        </Grid>
        <Grid item ref={returnToHomeRef}>
          {props.resultOver && <Link href="/home"><Button variant="contained" sx={{ my: 3 }}>Return to home</Button></Link>}
        </Grid>
      </Grid>
    </Container>
  );
};
