import { themeVars } from '@styles/theme.css';
import { style } from '@vanilla-extract/css';

export const chip = style({
  display: 'inline-flex',
  alignItems: 'center',
  padding: '0.8rem 1rem',
  gap: '0.8rem',
  color: themeVars.color.white000,
  borderRadius: '20px',
  ...themeVars.font.headlineSmall,
});

export const icon = style({
  width: '2.4rem',
  height: '2.4rem',
});
