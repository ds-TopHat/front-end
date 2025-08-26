import type { Dispatch, SetStateAction } from 'react';

import type { Chat } from './ChatManager';

export const solutionStepsRef: { current: string[] } = { current: [] };

export const processSolutionData = (data: Record<string, string>[]) => {
  // step 순서대로
  const steps = data
    .filter((item) => Object.keys(item)[0].startsWith('step'))
    .map((item) => Object.values(item)[0]);

  // answer가 있으면 마지막에 추가
  const answerItem = data.find((item) => Object.keys(item)[0] === 'answer');
  if (answerItem) {
    steps.push(Object.values(answerItem)[0]);
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
