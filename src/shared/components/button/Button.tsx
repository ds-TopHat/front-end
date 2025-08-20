import { type ButtonHTMLAttributes } from 'react';

import * as styles from './button.css';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  isActive?: boolean;
  children: React.ReactNode;
}

const Button = ({ isActive = false, children, ...props }: ButtonProps) => {
  return (
    <button
      className={`${styles.baseButton} ${
        isActive ? styles.activeButton : styles.inactiveButton
      }`}
      disabled={!isActive}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
