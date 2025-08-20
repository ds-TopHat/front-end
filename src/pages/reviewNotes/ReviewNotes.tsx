import Chip from '@components/chip/Chip';
import { CHIP_LIST } from '@components/chip/chipData';

import * as styles from './reviewNotes.css';

const ReviewNotes = () => {
  return (
    <div className={styles.container}>
      {CHIP_LIST.map((chip, idx) => (
        <Chip
          key={idx}
          icon={chip.icon}
          label={chip.label}
          background={chip.background}
        />
      ))}
    </div>
  );
};

export default ReviewNotes;
