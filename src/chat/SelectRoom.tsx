import { DefaultEventsMap } from '@socket.io/component-emitter';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Socket } from 'socket.io-client';
import { Header } from '../Header';
import { Button, Typography } from '@mui/material';

export interface SelectRoomProps {
  socket: Socket<DefaultEventsMap, DefaultEventsMap>;
}

export const SelectRoom = (props: SelectRoomProps) => {
  const navigate = useNavigate();

  const handleSubmit = (e: any) => {
    e.preventDefault();
    localStorage.setItem('userName', "user");
    props.socket.emit('newUser', { username: "user", socketId: props.socket.id });
    navigate('/chat');
  };

  return (
    <>
      <Header />
      {/* <Typography>Select some interests</Typography>
      <Typography>Games, Sports, News, Technology, Memes, Jokes, TV shows, Movies, History, Politics, Art, Books, Space, Music</Typography> */}
      <Typography>I want to be...</Typography>
      <Typography>Human</Typography>
      <Typography>Bot</Typography>
      <Typography>Both</Typography>
      <Button>Enter Chat Room</Button>
    </>
  );
};
