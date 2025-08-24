import { useCallback } from 'react';
import { IcExtract } from '@components/icons';
import { useNavigate } from 'react-router-dom';
import { useInfiniteScroll } from '@hooks/useInfiniteScroll';
import ReviewCard from '@components/reviewCard/ReviewCard';
import { routePath } from '@routes/routePath';

import * as styles from './reviewNotes.css';
import { useGetReviewNotes } from './apis/queris';

// import { REVIEWNOTES_DATA } from '@/shared/constants/reviewNotesData';

const ReviewNotes = () => {
  const navigate = useNavigate();
  const handleClick = (id: number) => {
    navigate(routePath.REVIEW_NOTE_DETAIL.replace(':id', id.toString()));
  };

  const { data } = useGetReviewNotes();
  // const data = REVIEWNOTES_DATA;

  const loadMore = useCallback(() => {
    // 이후 추가
  }, []);

  const loaderRef = useInfiniteScroll(loadMore);

  const downloadPdf = async () => {
    // PDF 다운로드 로직
  };

  // 데이터 없을 때
  if (!data || data.length === 0) {
    return (
      <div className={styles.reviewContainer}>
        <h1 className={styles.title}>오답노트</h1>
        <p className={styles.pdfComment}>아직 질문한 문제가 없어요!</p>
      </div>
    );
  }

  // 데이터 있을 때
  return (
    <div className={styles.reviewContainer}>
      <h1 className={styles.title}>오답노트</h1>
      <button className={styles.pdfButton} onClick={downloadPdf}>
        <IcExtract width={20} height={20} /> 오답노트 PDF로 추출하기
      </button>
      <p className={styles.pdfComment}>
        질문했던 문제를 골라 출력해서 다시 풀어봐요!
      </p>

      <div className={styles.cardContainer}>
        {data.map((card) => (
          <ReviewCard
            key={card.questionId}
            imageSrc={card.problemImageUrl}
            text={card.unitType}
            onClick={() => handleClick(card.questionId)}
          />
        ))}
      </div>

      <div ref={loaderRef} />
    </div>
  );
};

export default ReviewNotes;
