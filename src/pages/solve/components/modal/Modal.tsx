import * as styles from './modal.css';

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  onSelect: (option: 'one' | 'two') => void;
};

const Modal = ({ isOpen, onClose, onSelect }: ModalProps) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div className={styles.backdrop} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <p className={styles.title}>사진 업로드 방식을 선택하세요</p>
        <div className={styles.buttonContainer}>
          <button className={styles.button} onClick={() => onSelect('one')}>
            문제 사진만 올리기
          </button>
          <button className={styles.button} onClick={() => onSelect('two')}>
            문제 + 풀이 사진 올리기
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
