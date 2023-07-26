"use client";

import { Grid, Typography } from "@mui/material";
import { useState } from "react";
import useInterval from "use-interval";

export interface TimerProps {
  millis: number;
  fontSize: string;
}

export const Timer = (props: TimerProps) => {

  const [millis, setMillis] = useState(props.millis);

  useInterval(() => {
    setMillis(millis - 1000);
  }, 1000)

  return (
    <Grid container>
      <Typography variant="h1" sx={{ mt: 0, fontSize: props.fontSize, fontFamily: "Open Sans" }}>{new Date(millis).toISOString().substring(14, 19)}</Typography>
    </Grid>
  );
};