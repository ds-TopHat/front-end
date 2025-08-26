import { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { routePath } from '@routes/routePath';
import { uploadToPresignedUrl } from '@apis/uplaod';

import * as styles from './solve.css';
import ChatManager, { type Chat } from './ChatManager';
import Toggle from './components/toggle/Toggle';
import Modal from './components/modal/Modal';
import { getPresignedUrl } from './apis/axios';
import { usePostAiChat } from './apis/queries';
import { processSolutionData, showStep, solutionStepsRef } from './ChatLogic';

const Solve = () => {
  const [chatList, setChatList] = useState<Chat[]>([]);
  const bottomRef = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [imageUploaded, setImageUploaded] = useState(false);
  const [downloadUrls, setDownloadUrls] = useState<string[]>([]);
  const [s3Key, setS3Key] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();
  const { mutateAsync: requestSolutionMutate } = usePostAiChat();

  useEffect(() => {
    requestAnimationFrame(() =>
      bottomRef.current?.scrollIntoView({ behavior: 'smooth' }),
    );
  }, [chatList, isLoading]);

  const handleImageSelect = (url: string) => {
    setChatList((prev) => [...prev, { from: 'me', imageUrl: url }]);
  };

  // Toggle 선택 처리
  const handleTextSelect = async (text: string) => {
    setChatList((prev) => [...prev, { from: 'me', text }]);

    if (
      text !== '해결했어요!' &&
      (!imageUploaded || !s3Key || downloadUrls.length === 0)
    ) {
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

    if (text === '전체 풀이를 알려줘') {
      if (isLoading) {
        return;
      }
      if (!solutionStepsRef.current.length) {
        setIsLoading(true);
        try {
          const solutionData = await requestSolutionMutate({
            downloadUrls,
            s3Key,
          });
          const steps = processSolutionData(solutionData);
          solutionStepsRef.current = steps;
          setChatList((prev) => [
            ...prev,
            { from: 'server', text: steps.join('\n\n') },
          ]);
        } catch {
          setChatList((prev) => [
            ...prev,
            {
              from: 'server',
              text: '풀이 요청 중 오류가 발생했습니다. 잠시 후 다시 시도해 주세요.',
            },
          ]);
        } finally {
          setIsLoading(false);
        }
      } else {
        setChatList((prev) => [
          ...prev,
          { from: 'server', text: solutionStepsRef.current.join('\n\n') },
        ]);
      }
      return;
    }

    if (text === '단계별 풀이를 알려줘') {
      if (isLoading) {
        return;
      }
      if (!solutionStepsRef.current.length) {
        setIsLoading(true);
        try {
          const solutionData = await requestSolutionMutate({
            downloadUrls,
            s3Key,
          });
          const steps = processSolutionData(solutionData);
          solutionStepsRef.current = steps;

          if (!steps.length) {
            setChatList((prev) => [
              ...prev,
              { from: 'server', text: '풀이 정보가 없습니다.' },
            ]);
          } else {
            const buttons =
              steps.length > 1
                ? [
                    {
                      label: '다음 풀이',
                      onClick: () => showStep(1, setChatList),
                    },
                  ]
                : [];
            setChatList((prev) => [
              ...prev,
              { from: 'server', text: steps[0], buttons },
            ]);
          }
        } catch {
          setChatList((prev) => [
            ...prev,
            {
              from: 'server',
              text: '풀이 요청 중 오류가 발생했습니다.\n잠시 후 다시 시도해 주세요.',
            },
          ]);
        } finally {
          setIsLoading(false);
        }
      } else {
        const steps = solutionStepsRef.current;
        const buttons =
          steps.length > 1
            ? [
                {
                  label: '다음 풀이',
                  onClick: () => showStep(1, setChatList),
                },
              ]
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
    solutionStepsRef.current = [];
    setImageUploaded(false);
    setS3Key('');
    setDownloadUrls([]);

    const count = option === 'one' ? 1 : 2;
    const { uploadUrls, downloadUrls, s3Key } = await getPresignedUrl(count);

    const uploadPromises = uploadUrls.map((url, index) => {
      return new Promise<void>((resolve, reject) => {
        const input = document.createElement('input');
        input.type = 'file';
        input.accept = 'image/*';
        input.capture = 'environment';
        input.onchange = async (e: Event) => {
          const target = e.target as HTMLInputElement;
          const file = target.files?.[0];
          if (!file) {
            return reject(new Error('파일이 선택되지 않았습니다.'));
          }
          try {
            await uploadToPresignedUrl(url, file);
            handleImageSelect(downloadUrls[index]);
            resolve();
          } catch (err) {
            reject(err);
          }
        };
        input.click();
      });
    });
    await Promise.all(uploadPromises);

    setS3Key(s3Key);
    setDownloadUrls(downloadUrls);
    setImageUploaded(true);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.chatContainer}>
        {chatList.map((chat, idx) => (
          <ChatManager key={idx} chat={chat} />
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
