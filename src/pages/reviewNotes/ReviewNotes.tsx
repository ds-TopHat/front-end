import { IcExtract } from '@components/icons';

import * as styles from './reviewNotes.css';

const ReviewNotes = () => {
  return (
    <div className={styles.reviewContainer}>
      <h1 className={styles.title}>오답노트</h1>
      <button className={styles.pdfButton}>
        <IcExtract width={20} height={20} /> 오답노트 PDF로 추출하기
      </button>
      <p className={styles.pdfComment}>
        질문했던 문제를 골라 출력해서 다시 풀어봐요!
      </p>
    </div>
  );
};

export default ReviewNotes;
