import Chip from '@components/chip/Chip';
import { useParams } from 'react-router-dom';

import * as styles from './reviewNoteDetail.css';

import { CHIP_LIST } from '@/shared/constants/chipData';

const dummyData = [
  {
    id: 1,
    title: '자연수의 성질',
    date: '2025.03.31.',
    imageSrc: 'https://picsum.photos/300/200?random=1',
    content: '반지름이 5cm인 원이 원점 (0,0)을 중심으로 있습니다...',
  },
  {
    id: 2,
    title: '유리수와 소수',
    date: '2025.04.01.',
    imageSrc: 'https://picsum.photos/300/200?random=2',
    content: '다른 문제 풀이 예시입니다...',
  },
];

const ReviewNoteDetail = () => {
  const { id } = useParams<{ id: string }>();
  const numericId = parseInt(id!, 10);

  const note = dummyData.find((item) => item.id === numericId);
  if (!note) {
    return <p>존재하지 않는 노트입니다.</p>;
  }

  const chipData = CHIP_LIST.find((chip) => chip.label === note.title);

  return (
    <main className={styles.mainContainer}>
      <div className={styles.topContent}>
        <Chip
          icon={chipData?.icon}
          label={note.title}
          background={
            chipData?.background || 'linear-gradient(90deg,#ccc,#eee)'
          }
        />
        <p className={styles.date}>{note.date}</p>
      </div>

      <img src={note.imageSrc} alt={`노트 ${note.id}`} />

      <p className={styles.noteContent}>{note.content}</p>
    </main>
  );
};

export default ReviewNoteDetail;
