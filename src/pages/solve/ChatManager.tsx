import * as styles from './solve.css';

export type Chat = {
  from: 'me' | 'server';
  text?: string;
  imageUrl?: string;
  buttons?: { label: string; onClick: () => void }[];
};

interface ChatManagerProps {
  chat: Chat;
}

const ChatManager = ({ chat }: ChatManagerProps) => {
  return (
    <div
      className={
        chat.from === 'me' ? styles.chatBubbleRight : styles.chatBubbleLeft
      }
    >
      {chat.imageUrl && (
        <img src={chat.imageUrl} alt="" className={styles.chatImage} />
      )}
      {chat.text && (
        <div
          className={
            chat.from === 'me' ? styles.chatText : styles.chatServerText
          }
        >
          {chat.text}
          {chat.buttons && (
            <div className={styles.chatButtons}>
              {chat.buttons.map((btn, idx) => (
                <button
                  key={idx}
                  className={styles.chatButton}
                  onClick={btn.onClick}
                >
                  {btn.label}
                </button>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default ChatManager;
