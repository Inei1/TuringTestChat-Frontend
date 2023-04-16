import { DefaultEventsMap } from '@socket.io/component-emitter';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Socket } from 'socket.io-client';

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
    <form className="home__container" onSubmit={handleSubmit}>
      <h2 className="home__header">Sign in to Open Chat</h2>
      <button className="home__cta">SIGN IN</button>
    </form>
  );
};
