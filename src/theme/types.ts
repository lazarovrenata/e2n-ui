export type Theme = {
  fontFamily: {
    sansSerif: string;
  };
  size: {
    base: string;
    xs: string;
    sm: string;
    md: string;
    lg: string;
  };
  heading: {
    h1: string;
    h2: string;
    h3: string;
    h4: string;
    h5: string;
    h6: string;
  };
  weight: {
    light: number;
    regular: number;
    semibold: number;
    bold: number;
  };
  lineHeight: {
    xs: number;
    sm: number;
    md: number;
    lg: number;
  };
  link: {
    decoration: string;
    hoverDecoration: string;
  };
  spacing: {
    base: number;
    xs: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
  };
  borderRadius: {
    xs: string;
    sm: string;
    md: string;
  };
};

export interface ColorPalette {
  // Primary colors
  darkBlue: string;
  systemGray100: string;
  blue: string;

  // Feedback colors
  red: string;
  lightRed: string;
  darkRed: string;
  green: string;
  lightGreen: string;
  darkGreen: string;

  // Neutral colors
  white: string;
  systemGray200: string;
  systemGray500: string;
  black: string;
}
