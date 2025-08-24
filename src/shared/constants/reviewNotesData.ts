export interface ReviewNote {
  questionId: number;
  problemImageUrl: string;
  unitType: string;
}

export const REVIEWNOTES_DATA: ReviewNote[] = [
  {
    questionId: 5,
    problemImageUrl:
      'https://i.ytimg.com/vi/kNzE2PDrqe8/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBkEwIQ1K0mQ3JEQEYyiMknOiL2aQ',
    unitType: '문자와 식',
  },
  {
    questionId: 4,
    problemImageUrl:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5DhSPjtOV1nHC-Coquc65e_wptEM2pW3H8g&s',
    unitType: '문자와 식',
  },
  {
    questionId: 3,
    problemImageUrl:
      'https://i1.sndcdn.com/artworks-rPeP7ICzbCgY8jsG-dAA8QA-t500x500.jpg',
    unitType: '일차방정식',
  },
  {
    questionId: 2,
    problemImageUrl:
      'https://i.ytimg.com/vi/pGvK66317Yo/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLB7b-jug3dbfn8dZHSPID8MNqVzCQ',
    unitType: '원의 방정식',
  },
  {
    questionId: 1,
    problemImageUrl: 'https://tophat2025.com/img/2.jpg',
    unitType: '정수와 유리수',
  },
  {
    questionId: 0,
    problemImageUrl: 'https://tophat2025.com/img/8.jpg',
    unitType: '인수분해',
  },
];
