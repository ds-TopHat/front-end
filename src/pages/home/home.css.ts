import { style } from '@vanilla-extract/css';
import { themeVars } from '@styles/theme.css';

export const textStyle = style({
  ...themeVars.font.displayLarge,
  color: themeVars.color.point,
});
