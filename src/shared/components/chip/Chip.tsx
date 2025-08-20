import * as styles from './chip.css';

interface ChipProps {
  icon: React.ReactNode;
  label: string;
  background: string;
}

const Chip = ({ icon, label, background }: ChipProps) => {
  return (
    <div className={styles.chip} style={{ background }}>
      <span className={styles.icon}>{icon}</span>
      <span>{label}</span>
    </div>
  );
};

export default Chip;
