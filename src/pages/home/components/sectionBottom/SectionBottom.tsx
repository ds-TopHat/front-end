import { IcMainPaperLeft, IcMainPaperRight } from '@components/icons';
import { useNavigate } from 'react-router-dom';

import * as styles from './sectionBottom.css';

import routePath from '@/routes/routePath';

const SectionBottom = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(routePath.SOLVE);
  };

  return (
    <div className={styles.sectionBottomWrapper}>
      {/* 왼쪽 아이콘 */}
      <IcMainPaperLeft className={styles.iconLeft} />

      {/* 오른쪽 아이콘 */}
      <IcMainPaperRight className={styles.iconRight} />

      {/* 버튼 */}
      <div className={styles.blueBackground}>
        <button className={styles.mainButton} onClick={handleClick}>
          질문 하러가기
        </button>
      </div>
    </div>
  );
};

export default SectionBottom;
