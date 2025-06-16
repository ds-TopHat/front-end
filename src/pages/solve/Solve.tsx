import { useState, useRef } from 'react';
import Toggle from '@pages/solve/components/toggle/Toggle';
import * as styles from '@pages/solve/solve.css';
import { uploadToPresignedUrl } from '@apis/uplaod';

import { getPresignedUrl } from './apis/axios';
import { useRequestSolution } from './apis/queries';

type Chat = {
  from: 'me' | 'server';
  imageUrl?: string;
  text?: string;
};

const Solve = () => {
  const [chatList, setChatList] = useState<Chat[]>([]);
  const bottomRef = useRef<HTMLDivElement>(null);
  const [solutionSteps, setSolutionSteps] = useState<string[]>([]);
  const [stepIndex, setStepIndex] = useState(0);

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
  };

  const handleTextSelect = async (text: string) => {
    if (solutionSteps.length === 0) {
      return;
    }

    setChatList((prev) => [...prev, { from: 'me', text }]);
    scrollToBottom();

    if (text === '전체 풀이를 알려줘') {
      // 전체 풀이 모두 출력
      setTimeout(() => {
        const full = solutionSteps.map((s) => ({
          from: 'server' as const,
          text: s,
        }));
        setChatList((prev) => [...prev, ...full]);
        scrollToBottom();
      }, 500);
    } else if (text === '다음 단계를 알려줘') {
      if (stepIndex < solutionSteps.length) {
        const nextStep = solutionSteps[stepIndex];
        setStepIndex(stepIndex + 1);

        setTimeout(() => {
          setChatList((prev) => [...prev, { from: 'server', text: nextStep }]);
          scrollToBottom();
        }, 500);
      } else {
        setTimeout(() => {
          setChatList((prev) => [
            ...prev,
            { from: 'server', text: '모든 단계를 완료했어요!' },
          ]);
          scrollToBottom();
        }, 500);
      }
    } else if (text === '해결했어요!') {
      setTimeout(() => {
        setChatList((prev) => [
          ...prev,
          {
            from: 'server',
            text: '🎉 문제 해결을 축하합니다!',
          },
        ]);

        scrollToBottom();

        setTimeout(() => {
          // 초기화 또는 페이지 이동
          setChatList([]);
          setStepIndex(0);
          setSolutionSteps([]);
          // 메인 페이지 이동 추가 가능
        }, 2000);
      }, 500);
    }
  };
  const { mutateAsync: requestSolutionMutate } = useRequestSolution();

  const handleFileSelect = async (file: File) => {
    try {
      const { uploadUrl, downloadUrl } = await getPresignedUrl();
      await uploadToPresignedUrl(uploadUrl, file);
      handleImageSelect(downloadUrl);

      const solutionData = await requestSolutionMutate(downloadUrl);
      const steps = solutionData
        .filter((item: Record<string, string>) =>
          Object.keys(item)[0].startsWith('step'),
        )
        .map((item: Record<string, string>) => Object.values(item)[0]);

      setSolutionSteps(steps);
    } catch {
      setChatList((prev) => [
        ...prev,
        { from: 'server', text: '오류가 발생했습니다.' },
      ]);
      scrollToBottom();
      return;
    }
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
      <Toggle onTextSelect={handleTextSelect} onFileSelect={handleFileSelect} />
    </div>
  );
};

export default Solve;
