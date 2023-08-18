import { darkTheme } from './theme.dark';
import { lightTheme } from './theme.light';

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
