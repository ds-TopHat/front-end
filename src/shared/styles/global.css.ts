import { globalStyle, style } from '@vanilla-extract/css';

import { themeVars } from './theme.css';

globalStyle(':root', {
  vars: {
    '--min-width': '375px',
    '--max-width': '768px',
    '--height': '100dvh',
  },
});

globalStyle('html, body', {
  margin: 0,
  padding: 0,
  width: '100vw',
  minWidth: 'var(--min-width)',
  maxWidth: '100vw',
  overflowX: 'hidden',
  fontSize: '62.5%',
  fontFamily: `'Pretendard Variable', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif`,
  scrollbarWidth: 'none',
  scrollBehavior: 'smooth',
});

globalStyle('::-webkit-scrollbar', {
  display: 'none',
});

export const rootStyle = style({
  display: 'flex',
  flexDirection: 'column',
  margin: '0 auto',
  minHeight: '100dvh',
  minWidth: 'var(--min-width)',
  maxWidth: 'var(--max-width)',
  width: '100vw',
  backgroundColor: themeVars.color.white000,
  boxShadow: `0px 0px 30px 0px ${themeVars.color.gray300}`,
});