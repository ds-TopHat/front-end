import { useState, useRef } from 'react';
import Toggle from '@pages/solve/components/toggle/Toggle';
import * as styles from '@pages/solve/solve.css';

type Chat = {
  from: 'me' | 'server';
  imageUrl?: string;
  text?: string;
};
const Solve = () => {
  const [chatList, setChatList] = useState<Chat[]>([]);
  const bottomRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    requestAnimationFrame(() => {
      bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
    });
  };

  const handleImageSelect = (url: string) => {
    setChatList((prev) => {
      const next = [...prev, { from: 'me' as const, imageUrl: url }];

      setTimeout(() => scrollToBottom(), 0);
      return next;
    });

    setTimeout(() => {
      setChatList((prev) => {
        const next = [
          ...prev,
          { from: 'server' as const, text: '이미지 잘 받았어요!' },
        ];

        setTimeout(() => scrollToBottom(), 0);
        return next;
      });
    }, 1000);
  };

  const handleTextSelect = (text: string) => {
    setChatList((prev) => {
      const next = [...prev, { from: 'me' as const, text }];
      setTimeout(() => scrollToBottom(), 0);
      return next;
    });

    setTimeout(() => {
      setChatList((prev) => {
        const next = [
          ...prev,
          { from: 'server' as const, text: `서버 응답: ${text}` },
        ];
        setTimeout(() => scrollToBottom(), 0);
        return next;
      });
    }, 1000);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.chatContainer}>
        {chatList.map((chat, idx) => (
          <div
            key={idx}
            className={
              chat.from === 'me'
                ? styles.chatBubbleRight
                : styles.chatBubbleLeft
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
              </div>
            )}
          </div>
        ))}
        <div ref={bottomRef} />
      </div>
      <Toggle
        onImageSelect={handleImageSelect}
        onTextSelect={handleTextSelect}
      />
    </div>
  );
};

export default Solve;
