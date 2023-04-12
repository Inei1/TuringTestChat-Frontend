import React, { useState } from 'react';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Chat } from './a/a';
import { io } from 'socket.io-client';

const socket = io("http://localhost:4000");

function App() {
  const [username, setUsername] = useState('');
  const [room, setRoom] = useState('');

  const router = createBrowserRouter([
    {
      path: "/",
      element:
        <Chat
        username={username}
        setUsername={setUsername}
        room={room}
        setRoom={setRoom}
        socket={socket} />
    }
  ]);
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;

