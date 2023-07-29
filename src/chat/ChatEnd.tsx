"use client";

import { Box, Button, ButtonGroup, Container, Grid, Typography } from "@mui/material";
import { useContext, useEffect, useRef, useState } from "react";
import { Timer } from "./Timer";
import { Socket } from "socket.io-client";
import { DefaultEventsMap } from '@socket.io/component-emitter';
import Link from "next/link";
import Image from "next/image";
import { isMobile } from "react-device-detect";
import { LoginContext } from "@/pages/_app";

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

  const { user } = useContext(LoginContext);

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
      username: user?.username,
      result: result,
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
    <Container maxWidth="sm">
      <Grid
        container
        direction="column"
        alignItems="center"
        justifyContent="center">
        <Grid item>
          {!props.resultOver && <Timer millis={props.endResultMillis} fontSize={isMobile ? "1.5em" : "3em"} />}
        </Grid>
        {!props.resultOver && <Grid item>
          <Typography variant="h1" sx={{ fontSize: 25, my: 3 }}>Who do you think you talked to?</Typography>
        </Grid>}
        <Grid item>
          <ButtonGroup variant="contained" disableElevation>
            <Grid container direction="column">
              {(!props.resultOver || result === "Definitely a human") && <Button
                disabled={result.length > 0}
                onClick={() => sendResult("Definitely a human")}
                sx={{
                  backgroundColor: result === "Definitely a human" ? "#1538B2" : "#1F51FF",
                  fontSize: 16,
                  mb: 2,
                  ":disabled": {
                    color: "#e9e9e975"
                  }
                }}
                size="large">
                <Image
                  alt="Definitely a human"
                  src="/TTCHumanv2.png"
                  width={48}
                  height={48}
                  style={{ marginRight: 10 }} />
                <Box sx={{ ml: "auto" }}>
                  Definitely a Human
                </Box>
              </Button>}
              {(!props.resultOver || result === "Possibly a human") && <Button
                disabled={result.length > 0}
                onClick={() => sendResult("Possibly a human")}
                sx={{
                  backgroundColor: result === "Possibly a human" ? "#1538B2" : "#1F51FF",
                  fontSize: 16,
                  mb: 2,
                  ":disabled": {
                    color: "#e9e9e975"
                  }
                }}
                size="large">
                <Image
                  alt="Possibly a human"
                  src="/TTCUnknownHuman.png"
                  width={48}
                  height={48}
                  style={{ marginRight: 10 }} />
                <Box sx={{ ml: "auto" }}>
                  Possibly a Human
                </Box>
              </Button>}
              {(!props.resultOver || result === "Unknown") && <Button
                disabled={result.length > 0}
                onClick={() => sendResult("Unknown")}
                sx={{
                  backgroundColor: result === "Unknown" ? "#1538B2" : "#1F51FF",
                  fontSize: 16,
                  mb: 2,
                  ":disabled": {
                    color: "#e9e9e975"
                  }
                }}
                size="large">
                <Image
                  alt="Unknown"
                  src="/TTCUnknown.png"
                  width={48}
                  height={48}
                  style={{ marginRight: 10 }} />
                <Box sx={{ ml: "auto" }}>
                  I don't know
                </Box>
              </Button>}
              {(!props.resultOver || result === "Possibly a bot") && <Button
                disabled={result.length > 0}
                onClick={() => sendResult("Possibly a bot")}
                sx={{
                  backgroundColor: result === "Possibly a bot" ? "#1538B2" : "#1F51FF",
                  fontSize: 16,
                  mb: 2,
                  ":disabled": {
                    color: "#e9e9e975"
                  }
                }}
                size="large">
                <Image
                  alt="Possibly a bot"
                  src="/TTCUnknownBot.png"
                  width={48}
                  height={48}
                  style={{ marginRight: 10 }} />
                <Box sx={{ ml: "auto" }}>
                  Possibly a bot
                </Box>
              </Button>}
              {(!props.resultOver || result === "Definitely a bot") && <Button
                disabled={result.length > 0}
                onClick={() => sendResult("Definitely a bot")}
                sx={{
                  backgroundColor: result === "Definitely a bot" ? "#1538B2" : "#1F51FF",
                  fontSize: 16,
                  mb: 2,
                  ":disabled": {
                    color: "#e9e9e975"
                  }
                }}
                size="large">
                <Image
                  alt="Definitely a bot"
                  src="/TTCLogov2.png"
                  width={48}
                  height={48}
                  style={{ marginRight: 10 }} />
                <Box sx={{ ml: "auto" }}>
                  Definitely a Bot
                </Box>
              </Button>}
            </Grid>
          </ButtonGroup>
        </Grid>
        {(result.length > 0 || props.resultOver) && <Box display="flex" alignItems="center" justifyContent="center" flexDirection={"column"}>
          {(props.resultOver && result === "Definitely a human") && other === "Human" &&
            <Typography>Your human detection is on point! You spoke to a</Typography>}
          {(props.resultOver && result === "Definitely a human") && other === "Bot" &&
            <Typography>The bot managed to fool you! You spoke to a</Typography>}

          {(props.resultOver && result === "Possibly a human") && other === "Human" &&
            <Typography>Your suspicions were right! You spoke to a</Typography>}
          {(props.resultOver && result === "Possibly a human") && other === "Bot" &&
            <Typography>It was smart to be suspicious. You spoke to a</Typography>}

          {(props.resultOver && result === "Unknown") && other === "Human" &&
            <Typography>You had no idea who it was. You spoke to a</Typography>}
          {(props.resultOver && result === "Unknown") && other === "Bot" &&
            <Typography>You had no idea who it was. You spoke to a</Typography>}

          {(props.resultOver && result === "Possibly a bot") && other === "Human" &&
            <Typography>It was smart to be suspicious. You spoke to a</Typography>}
          {(props.resultOver && result === "Possibly a bot") && other === "Bot" &&
            <Typography>Your suspicions were right! You spoke to a</Typography>}

          {(props.resultOver && result === "Definitely a bot") && other === "Human" &&
            <Typography>They were a master of deception! You spoke to a</Typography>}
          {(props.resultOver && result === "Definitely a bot") && other === "Bot" &&
            <Typography>This bot failed the Turing Test. You spoke to a</Typography>}
          {props.resultOver && result === "" && <Typography>You did not pick and lost -3 detection exp</Typography>}
          {other === "Human" && result && result.length > 0 && <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" sx={{ my: 2 }}>
            <Image
              alt="Human"
              src="/TTCHumanv2.png"
              width={48}
              height={48}
              style={{ marginRight: 10 }} />
            <Typography>human</Typography>
          </Box>}
          {other === "Bot" && <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" sx={{ my: 2 }}>
            <Image
              alt="Human"
              src="/TTCLogov2.png"
              width={48}
              height={48}
              style={{ marginRight: 10 }} />
            <Typography>bot</Typography>
          </Box>}
          {result && result.length > 0 && <Typography sx={{ mb: 2 }}>and {detectionExp >= 0 ? "gained" : "lost"} {detectionExp} deception exp.</Typography>}
        </Box>}

        {(props.resultOver && result && result.length > 0) && <Box sx={{ mb: 2 }} display="flex" flexDirection="column" alignItems="center" justifyContent="center">
          <Typography sx={{ mb: 2 }}>They wanted you to think they were a</Typography>
          {otherGoal === "Human" ? <Image
            alt="Human"
            src="/TTCHumanv2.png"
            width={48}
            height={48} /> :
            <Image
              alt="Bot"
              src="/TTCLogov2.png"
              width={48}
              height={48} />}
          {otherGoal}
        </Box>}
        {props.otherLeft && other === "Human" &&
          <>
            <Typography>Other chatter left</Typography>
            <Typography>You gained 2 deception exp</Typography>
          </>}
        {result && result.length > 0 && otherResult.length === 0 && !props.otherLeft && other !== "Bot" &&
          <Typography>Waiting for other chatter...</Typography>}
        {(result && result.length > 0 && deceptionExp !== 0) &&
          <Typography sx={{ mb: 2 }}>They chose:</Typography>}
        <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center">
          {(result && result.length > 0) && <Grid item ref={selectionsRef}>
            {otherResult === "Definitely a human" &&
              <Image
                alt="Human"
                src="/TTCHumanv2.png"
                width={48}
                height={48} />}
            {otherResult === "Possibly a human" &&
              <Image
                alt="Maybe Human"
                src="/TTCUnknownHuman.png"
                width={48}
                height={48} />}
            {otherResult === "Unknown" &&
              <Image
                alt="Unknown"
                src="/TTCUnknown.png"
                width={48}
                height={48} />}
            {otherResult === "Possibly a bot" &&
              <Image
                alt="Maybe Bot"
                src="/TTCUnknownBot.png"
                width={48}
                height={48} />}
            {otherResult === "Definitely a bot" &&
              <Image
                alt="Bot"
                src="/TTCLogov2.png"
                width={48}
                height={48} />}
          </Grid>}
          {(result && result.length > 0) && <Typography>{otherResult}</Typography>}
        </Box>
        {(result && result.length > 0 && result !== "Did not pick") && <Grid item>
          {otherResult === "Definitely a human" && (props.goal === "Human" ?
            <Typography>They knew you're a human! You received {deceptionExp} { }
              deception exp from the other chatter's selection</Typography> :
            <Typography>They saw right through you! You received {deceptionExp} { }
              deception exp from the other chatter's selection</Typography>)}
          {otherResult === "Possibly a human" && (props.goal === "Human" ?
            <Typography>They thought you might be a human. You received {deceptionExp} { }
              deception exp from the other chatter's selection</Typography> :
            <Typography>They were suspicious of you. You received {deceptionExp} { }
              deception exp from the other chatter's selection</Typography>)}
          {otherResult === "Unknown" && <Typography>They had no idea! You received {deceptionExp}
            deception exp from the other chatter's selection</Typography>}
          {otherResult === "Possibly a bot" && (props.goal === "Human" ?
            <Typography>They somehow thought you could be a bot. You received {deceptionExp} { }
              deception exp from the other chatter's selection</Typography> :
            <Typography>You fooled them! You received {deceptionExp} { }
              deception exp from the other chatter's selection</Typography>)}
          {otherResult === "Definitely a bot" && (props.goal === "Human" ?
            <Typography>This is a bit awkward... You received {deceptionExp} { }
              deception exp from the other chatter's selection</Typography> :
            <Typography>You completely fooled them! You received {deceptionExp} { }
              deception exp from the other chatter's selection</Typography>
          )}
          {otherResult === "Did not pick" &&
            <Typography sx={{ mt: 2 }}>What a loser they are! You received {deceptionExp}
              deception exp because they didn't pick</Typography>}
        </Grid>}
        <Grid item ref={returnToHomeRef}>
          {props.resultOver && <Link href="/home">
            <Button
              variant="contained"
              sx={{ my: 3 }}
              size="large">Return to home</Button>
          </Link>}
        </Grid>
      </Grid>
    </Container >
  );
};
