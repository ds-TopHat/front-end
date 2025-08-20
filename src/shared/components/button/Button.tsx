import { type ButtonHTMLAttributes } from 'react';

import * as styles from './button.css';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  disabled?: boolean;
  children: React.ReactNode;
}

const Button = ({ disabled = false, children, ...props }: ButtonProps) => {
  return (
    <button
      className={`${styles.baseButton} ${disabled ? styles.disabled : styles.active}`}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
