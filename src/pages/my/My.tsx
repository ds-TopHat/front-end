import Chip from '@components/chip/Chip';
import { IcChipNum, IcDownArrow, IcRightArrow } from '@components/icons';
import { useState } from 'react';
import { getKoreanParticle } from '@utils/korParticle';
import { useNavigate } from 'react-router-dom';
import { routePath } from '@routes/routePath';

import * as styles from './my.css';

import { CHIP_LIST } from '@/shared/constants/chipData';
import { MYPAGE_DATA } from '@/shared/constants/mypageData';

const My = () => {
  const navigate = useNavigate();

  const goReviewNotes = () => {
    navigate(routePath.REVIEW_NOTES);
  };
  const [expanded, setExpanded] = useState(false);
  const toggleExpand = () => setExpanded((prev) => !prev);
  const data = MYPAGE_DATA;

  const mappedChips = data.unitsList.map((chip) => {
    const matched = CHIP_LIST.find((c) => c.id === chip.id);
    return {
      ...chip,
      icon: matched?.icon ?? <IcChipNum />,
      background:
        matched?.background ?? 'linear-gradient(90deg, #ccc 0%, #eee 100%)',
      label: matched?.label ?? chip.type,
    };
  });

  const [topChip1, topChip2, ...restChips] = mappedChips;

  const particle1 = getKoreanParticle(topChip1?.label ?? '', '와과');
  const particle2 = getKoreanParticle(topChip2?.label ?? '', '을를');

  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h1 className={styles.name}>{data.name}</h1>
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
        {/* 상위 2개 칩 */}
        <div className={styles.randomChipContainer}>
          <div className={styles.firstLine}>
            <Chip
              icon={topChip1.icon}
              label={topChip1.label}
              background={topChip1.background}
            />
            <span>{particle1}&nbsp;</span>
          </div>

          <div className={styles.secondLine}>
            <Chip
              icon={topChip2.icon}
              label={topChip2.label}
              background={topChip2.background}
            />
            <span>{particle2} 많이 물어봤어요!</span>
          </div>
        </div>

        <div className={styles.divider} />

        {/* 나머지 칩 */}
        <div className={styles.chipListWrapper}>
          <div
            className={styles.chipList}
            style={{
              maxHeight: expanded ? 'none' : '8rem',
              overflow: 'hidden',
            }}
          >
            {restChips.map((chip) => (
              <Chip
                key={chip.id}
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
