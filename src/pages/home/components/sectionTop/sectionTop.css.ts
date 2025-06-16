import { style } from '@vanilla-extract/css';
import { themeVars } from '@styles/theme.css';

const sectionTopWrapper = style({
  height: '222rem',
  background: themeVars.color.main_gradient,
  position: 'relative',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  maxWidth: '768px',
  width: '100%',
});

const iconPosition = style({
  position: 'absolute',
  top: '20rem',
  right: '3rem',
});

export { sectionTopWrapper, iconPosition };
