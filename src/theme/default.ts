import { ColorPalette, Theme } from './types';

const SPACING_BASE = 8;

export const colorPalette: ColorPalette = {
  // Primary colors
  darkBlue: '#000E43',
  systemGray100: '#f2f4f7',
  blue: '#0037ee',

  // Feedback colors
  green: '#46be8a',
  lightGreen: '#D0EFE2',
  darkGreen: '#007652',
  red: '#FA7A7A',
  lightRed: '#F9D8D8',
  darkRed: '#Ca0000',

  // Neutral colors
  white: '#ffffff',
  systemGray200: '#e4e7ec',
  systemGray500: '#667085',
  black: '#000000',
};

export const theme: Theme = {
  fontFamily: {
    sansSerif: 'Public sans, sans-serif',
  },
  size: {
    base: '16px',
    xs: '10px',
    sm: '12px',
    md: '14px',
    lg: '18px',
  },
  heading: {
    h1: '32px',
    h2: '24px',
    h3: '21px',
    h4: '18px',
    h5: '16px',
    h6: '14px',
  },
  weight: {
    light: 300,
    regular: 400,
    semibold: 500,
    bold: 600,
  },
  lineHeight: {
    xs: 1,
    sm: 1.1,
    md: 1.5,
    lg: 2,
  },
  link: {
    decoration: 'none',
    hoverDecoration: 'none',
  },
  spacing: {
    base: SPACING_BASE,
    xs: '4px',
    sm: '8px',
    md: '16px',
    lg: '24px',
    xl: '32px',
  },
  borderRadius: {
    xs: '4px',
    sm: '8px',
    md: '16px',
  },
};
