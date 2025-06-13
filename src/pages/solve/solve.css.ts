import { themeVars } from '@styles/theme.css';
import { style } from '@vanilla-extract/css';

export const wrapper = style({
  width: '100%',
  minHeight: '100vh',
  height: '100%',
  paddingTop: '10.8rem',
  paddingBottom: '11.6rem',
  backgroundColor: themeVars.color.gray100,
});

export const chatContainer = style({
  flex: 1,
  overflowY: 'auto',
  padding: '1.6rem',
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
});

export const chatBubbleLeft = style({
  alignSelf: 'flex-start',
  maxWidth: '340px',
  padding: '0.8rem',
  borderRadius: '1.2rem',
  backgroundColor: themeVars.color.white000,
  boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
});

export const chatBubbleRight = style({
  alignSelf: 'flex-end',
  maxWidth: '340px',
  padding: '0.8rem',
  borderRadius: '1.2rem',
  background: themeVars.color.main_gradient,
  boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
});

export const chatImage = style({
  width: '100%',
  height: 'auto',
  borderRadius: '1rem',
  display: 'block',
});

export const chatText = style({
  fontSize: '1.4rem',
  lineHeight: '1.6',
  color: themeVars.color.white000,
  wordBreak: 'break-word',
});

export const chatServerText = style({
  fontSize: '1.4rem',
  lineHeight: '1.6',
  color: '#333',
  wordBreak: 'break-word',
});
