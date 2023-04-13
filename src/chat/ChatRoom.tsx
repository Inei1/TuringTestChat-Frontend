import React, { useEffect, useState } from 'react';
import { ChatBar } from './ChatBar';
import { ChatBody } from './ChatBody';
import { ChatFooter } from './ChatFooter';
import { Socket } from 'socket.io-client';
import { DefaultEventsMap } from '@socket.io/component-emitter';

export interface ChatRoomProps {
  socket: Socket<DefaultEventsMap, DefaultEventsMap>;
}

export const ChatRoom = (props: ChatRoomProps) => {

  const [messages, setMessages] = useState<any>([]);

  useEffect(() => {
    props.socket.on('messageResponse', (data: any) => { setMessages([...messages, data]) });
  }, [props.socket, messages]);

  return (
    <div className="chat">
      <ChatBar socket={props.socket} />
      <div className="chat__main">
        <ChatBody messages={messages} />
        <ChatFooter socket={props.socket} />
      </div>
    </div>
  );
};
