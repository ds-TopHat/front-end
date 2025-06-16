import { style } from '@vanilla-extract/css';
import { themeVars } from '@styles/theme.css';

const lineWrapper = style({
  position: 'relative',
});

const gradientOverlay = style({
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
});

const wrapper = style({
  display: 'flex',
  flexDirection: 'column',
  position: 'fixed',

  gap: '0.8rem',
  paddingTop: '19.2rem',
  paddingLeft: '3.2rem',

  zIndex: themeVars.zIndex.three,
});

const line = style({
  fontFamily: 'Pretendard Variable',
  fontSize: '3.2rem',
  fontWeight: 600,
  lineHeight: 'normal',
  color: themeVars.color.white000,
});

const gradient = style({
  background: themeVars.color.main_gradient,
  backgroundClip: 'text',
  WebkitBackgroundClip: 'text',
  color: 'transparent',
  WebkitTextFillColor: 'transparent',
});

export { lineWrapper, gradientOverlay, wrapper, line, gradient };
