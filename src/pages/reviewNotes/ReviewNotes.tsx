import { useState, useCallback } from 'react';
import { IcExtract } from '@components/icons';
import { useNavigate } from 'react-router-dom';
import { routePath } from '@routes/routePath';
import { useInfiniteScroll } from '@hooks/useInfiniteScroll';
import ReviewCard from '@components/reviewCard/ReviewCard';

import * as styles from './reviewNotes.css';

const ReviewNotes = () => {
  const navigate = useNavigate();

  const handleClick = (id: number) => {
    navigate(routePath.REVIEW_NOTE_DETAIL.replace(':id', id.toString()));
  };

  const dummyCards = Array.from({ length: 50 }, (_, i) => ({
    id: i + 1,
    text: `카드 ${i + 1}`,
    imageSrc: `https://picsum.photos/300/200?random=${i + 1}`,
  }));

  const [cards, setCards] = useState(dummyCards.slice(0, 10));

  const loadMore = useCallback(() => {
    setCards((prev) => {
      const nextSlice = dummyCards.slice(prev.length, prev.length + 10);
      if (nextSlice.length === 0) {
        return prev;
      }
      return [...prev, ...nextSlice];
    });
  }, [dummyCards]);

  const loaderRef = useInfiniteScroll(loadMore);

  return (
    <div className={styles.reviewContainer}>
      <h1 className={styles.title}>오답노트</h1>
      <button className={styles.pdfButton}>
        <IcExtract width={20} height={20} /> 오답노트 PDF로 추출하기
      </button>
      <p className={styles.pdfComment}>
        질문했던 문제를 골라 출력해서 다시 풀어봐요!
      </p>

      <div className={styles.cardContainer}>
        {cards.map((card) => (
          <ReviewCard
            key={card.id}
            imageSrc={card.imageSrc}
            text={card.text}
            onClick={() => handleClick(card.id)}
          />
        ))}
      </div>

      <div ref={loaderRef} />
    </div>
  );
};

export default ReviewNotes;
