import { themeVars } from '@styles/theme.css';
import { style } from '@vanilla-extract/css';

export const sectionBottomWrapper = style({
  position: 'relative',
  height: '108.8rem',
  background: 'linear-gradient(168deg, #D7ECFF 0%, #AFDAFF 86.66%)',
  overflow: 'hidden',
});

export const iconLeft = style({
  position: 'absolute',
  left: '0.5rem',
  bottom: '41%',
  width: 'clamp(20rem, 5vw, 90rem)',
  height: 'auto',
});

export const iconRight = style({
  position: 'absolute',
  right: '0.5rem',
  bottom: '41%',
  width: 'clamp(20rem, 5vw, 90rem)',
  height: 'auto',
});

export const blueBackground = style({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  padding: '0.9rem',
  backgroundColor: 'rgba(33, 80, 236, 0.1)',
  borderRadius: '1rem',
  zIndex: 2,
});

export const mainButton = style({
  padding: '1.2rem 2.4rem',
  background: themeVars.color.main_gradient,
  color: themeVars.color.white000,
  border: 'none',
  borderRadius: '1rem',
  whiteSpace: 'nowrap',
  cursor: 'pointer',
  zIndex: 3,
  ...themeVars.font.displayLarge,
});
