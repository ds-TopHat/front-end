import { themeVars } from '@styles/theme.css';
import { style } from '@vanilla-extract/css';

export const container = style({
  height: '100dvh',
  background: 'linear-gradient(355deg, #FFF 48.23%, #BFD9FE 97.05%), #FFF',
});

export const title = style({
  display: 'flex',
  flexDirection: 'row',
  padding: '5.6rem 0 0 3.6rem',
});

export const name = style({
  color: themeVars.color.point,
  fontSize: '3.2rem',
  fontWeight: 400,
  lineHeight: 'normal',
  fontStyle: 'normal',
});

export const hello = style({
  background: themeVars.color.main_gradient,
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  fontSize: '2.8rem',
  fontWeight: 400,
  lineHeight: 'normal',
  fontStyle: 'normal',
});

export const noteDiv = style({
  padding: '2.6rem',
  borderRadius: '12px',
  margin: 'auto 0',
});

export const noteTitle = style({
  color: themeVars.color.gray600,
  ...themeVars.font.displayLarge,
});

export const noteDescription = style({
  color: themeVars.color.gray500,
  ...themeVars.font.bodySmall,
});

export const noteCard = style({
  position: 'relative',
  width: '100%',
  maxWidth: '500px',
  borderRadius: '12px',
  overflow: 'hidden',
});

export const noteImg = style({
  width: '100%',
  height: 'auto',
  display: 'block',
});

export const noteContainer = style({
  position: 'absolute',
  top: '50%',
  left: '0',
  width: '100%',
  transform: 'translateY(-50%)',
  display: 'flex',
  justifyContent: 'space-between',
  padding: '0 3.2rem',
  boxSizing: 'border-box',
});

export const noteButton = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '4.8rem',
  height: '4.8rem',
  background: themeVars.color.main_gradient,
  boxShadow: '0 0 10px 0 rgba(33, 81, 236, 0.30)',
  borderRadius: '15px',
  cursor: 'pointer',
  border: 'none',
  alignSelf: 'flex-end',
});

export const noteContent = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
});
