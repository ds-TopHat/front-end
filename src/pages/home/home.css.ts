import { style } from '@vanilla-extract/css';

const floatingSolveBtn = style({
  position: 'fixed',
  bottom: '2rem',
  right: '2rem',
  zIndex: 1000,
  cursor: 'pointer',
});

export { floatingSolveBtn };
