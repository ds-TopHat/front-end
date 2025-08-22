import { themeVars } from '@styles/theme.css';
import { style } from '@vanilla-extract/css';

export const reviewContainer = style({
  padding: '3.2rem 3.6rem',
});

export const title = style({
  paddingBottom: '2.4rem',
  color: themeVars.color.gray600,
  ...themeVars.font.displayLarge,
});

export const pdfButton = style({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '0.8rem',
  width: '100%',
  padding: ' 1.4rem 0',
  borderRadius: '15px',

  border: `1px solid ${themeVars.color.gray100}`,
  background: themeVars.color.white000,
  boxShadow: '0 0 10px 0 rgba(192, 198, 202, 0.10)',

  color: themeVars.color.point,
  ...themeVars.font.headlineLarge,
});

export const pdfComment = style({
  display: 'flex',
  justifyContent: 'center',
  paddingTop: '0.8rem',
  color: themeVars.color.gray500,
  ...themeVars.font.labelLarge,
});

export const cardContainer = style({
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  padding: '4.8rem 0',
  rowGap: '24px',
  columnGap: '10px',
});
