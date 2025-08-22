import { themeVars } from '@styles/theme.css';
import { style } from '@vanilla-extract/css';

export const chip = style({
  display: 'inline-flex',
  alignItems: 'center',
  padding: '0.8rem 1rem',
  gap: '0.4rem',
  color: themeVars.color.white000,
  borderRadius: '20px',
  ...themeVars.font.bodySmall,
  whiteSpace: 'nowrap',
  userSelect: 'none',
});

export const icon = style({
  width: '2rem',
  height: '2rem',
});
