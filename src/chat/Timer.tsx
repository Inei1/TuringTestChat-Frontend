import { Grid, Typography } from "@mui/material";
import { useState } from "react";
import useInterval from "use-interval";

export interface TimerProps {
  seconds: number;
  sx: any;
  setChatActive: (over: boolean) => void;
}

export const Timer = (props: TimerProps) => {

  const [seconds, setSeconds] = useState(props.seconds);

  useInterval(() => {
    setSeconds(seconds - 1);
    if (seconds <= 0) {
      props.setChatActive(false);
    }
  }, 1000)

  return (
    <Grid container sx={props.sx}>
        <Typography variant="h1">{new Date(seconds * 1000).toISOString().substring(14, 19)}</Typography>
    </Grid>
  );
};
