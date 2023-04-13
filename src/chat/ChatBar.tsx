import { DefaultEventsMap } from '@socket.io/component-emitter';
import { useEffect, useState } from 'react';
import { Socket } from 'socket.io-client';

export interface ChatFooterProps {
  socket: Socket<DefaultEventsMap, DefaultEventsMap>;
}

export const ChatBar = (props: ChatFooterProps) => {

  const [users, setUsers] = useState<any>([]);

  useEffect(() => {
    props.socket.on('newUserResponse', (data: any) => setUsers(data));
  }, [props.socket, users]);

  return (
    <div className="chat__sidebar">
      <h2>Open Chat</h2>
      <div>
        <h4 className="chat__header">ACTIVE USERS</h4>
        <div className="chat__users">
          {users.map((user: any) => {
            <p key={user.socketID}>{user.userName}</p>
          })}
        </div>
      </div>
    </div>
  );
};
