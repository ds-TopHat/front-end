import { IcMainPaperLeft, IcMainPaperRight } from '@components/icons';
import { useNavigate } from 'react-router-dom';
import * as styles from '@pages/home/components/sectionBottom/sectionBottom.css';
import { routePath } from '@routes/routePath';

const SectionBottom = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(routePath.SOLVE);
  };

  return (
    <div className={styles.sectionBottomWrapper}>
      {/* 아이콘 */}
      <div className={styles.iconContainer}>
        <IcMainPaperLeft className={styles.iconFull} />
        <IcMainPaperRight className={styles.iconFull} />
      </div>

      {/* 버튼 */}
      <div className={styles.blueBackground}>
        <button
          type="button"
          className={styles.mainButton}
          onClick={handleClick}
        >
          질문 하러가기
        </button>
      </div>
    </div>
  );
};

export default SectionBottom;
