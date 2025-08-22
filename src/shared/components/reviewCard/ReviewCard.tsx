import * as styles from './reviewCard.css';

interface ReviewCardProps {
  imageSrc: string;
  text: string;
  selected?: boolean;
  onClick?: () => void;
}

const ReviewCard = ({
  imageSrc,
  text,
  selected = false,
  onClick,
}: ReviewCardProps) => {
  return (
    <div
      className={`${styles.cardContainer} ${selected ? styles.cardSelected : ''}`}
      onClick={onClick}
    >
      <img src={imageSrc} alt={text} className={styles.imageBackground} />
      <div
        className={`${styles.overlay} ${selected ? styles.overlaySelected : ''}`}
      />
      <div className={styles.textContainer}>{text}</div>
    </div>
  );
};

export default ReviewCard;
