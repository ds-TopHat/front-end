import type { Dispatch, SetStateAction } from 'react';

import type { Chat } from './ChatManager';

export const solutionStepsRef: { current: string[] } = { current: [] };

export const processSolutionData = (data: Record<string, string>[]) => {
  // stepN 키를 전부 모아서 N 기준으로 정렬
  const stepEntries = data
    .flatMap((item) => Object.entries(item))
    .filter(([k]) => k.startsWith('step')) as [string, string][];

  stepEntries.sort((a, b) => {
    const num = (k: string) => parseInt(k.replace(/\D/g, ''), 10) || 0;
    return num(a[0]) - num(b[0]);
  });

  const steps = stepEntries.map(([, v]) => v);

  // answer가 있으면 마지막에 추가
  const answer = data
    .flatMap((item) => Object.entries(item))
    .find(([k]) => k === 'answer')?.[1];
  if (answer) {
    steps.push(answer as string);
  }
  return steps;
};

export const showStep = (
  index: number,
  setChatList: Dispatch<SetStateAction<Chat[]>>,
) => {
  const steps = solutionStepsRef.current;
  if (index < 0 || index >= steps.length) {
    return;
  }

  const buttons =
    index < steps.length - 1
      ? [
          {
            label: '다음 풀이',
            onClick: () => showStep(index + 1, setChatList),
          },
        ]
      : [];

  setChatList((prev) => [
    ...prev,
    { from: 'server', text: steps[index], buttons },
  ]);
};
