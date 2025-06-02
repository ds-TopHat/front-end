import { style } from '@vanilla-extract/css';

export const sectionBottomWrapper = style({
  height: '108.8rem',
  background: 'linear-gradient(168deg, #D7ECFF 0%, #AFDAFF 86.66%)',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});

export const paperLeft = style({
  position: 'absolute',
  left: 0,
  top: '2575px',
  transform: 'translateY(-50%)',
});

export const paperRight = style({
  position: 'absolute',
  right: 0,
  top: '2575px',
  transform: 'translateY(-50%)',
});

export const buttonWrapper = style({
  position: 'relative',
  zIndex: 2,
});

export const blueBackground = style({
  position: 'absolute',
  top: '-1rem',
  left: '-2rem',
  right: '-2rem',
  bottom: '-1rem',
  backgroundColor: 'rgba(0, 123, 255, 0.1)', // 연한 파란 투명 배경
  borderRadius: '1rem',
  zIndex: 1,
});

export const mainButton = style({
  position: 'relative',
  padding: '1rem 2rem',
  backgroundColor: '#007bff',
  color: '#fff',
  border: 'none',
  borderRadius: '0.75rem',
  fontSize: '1rem',
  cursor: 'pointer',
  zIndex: 2,
});
