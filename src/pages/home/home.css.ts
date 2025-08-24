import { themeVars } from '@styles/theme.css';
import { style } from '@vanilla-extract/css';

export const floatingSolveBtn = style({
  display: 'flex',
  position: 'fixed',
  justifyContent: 'flex-end',

  bottom: '2rem',
  left: '50%',
  transform: 'translateX(-50%)',
  paddingRight: '2rem',

  width: '100%',
  maxWidth: '768px',
  zIndex: themeVars.zIndex.one,
});
