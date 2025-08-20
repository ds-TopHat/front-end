import { useState, type InputHTMLAttributes } from 'react';

import * as styles from './input.css';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  error?: string;
}

const Input = ({ error, value, ...props }: InputProps) => {
  const [focused, setFocused] = useState(false);

  let variant: keyof typeof styles.inputVariants = 'default';

  if (error) {
    variant = 'error'; // d) 오류
  } else if (focused) {
    variant = 'active'; // b) 입력중
  } else if (value) {
    variant = 'filled'; // c) 입력 완료
  } else {
    variant = 'default'; // a) 기본
  }

  return (
    <>
      <input
        className={`${styles.baseInput} ${styles.inputVariants[variant]}`}
        value={value}
        onFocus={(e) => {
          setFocused(true);
          props.onFocus?.(e);
        }}
        onBlur={(e) => {
          setFocused(false);
          props.onBlur?.(e);
        }}
        {...props}
      />
      {error ? (
        <div className={styles.errorMessage}>{error}</div>
      ) : (
        <div className={styles.errorMessage} style={{ visibility: 'hidden' }} />
      )}
    </>
  );
};

export default Input;
