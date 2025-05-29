import { createGlobalTheme } from '@vanilla-extract/css';

const vars = createGlobalTheme(':root', {
  fonts: {
    displayLarge: {
      fontWeight: '600',
      fontSize: '2.4rem',
      lineHeight: '3rem',
    },
    displayMedium: {
      fontWeight: '600',
      fontSize: '2rem',
      lineHeight: '2.4rem',
    },
    displaySmall: {
      fontWeight: '600',
      fontSize: '1.8rem',
      lineHeight: '2.4rem',
    },
    headlineLarge: {
      fontWeight: '600',
      fontSize: '1.6rem',
      lineHeight: '2rem',
    },
    headlineMedium: {
      fontWeight: '600',
      fontSize: '1.4rem',
      lineHeight: '1.8rem',
    },
    headlineSmall: {
      fontWeight: '500',
      fontSize: '2rem',
      lineHeight: '2.4rem',
    },
    bodyLarge: {
      fontWeight: '400',
      fontSize: '2rem',
      lineHeight: '2.4rem',
    },
    bodyMedium: {
      fontWeight: '400',
      fontSize: '1.8rem',
      lineHeight: '2.4rem',
    },
    bodySmall: {
      fontWeight: '400',
      fontSize: '1.6rem',
      lineHeight: '2rem',
    },
    labelLarge: {
      fontWeight: '400',
      fontSize: '1.4rem',
      lineHeight: '2.4rem',
    },
    labelSmall: {
      fontWeight: '400',
      fontSize: '1.2rem',
      lineHeight: '1.6rem',
    },
  },

  colors: {
    white000: '#FFFFFF',
    gray100: '#F2F4F8',
    gray200: '#E7EBEF',
    gray300: '#DEE2E6',
    gray400: '#CCD2D8',
    gray500: '#B5BBC1',
    gray600: '#3B3D40',
    point: '#488BFF',
    black000: '#191D1F',
    main_gradient: 'linear-gradient(270deg, #2150EC 0%, #488BFF 100%)',
  },
  zIndex: {
    one: '1',
    two: '2',
    three: '3',
    four: '4',
    five: '5',
  },
});

export default vars;
