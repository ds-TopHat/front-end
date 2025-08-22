import Chip from '@components/chip/Chip';
import { CHIP_LIST } from '@components/chip/chipData';
import { IcDownArrow, IcRightArrow } from '@components/icons';
import { useNavigate } from 'react-router-dom';
import { routePath } from '@routes/routePath';
import { useMemo, useState } from 'react';
import { getKoreanParticle } from '@utils/korParticle';

import * as styles from './my.css';

const My = () => {
  const navigate = useNavigate();

  const goReviewNotes = () => {
    navigate(routePath.REVIEW_NOTES);
  };
  const [expanded, setExpanded] = useState(false);

  // 임시 랜덤 선택
  const [randomChip1, randomChip2] = useMemo(() => {
    const shuffled = [...CHIP_LIST].sort(() => 0.5 - Math.random());
    return [shuffled[0], shuffled[1] || shuffled[0]];
  }, []);

  const particle1 = getKoreanParticle(randomChip1.label, '와과'); // '와' or '과'
  const particle2 = getKoreanParticle(randomChip2.label, '을를'); // '을' or '를'

  const toggleExpand = () => setExpanded((prev) => !prev);

  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h1 className={styles.name}>000</h1>
        <h1 className={styles.hello}>님, 안녕하세요!</h1>
      </div>

      <div className={styles.noteDiv}>
        <div className={styles.noteCard}>
          <img
            src="/img/img_note.png"
            className={styles.noteImg}
            alt="오답노트"
            loading="lazy"
            decoding="async"
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

      <div className={styles.chipSection}>
        <div className={styles.randomChipContainer}>
          <div className={styles.firstLine}>
            <Chip
              icon={randomChip1.icon}
              label={randomChip1.label}
              background={randomChip1.background}
            />
            <span>{particle1}</span>
          </div>

          <div className={styles.secondLine}>
            <Chip
              icon={randomChip2.icon}
              label={randomChip2.label}
              background={randomChip2.background}
            />
            <span>{particle2} 많이 물어봤어요!</span>
          </div>
        </div>

        <div className={styles.divider} />

        <div className={styles.chipListWrapper}>
          <div
            className={styles.chipList}
            style={{
              maxHeight: expanded ? 'none' : '4.8rem',
              overflow: 'hidden',
            }}
          >
            {CHIP_LIST.map((chip, idx) => (
              <Chip
                key={idx}
                icon={chip.icon}
                label={chip.label}
                background={chip.background}
              />
            ))}
          </div>

          {!expanded && <div className={styles.chipGradientOverlay} />}
        </div>
      </div>

      <button className={styles.expandButton} onClick={toggleExpand}>
        <IcDownArrow
          width={16}
          height={28}
          className={expanded ? styles.rotated : ''}
        />
      </button>
    </div>
  );
};

export default My;
