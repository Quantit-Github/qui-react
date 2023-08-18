import { commonTheme } from './theme.common';
import { defaultThemeType } from './theme.light';

export const darkTheme: defaultThemeType = {
  colors: {
    primary: '#2976FF',
    onPrimary: '#ffffff',
  },
  ...commonTheme,
};
