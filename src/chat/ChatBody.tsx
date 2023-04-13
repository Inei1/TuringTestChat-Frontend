import { useNavigate } from 'react-router-dom';
import "./ChatRoom.css";

export interface ChatBodyProps {
  messages: any[];
  lastMessageRef: React.RefObject<HTMLDivElement>;
  typingUser: string;
}

export const ChatBody = (props: ChatBodyProps) => {
  const navigate = useNavigate();

  const handleLeaveChat = () => {
    localStorage.removeItem('userName');
    navigate('/');
    window.location.reload();
  };

  return (
    <>
      <header className="chat__mainHeader">
        <button className="leaveChat__btn" onClick={handleLeaveChat}>
          LEAVE CHAT
        </button>
      </header>

      <div className="message__status">
        {props.typingUser.length > 0 && <p>{props.typingUser + "is typing"}</p>}
      </div>

      <div className="message__container">

        {props.messages.map((message) => {
          if (!message) {
            return <p>Error</p>
          }
          return message.name === localStorage.getItem('userName') ? (
            <div className="message__chats" key={message.id}>
              <p className="sender__name">You</p>
              <div className="message__sender">
                <p>{message.text}</p>
              </div>
            </div>
          ) : (
            <div className="message__chats" key={message.id}>
              <p>{message.name}</p>
              <div className="message__recipient">
                <p>{message.text}</p>
              </div>
            </div>
          )
        })}
        <div ref={props.lastMessageRef} />
      </div>
    </>
  );
};
