import { themeVars } from '@styles/theme.css';
import { style } from '@vanilla-extract/css';

export const headerWrapper = style({
  height: '10.8rem',
  display: 'flex',
  padding: '6rem 2.4rem 1.2rem',
  alignItems: 'center',
  justifyContent: 'space-between',
  position: 'fixed',
  top: 0,
  width: '100%',
  backdropFilter: 'blur(5px)',
  zIndex: themeVars.zIndex.five,
});
