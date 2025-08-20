import { themeVars } from '@styles/theme.css';
import { style, styleVariants } from '@vanilla-extract/css';

export const baseInput = style({
  width: '100%',
  display: 'flex',
  height: '5.6rem',
  padding: '0.8rem 2rem',
  alignItems: 'center',
  gap: '0.8rem',
  alignSelf: 'stretch',
  borderRadius: '15px',
  outline: 'none',
  background: themeVars.color.white000,
  boxSizing: 'border-box',
  ...themeVars.font.bodySmall,
});

export const inputVariants = styleVariants({
  default: {
    border: `1px solid ${themeVars.color.gray200}`, // a) 기본
    color: themeVars.color.gray400,
    selectors: {
      '&::placeholder': {
        color: themeVars.color.gray400,
      },
    },
  },
  active: {
    border: `1px solid ${themeVars.color.point}`, // b) 입력중
    color: themeVars.color.gray600,
    boxShadow: `0 4px 10px 0 rgba(72, 139, 255, 0.10)`,

    selectors: {
      '&::placeholder': {
        color: themeVars.color.gray400,
      },
    },
  },
  filled: {
    border: `1px solid ${themeVars.color.gray200}`, // c) 입력 완료
    color: themeVars.color.gray600,
    selectors: {
      '&::placeholder': {
        color: themeVars.color.gray400,
      },
    },
  },
  error: {
    border: '1px solid #F73E3E', // d) 오류
    color: '#F73E3E',
    selectors: {
      '&::placeholder': {
        color: '#F73E3E',
      },
    },
  },
});

export const errorMessage = style({
  margin: '0 0 0 0.4rem',
  minHeight: '2.4rem',
  color: '#F73E3E',
  ...themeVars.font.labelLarge,
});
