import { style } from '@vanilla-extract/css';

const sectionTopWrapper = style({
  position: 'relative',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',

  width: '100%',
  height: '249.8rem',
  background: 'linear-gradient(180deg, #2150EC 0%,rgb(130, 172, 255) 100%)',
});

const iconPosition = style({
  position: 'absolute',
  top: '20rem',
  right: '3rem',
});

export { sectionTopWrapper, iconPosition };
