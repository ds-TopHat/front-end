import { useRef } from 'react';
import { IcToggleCamera } from '@components/icons';
import * as styles from '@pages/solve/components/toggle/toggle.css';

const TOGGLE_ITEMS = [
  '전체 풀이를 알려줘',
  '다음 단계를 알려줘',
  '해결했어요!',
];
interface ToggleProps {
  onTextSelect: (text: string) => void;
  onFileSelect: (file: File) => void;
}

const Toggle = ({ onTextSelect, onFileSelect }: ToggleProps) => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleCameraClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      onFileSelect(file);
    }
  };
  return (
    <div className={styles.wrapper}>
      <div className={styles.scrollContainer}>
        <div className={styles.inner}>
          <div onClick={handleCameraClick} style={{ cursor: 'pointer' }}>
            <IcToggleCamera width={56} />
          </div>

          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            capture="environment"
            onChange={handleFileChange}
            style={{ display: 'none' }}
          />

          <div className={styles.toggleList}>
            {TOGGLE_ITEMS.map((label, idx) => (
              <div key={idx} className={styles.toggleButtonWrapper}>
                <div
                  className={styles.toggleButton}
                  onClick={() => onTextSelect(label)}
                >
                  <span className={styles.gradientText}>{label}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Toggle;
