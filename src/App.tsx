import { createContext, useState } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { SelectRoom } from './chat/SelectRoom';
import { ChatRoom } from './chat/ChatRoom';
import { io } from 'socket.io-client';
import { LoginState } from './types';
import { Homepage } from './Homepage';

interface LoginStateContextType {
  loginState: LoginState;
  setLoginState: React.Dispatch<React.SetStateAction<LoginState>>;
}

export const LoginStateContext = createContext<LoginStateContextType>({
  loginState: { open: false, tabIndex: 0, loggedIn: false },
  setLoginState: () => null,
});

const socket = io("http://localhost:8080");

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element:
        <Homepage />
    },
    {
      path: "/joinchat",
      element:
        <SelectRoom socket={socket} />
    },
    {
      path: "/chat",
      element:
        <ChatRoom
          socket={socket}/>
    }
  ]);
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;

