import { themeVars } from "@styles/theme.css";
import { style } from '@vanilla-extract/css';

export const headerWrapper = style({
  height: '10.8rem',
  display: 'flex',
  padding: '6rem 2.4rem 1.2rem',
  alignItems: 'center',
  justifyContent: 'space-between',
  position: 'fixed',
  width: '100%',

  backgroundColor: 'rgba(116, 163, 255, 0.6)',
  boxShadow: '0px 4px 4px rgba(182, 182, 182, 0.1)',
  backdropFilter: 'blur(10px)',
  WebkitBackdropFilter: 'blur(10px)',
  zIndex: themeVars.zIndex.five,
});
