import { colorPalette } from './colorPalette';

export type Theme = {
  body: string;
  text: string;
  background: string;
  header: {
    color: string;
  };
};

export const lightTheme = {
  body: '#FFF',
  text: '#363537',
  background: '#363537',
  header: {
    color: colorPalette.secondaryDarker,
  },
};

export const darkTheme = {
  body: '#363537',
  text: '#FAFAFA',
  background: '#999',
  header: {
    color: colorPalette.commonWhite,
  },
};
