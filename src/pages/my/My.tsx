import Chip from '@components/chip/Chip';
import { CHIP_LIST } from '@components/chip/chipData';
import { IcRightArrow } from '@components/icons';
import { useNavigate } from 'react-router-dom';
import { routePath } from '@routes/routePath';

import * as styles from './my.css';

const My = () => {
  const navigate = useNavigate();

  const goReviewNotes = () => {
    navigate(routePath.REVIEW_NOTES);
  };

  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h1 className={styles.name}>000</h1>
        <h1 className={styles.hello}>님, 안녕하세요!</h1>
      </div>

      <div className={styles.noteDiv}>
        <div className={styles.noteCard}>
          <img
            src="/public/img/img_note.png"
            className={styles.noteImg}
            alt="오답노트"
          />
          <div className={styles.noteContainer}>
            <div className={styles.noteContent}>
              <h2 className={styles.noteTitle}>오답노트</h2>
              <p className={styles.noteDescription}>
                질문했던 문제를 <br />한 번 더 풀어볼까요?
              </p>
            </div>
            <button className={styles.noteButton} onClick={goReviewNotes}>
              <IcRightArrow width={10} height={20} />
            </button>
          </div>
        </div>
      </div>
      {CHIP_LIST.map((chip, idx) => (
        <Chip
          key={idx}
          icon={chip.icon}
          label={chip.label}
          background={chip.background}
        />
      ))}
    </div>
  );
};

export default My;
