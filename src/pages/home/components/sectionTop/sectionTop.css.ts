import { style } from '@vanilla-extract/css';
import { themeVars } from '@styles/theme.css';

const sectionTopWrapper = style({
  position: 'relative',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',

  width: '100%',
  height: '249.8rem',
  background: themeVars.color.main_gradient,
});

const iconPosition = style({
  position: 'absolute',
  top: '20rem',
  right: '3rem',
});

export { sectionTopWrapper, iconPosition };
