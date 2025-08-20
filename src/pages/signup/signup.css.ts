import { style } from '@vanilla-extract/css';

export const formWrapper = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '0.4rem',
  width: '100%',
  padding: '0 3.6rem',
});

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  marginTop: '12rem',
});

export const topBox = style({
  width: '12rem',
  height: '12rem',
  backgroundColor: '#98B6FF',
  marginBottom: '5.8rem',
});
