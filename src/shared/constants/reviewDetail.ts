export interface ReviewDetail {
  questionId: number;
  unitId: number;
  unitType: string;
  createdAt: string;
  problemImageUrl: string;
  aiAnswer: string;
}

export const REVIEWDETAIL_DATA: ReviewDetail[] = [
  {
    questionId: 1,
    unitId: 6,
    unitType: '문자와 식',
    createdAt: '2025.03.31.',
    problemImageUrl: 'https://picsum.photos/300/200?random=1',
    aiAnswer: '반지름이 5cm인 원이 원점 (0,0)을 중심으로 있습니다.',
  },
  {
    questionId: 2,
    unitId: 6,
    unitType: '문자와 식',
    createdAt: '2025.04.01.',
    problemImageUrl: 'https://picsum.photos/300/200?random=2',
    aiAnswer: '다른 문제 풀이 예시입니다.',
  },
];
