import { useParams } from 'react-router-dom';
import Chip from '@components/chip/Chip';

import * as styles from './reviewNoteDetail.css';
import { useGetReviewDetail } from './apis/queries';

import { CHIP_LIST } from '@/shared/constants/chipData';

const ReviewNoteDetail = () => {
  const { id } = useParams<{ id: string }>();
  const numericId = parseInt(id!, 10);

  const { data: note } = useGetReviewDetail(numericId);

  if (!note) {
    return (
      <main className={styles.mainContainer}>
        <p className={styles.noteContent}>존재하지 않는 노트입니다.</p>
      </main>
    );
  }

  const chipData = CHIP_LIST.find((chip) => chip.id === note.unitId);

  const answerArray = JSON.parse(note.aiAnswer);
  const formattedAiAnswer = Array.isArray(answerArray)
    ? answerArray
        .map((item) => {
          const key = Object.keys(item)[0];
          return item[key];
        })
        .join('\n')
    : '';

  return (
    <main className={styles.mainContainer}>
      <div className={styles.topContent}>
        <Chip
          icon={chipData?.icon}
          label={note.unitType}
          background={
            chipData?.background || 'linear-gradient(90deg,#ccc,#eee)'
          }
        />
        <p className={styles.date}>{note.createdAt}</p>
      </div>

      <img src={note.problemImageUrl} alt={`오답노트 ${note.questionId}`} />

      <p className={styles.noteContent}>{formattedAiAnswer}</p>
    </main>
  );
};

export default ReviewNoteDetail;
