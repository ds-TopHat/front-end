import { themeVars } from '@styles/theme.css';
import { style } from '@vanilla-extract/css';

const wrapper = style({
  width: '100%',
  minHeight: '100vh',
  height: '100%',
  paddingTop: '10.8rem',
  paddingBottom: '11.6rem',
  backgroundColor: themeVars.color.gray100,
});

const chatContainer = style({
  flex: 1,
  overflowY: 'auto',
  padding: '1.6rem',
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
});

const chatBubbleLeft = style({
  alignSelf: 'flex-start',
  maxWidth: '340px',
  padding: '0.8rem',
  borderRadius: '1.2rem',
  backgroundColor: themeVars.color.white000,
  boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
});

const chatBubbleRight = style({
  alignSelf: 'flex-end',
  maxWidth: '34rem',
  padding: '0.8rem',
  borderRadius: '1.2rem',
  background: themeVars.color.main_gradient,
  boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
});

const chatImage = style({
  width: '100%',
  height: 'auto',
  borderRadius: '1rem',
  display: 'block',
});

const chatText = style({
  color: themeVars.color.white000,
  wordBreak: 'break-word',
  ...themeVars.font.bodySmall,
});

const chatServerText = style({
  color: themeVars.color.gray700,
  wordBreak: 'break-word',
  ...themeVars.font.bodySmall,
});

export {
  wrapper,
  chatContainer,
  chatBubbleLeft,
  chatBubbleRight,
  chatImage,
  chatText,
  chatServerText,
};
