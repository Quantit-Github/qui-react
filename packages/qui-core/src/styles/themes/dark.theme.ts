import { commonTheme } from './common.theme';
import { defaultThemeType } from './light.theme';

export const darkTheme: defaultThemeType = {
  colors: {
    primary: '#2976FF',
    onPrimary: '#ffffff',
  },
  ...commonTheme,
};
