import React, { useEffect, useRef, useState } from 'react';
import { ChatBar } from './ChatBar';
import { ChatBody } from './ChatBody';
import { ChatFooter } from './ChatFooter';
import { Socket } from 'socket.io-client';
import { DefaultEventsMap } from '@socket.io/component-emitter';
import "./ChatRoom.css";

export interface ChatRoomProps {
  socket: Socket<DefaultEventsMap, DefaultEventsMap>;
}

export const ChatRoom = (props: ChatRoomProps) => {

  const [messages, setMessages] = useState<any>([]);
  const [typingUser, setTypingUser] = useState('');
  const lastMessageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    props.socket.on('messageResponse', (data: any) => { setMessages([...messages, data]) });
  }, [props.socket, messages]);

  useEffect(() => {
    lastMessageRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  useEffect(() => {
    props.socket.on('typingResponse', (data) => setTypingUser(data));
  }, [props.socket]);

  return (
    <div className="chat">
      <ChatBar socket={props.socket} />
      <div className="chat__main">
        <ChatBody messages={messages} lastMessageRef={lastMessageRef} typingUser={typingUser} />
        <ChatFooter socket={props.socket} />
      </div>
    </div>
  );
};
