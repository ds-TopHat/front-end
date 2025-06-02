import { style } from '@vanilla-extract/css';
import { themeVars } from '@styles/theme.css';

export const footerWrapper = style({
  width: '100%',
  height: '16.4rem',
  backgroundColor: themeVars.color.gray600,
  padding: '3.6rem 2.4rem 8rem 2.4rem',

  color: themeVars.color.white000,

  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  gap: '0.8rem',
    ... themeVars.font.labelLarge,

});