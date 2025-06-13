import { themeVars } from '@styles/theme.css';
import { style } from '@vanilla-extract/css';

export const wrapper = style({
  position: 'fixed',
  display: 'flex',
  bottom: 0,
  width: '100%',
  alignItems: 'center',
  backgroundColor: 'transparent',
  backdropFilter: 'blur(10px)',
});

export const scrollContainer = style({
  overflowX: 'auto',
  padding: '1.2rem 0',
});

export const inner = style({
  display: 'flex',
  alignItems: 'center',
  padding: '0 2.4rem',
  width: 'fit-content',
  gap: '2rem',
});

export const toggleList = style({
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
});

export const toggleButtonWrapper = style({
  position: 'relative',
  borderRadius: '100px',
  padding: '4px',
  backgroundImage: themeVars.color.main_gradient,
  width: 'fit-content',
  height: 'fit-content',
  boxShadow: '0px 0px 10px 0px rgba(33, 81, 236, 0.30)',
});

export const toggleButton = style({
  position: 'relative',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '0.6rem 2rem',
  height: '5.6rem',
  borderRadius: '100px',
  whiteSpace: 'nowrap',
  textAlign: 'center',
  backgroundColor: themeVars.color.white000,
  border: `4px solid ${themeVars.color.main_gradient}`,
  boxShadow: '0px 0px 10px 0px rgba(33, 81, 236, 0.30)',
  ...themeVars.font.bodyMedium,
});

export const gradientText = style({
  backgroundImage: themeVars.color.main_gradient,
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  color: 'transparent',
});

