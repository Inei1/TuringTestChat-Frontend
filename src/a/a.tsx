
import { Socket } from 'socket.io-client';
import styles from './styles.module.css';
import { DefaultEventsMap } from '@socket.io/component-emitter';

export interface ChatProps {
  username: string;
  setUsername: ((username: string) => void);
  room: string;
  setRoom: ((username: string) => void);
  socket: Socket<DefaultEventsMap, DefaultEventsMap>;
}

export const Chat = (props: ChatProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.formContainer}>
        <h1>{`<>DevRooms</>`}</h1>
        <input className={styles.input} placeholder='Username...' />

        <select className={styles.input}>
          <option>-- Select Room --</option>
          <option value='javascript'>JavaScript</option>
          <option value='node'>Node</option>
          <option value='express'>Express</option>
          <option value='react'>React</option>
        </select>

        <button className='btn btn-secondary' style={{ width: '100%' }}>Join Room</button>
      </div>
    </div>
  );
}
