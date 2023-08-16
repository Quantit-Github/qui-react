import { darkTheme } from './dark.theme';
import { lightTheme } from './light.theme';

export const themes = {
  dark: {
    ...darkTheme,
  },
  light: {
    ...lightTheme,
  },
};

export type ThemeMode = 'dark' | 'light';
export type ThemesType = typeof themes;
