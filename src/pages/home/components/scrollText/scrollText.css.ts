import { style } from '@vanilla-extract/css';
import { themeVars } from '@styles/theme.css';

export const wrapper = style({
  position: 'fixed',
  top: '19.2rem',
  paddingLeft: '3.2rem',
  zIndex: themeVars.zIndex.three,
});

export const line = style({
  fontFamily: 'Pretendard Variable',
  fontSize: '3.2rem',
  fontWeight: 600,
  lineHeight: 'normal',
  color: themeVars.color.white000,
});

export const gradient = style({
  background: themeVars.color.main_gradient,
  backgroundClip: 'text',
  WebkitBackgroundClip: 'text',
  color: 'transparent',
  WebkitTextFillColor: 'transparent',
});