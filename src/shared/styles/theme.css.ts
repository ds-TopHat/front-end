import { createTheme } from '@vanilla-extract/css';
import { createSprinkles, defineProperties } from '@vanilla-extract/sprinkles';
import colors from '@styles/tokens/colors';
import fonts from '@styles/tokens/fonts';
import zIndex from '@styles/tokens/z-index';

const tokens = {
  color: colors,
  font: fonts,
  zIndex: zIndex,
};

const properties = defineProperties({
  properties: tokens,
});

const sprinkles = createSprinkles(properties);

const [themeClass, themeVars] = createTheme(tokens);

export { sprinkles, themeClass, themeVars, tokens };
