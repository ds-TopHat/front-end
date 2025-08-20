import { style } from '@vanilla-extract/css';
import { themeVars } from '@styles/theme.css';

export const baseButton = style({
  display: 'flex',
  width: '100%',
  height: '5.6rem',
  padding: '0.8rem 2rem',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '0.8rem',
  flexShrink: 0,
  borderRadius: '15px',
  color: themeVars.color.white000,
  border: 'none',
  cursor: 'pointer',
  transition: 'opacity 0.2s ease',
  ...themeVars.font.headlineLarge,
});

export const active = style({
  background: themeVars.color.point,
  opacity: 1,
});

export const disabled = style({
  background: themeVars.color.point,
  opacity: 0.5,
});
