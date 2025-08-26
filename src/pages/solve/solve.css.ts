import { themeVars } from '@styles/theme.css';
import { keyframes, style } from '@vanilla-extract/css';

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
  background: themeVars.color.point,
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

const ellipsis = keyframes({
  '0%, 20%': { content: '""' },
  '40%': { content: '"."' },
  '60%': { content: '".."' },
  '80%, 100%': { content: '"..."' },
});

const chatLoading = style({
  display: 'inline-block',
  width: '1em',
  textAlign: 'left',
  position: 'relative',
  selectors: {
    '&::after': {
      content: '""',
      animation: `${ellipsis} 1s steps(4, end) infinite`,
    },
  },
});

const chatButtons = style({
  display: 'flex',
  gap: '0.8rem',
  marginTop: '0.8rem',
});

const chatButton = style({
  flex: 1,
  padding: '0.8rem',
  borderRadius: '10px',
  border: `1px solid ${themeVars.color.gray200}`,
  background: themeVars.color.gray100,
  cursor: 'pointer',
  ...themeVars.font.labelSmall,
});

export {
  wrapper,
  chatContainer,
  chatBubbleLeft,
  chatBubbleRight,
  chatImage,
  chatText,
  chatServerText,
  chatLoading,
  chatButtons,
  chatButton,
};
