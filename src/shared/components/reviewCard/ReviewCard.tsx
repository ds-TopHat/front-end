import * as styles from './reviewCard.css';

interface ReviewCardProps {
  imageSrc: string;
  text: string;
  selected?: boolean;
  onClick?: () => void;
}

export const ReviewCard: React.FC<ReviewCardProps> = ({
  imageSrc,
  text,
  selected = false,
  onClick,
}) => {
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
