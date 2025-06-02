import { IcMainPaperLeft } from '@components/icons';
import * as styles from '@pages/home/components/sectionBottom/sectionBottom.css';

const SectionBottom = () => {
  return (
    <div className={styles.sectionBottomWrapper}>
      <IcMainPaperLeft />
      <button>질문 하러가기</button>
      <IcMainPaperLeft />
    </div>
  );
};

export default SectionBottom;
