import { useState, useCallback } from 'react';
import { IcExtract } from '@components/icons';
import { useNavigate } from 'react-router-dom';
import { routePath } from '@routes/routePath';
import { useInfiniteScroll } from '@hooks/useInfiniteScroll';
import ReviewCard from '@components/reviewCard/ReviewCard';

import * as styles from './reviewNotes.css';

import { REVIEWNOTES_DATA } from '@/shared/constants/reviewnotesData';

const ReviewNotes = () => {
  const navigate = useNavigate();
  const handleClick = (id: number) => {
    navigate(routePath.REVIEW_NOTE_DETAIL.replace(':id', id.toString()));
  };

  const [cards, setCards] = useState(REVIEWNOTES_DATA.slice(0, 10));

  const loadMore = useCallback(() => {
    setCards((prev) => {
      const nextSlice = REVIEWNOTES_DATA.slice(prev.length, prev.length + 10);
      if (nextSlice.length === 0) {
        return prev;
      }
      return [...prev, ...nextSlice];
    });
  }, []);

  const loaderRef = useInfiniteScroll(loadMore);

  const downloadPdf = async () => {
    // pdf 다운로드 로직
  };

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
        {cards.map((card) => (
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
