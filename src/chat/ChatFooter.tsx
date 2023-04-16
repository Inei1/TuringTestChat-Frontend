import { DefaultEventsMap } from '@socket.io/component-emitter';
import { useState } from 'react';
import { Socket } from 'socket.io-client';
import "./ChatRoom.css";

export interface ChatFooterProps {
  socket: Socket<DefaultEventsMap, DefaultEventsMap>;
}

export const ChatFooter = (props: ChatFooterProps) => {
  const [message, setMessage] = useState('');
  const [activeTimeout, setActiveTimeout] = useState<NodeJS.Timeout>();

  const handleTyping = (e: any) => {
    props.socket.emit("typing", localStorage.getItem("userName"));
    if (activeTimeout) {
      clearTimeout(activeTimeout);
    }
    setActiveTimeout(setTimeout(() => props.socket.emit("typing", ""), 5000));
  }

  const handleSendMessage = (e: any) => {
    e.preventDefault();
    if (message.trim() && localStorage.getItem('userName')) {
      props.socket.emit('message', {
        name: "user",
        text: message,
      });
    }
    setMessage('');
  };

  return (
    <div className="chat__footer">
      <form className="form" onSubmit={handleSendMessage}>
        <input
          type="text"
          placeholder="Write message"
          className="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={handleTyping}
        />
        <button className="sendBtn">SEND</button>
      </form>
    </div>
  );
};