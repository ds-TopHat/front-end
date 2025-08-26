import { useState, useRef, useEffect } from 'react';
import Toggle from '@pages/solve/components/toggle/Toggle';
import * as styles from '@pages/solve/solve.css';
import { uploadToPresignedUrl } from '@apis/uplaod';
import { routePath } from '@routes/routePath';
import { useNavigate } from 'react-router-dom';

import { getPresignedUrl } from './apis/axios';
import Modal from './components/modal/Modal';
import { usePostAiChat } from './apis/queries';

type Chat = {
  from: 'me' | 'server';
  imageUrl?: string;
  text?: string;
  buttons?: { label: string; onClick: () => void }[];
};

const processSolutionData = (data: Record<string, string>[]) =>
  data
    .filter((item) => Object.keys(item)[0].startsWith('step'))
    .map((item) => Object.values(item)[0]);

const Solve = () => {
  const [chatList, setChatList] = useState<Chat[]>([]);
  const bottomRef = useRef<HTMLDivElement>(null);

  const [s3Key, setS3Key] = useState('');
  const [downloadUrls, setDownloadUrls] = useState<string[]>([]);

  const [solutionSteps, setSolutionSteps] = useState<string[]>([]);
  const solutionStepsRef = useRef<string[]>([]); // ⚡ ref 추가
  const [stepIndex, setStepIndex] = useState(0);
  const [imageUploaded, setImageUploaded] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const { mutateAsync: requestSolutionMutate } = usePostAiChat();

  const scrollToBottom = () => {
    requestAnimationFrame(() => {
      bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
    });
  };

  useEffect(() => {
    scrollToBottom();
  }, [chatList, isLoading]);

  const handleImageSelect = (url: string) => {
    setImageUploaded(true);
    setChatList((prev) => [...prev, { from: 'me', imageUrl: url }]);
  };

  // 단계별 풀이 보여주기
  const showStep = (index: number) => {
    const steps = solutionStepsRef.current;
    if (index < 0 || index >= steps.length) {
      return;
    }

    setStepIndex(index);

    const buttons =
      index < steps.length - 1
        ? [{ label: '다음 풀이 ➡️', onClick: () => showStep(index + 1) }]
        : [];

    setChatList((prev) => [
      ...prev,
      {
        from: 'server',
        text: steps[index],
        buttons,
      },
    ]);
  };

  const handleTextSelect = async (text: string) => {
    setChatList((prev) => [...prev, { from: 'me', text }]);

    if (!imageUploaded && text !== '해결했어요!') {
      setChatList((prev) => [
        ...prev,
        { from: 'server', text: '문제 이미지를 업로드 해주세요!' },
      ]);
      return;
    }

    if (text === '해결했어요!') {
      setChatList((prev) => [
        ...prev,
        {
          from: 'server',
          text: '🎉 문제 해결을 축하합니다!',
          buttons: [
            { label: '메인', onClick: () => navigate(routePath.HOME) },
            { label: '마이페이지', onClick: () => navigate(routePath.MY) },
          ],
        },
      ]);
      return;
    }

    // 전체 풀이
    if (text === '전체 풀이를 알려줘') {
      if (solutionSteps.length === 0) {
        setIsLoading(true);
        try {
          const solutionData = await requestSolutionMutate({
            downloadUrls,
            s3Key,
          });
          const steps = processSolutionData(solutionData);
          setSolutionSteps(steps);
          solutionStepsRef.current = steps;

          const responseText =
            steps.length > 0 ? steps.join('\n\n') : '풀이 정보가 없습니다.';
          setChatList((prev) => [
            ...prev,
            { from: 'server', text: responseText },
          ]);
        } finally {
          setIsLoading(false);
        }
      } else {
        setChatList((prev) => [
          ...prev,
          { from: 'server', text: solutionSteps.join('\n\n') },
        ]);
      }
      return;
    }

    // 단계별 풀이
    if (text === '단계별 풀이를 알려줘') {
      if (solutionSteps.length === 0) {
        setIsLoading(true);
        try {
          const solutionData = await requestSolutionMutate({
            downloadUrls,
            s3Key,
          });
          const steps = processSolutionData(solutionData);
          setSolutionSteps(steps);
          solutionStepsRef.current = steps;

          if (steps.length === 0) {
            setChatList((prev) => [
              ...prev,
              { from: 'server', text: '풀이 정보가 없습니다.' },
            ]);
          } else {
            setStepIndex(0);
            const buttons =
              steps.length > 1
                ? [{ label: '다음 풀이 ➡️', onClick: () => showStep(1) }]
                : [];

            setChatList((prev) => [
              ...prev,
              { from: 'server', text: steps[0], buttons },
            ]);
          }
        } finally {
          setIsLoading(false);
        }
      } else {
        // 이미 solutionSteps가 있다면 그대로 첫 단계 추가
        const steps = solutionStepsRef.current;
        setStepIndex(0);
        const buttons =
          steps.length > 1
            ? [{ label: '다음 풀이 ➡️', onClick: () => showStep(1) }]
            : [];
        setChatList((prev) => [
          ...prev,
          { from: 'server', text: steps[0], buttons },
        ]);
      }
      return;
    }

    setChatList((prev) => [
      ...prev,
      { from: 'server', text: '요청을 이해하지 못했습니다.' },
    ]);
  };

  const handleCameraClick = () => setIsOpen(true);

  const handleModalSelect = async (option: 'one' | 'two') => {
    setIsOpen(false);
    setChatList([]);
    setSolutionSteps([]);
    solutionStepsRef.current = [];
    setStepIndex(0);
    setImageUploaded(false);
    setS3Key('');
    setDownloadUrls([]);

    const count = option === 'one' ? 1 : 2;
    const { uploadUrls, downloadUrls, s3Key } = await getPresignedUrl(count);

    const uploadPromises = uploadUrls.map((url, index) =>
      new Promise<File>((resolve, reject) => {
        const fileInput = document.createElement('input');
        fileInput.type = 'file';
        fileInput.accept = 'image/*';
        fileInput.capture = 'environment';
        fileInput.onchange = (e: Event) => {
          const target = e.target as HTMLInputElement;
          if (target.files?.[0]) {
            resolve(target.files[0]);
          } else {
            reject(new Error('파일이 선택되지 않았습니다.'));
          }
        };
        fileInput.click();
      }).then(async (file) => {
        await uploadToPresignedUrl(url, file);
        handleImageSelect(downloadUrls[index]);
      }),
    );
    await Promise.all(uploadPromises);

    setS3Key(s3Key);
    setDownloadUrls(downloadUrls);
    setImageUploaded(true);
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
                {chat.buttons && (
                  <div className={styles.chatButtons}>
                    {chat.buttons.map((btn, i) => (
                      <button
                        key={i}
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
        ))}
        {isLoading && (
          <div className={styles.chatBubbleLeft}>
            <div className={styles.chatServerText}>로딩중</div>
          </div>
        )}
        <div ref={bottomRef} />
      </div>

      <Toggle
        onTextSelect={handleTextSelect}
        onCameraClick={handleCameraClick}
      />

      <Modal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        onSelect={handleModalSelect}
      />
    </div>
  );
};

export default Solve;
