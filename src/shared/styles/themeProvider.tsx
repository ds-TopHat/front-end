import { type ReactNode } from 'react';
import { themeClass } from '@styles/theme.css';

import '@styles/reset.css';

const ThemeProvider = ({
  theme,
  className,
  children,
}: {
  children: ReactNode;
  theme?: string;
  className?: string;
}) => {
  return (
    <div className={`${theme ?? themeClass} ${className ?? ''}`}>
      {children}
    </div>
  );
};

export default ThemeProvider;
