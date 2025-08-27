import { style, keyframes } from '@vanilla-extract/css';
import { themeVars } from '@styles/theme.css';

// 위아래로 점프하는 애니메이션
const bounce = keyframes({
  '0%, 80%, 100%': { transform: 'translateY(0)' },
  '40%': { transform: 'translateY(-12px)' },
});

export const container = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100dvh',
  background: 'linear-gradient(0deg, #E7F0FF 0%, #FFF 100%)',
});

export const dots = style({
  display: 'flex',
  gap: '0.8rem',
});

export const dot = style({
  width: '1rem',
  height: '1rem',
  borderRadius: '50%',
  backgroundColor: themeVars.color.point,
  animation: `${bounce} 1.4s infinite ease-in-out both`,
  selectors: {
    '&:nth-child(1)': { animationDelay: '0s' },
    '&:nth-child(2)': { animationDelay: '0.2s' },
    '&:nth-child(3)': { animationDelay: '0.4s' },
  },
});
