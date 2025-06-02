import { style } from '@vanilla-extract/css';
import { themeVars } from '@styles/theme.css';

export const sectionTopWrapper = style({
  height: '204rem',
  background: themeVars.color.main_gradient,
  position: 'relative',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  maxWidth: '768px',
  width: '100%',
});

export const iconPosition = style({
  position: 'absolute',
  top: '20rem',
  right: '3rem',
});
