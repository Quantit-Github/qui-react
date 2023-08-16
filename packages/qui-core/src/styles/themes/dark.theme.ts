import { commonTheme } from './common.theme';
import { defaultThemeType } from './light.theme';

export const darkTheme: defaultThemeType = {
  colors: {
    primary: '#000000',
  },
  ...commonTheme,
};
