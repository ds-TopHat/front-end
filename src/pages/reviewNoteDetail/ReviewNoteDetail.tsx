import Chip from '@components/chip/Chip';
import { useParams } from 'react-router-dom';

import * as styles from './reviewNoteDetail.css';

import { CHIP_LIST } from '@/shared/constants/chipData';
import { REVIEWDETAIL_DATA } from '@/shared/constants/reviewDetail';

const ReviewNoteDetail = () => {
  const { id } = useParams<{ id: string }>();
  const numericId = parseInt(id!, 10);

  const note = REVIEWDETAIL_DATA.find((item) => item.questionId === numericId);
  if (!note) {
    return <p>존재하지 않는 노트입니다.</p>;
  }

  const chipData = CHIP_LIST.find((chip) => chip.label === note.unitType);

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

      <img src={note.problemImageUrl} alt={`노트 ${note.questionId}`} />

      <p className={styles.noteContent}>{note.aiAnswer}</p>
    </main>
  );
};

export default ReviewNoteDetail;
