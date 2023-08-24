import { commonTheme } from './theme.common';
import { typographyTheme } from './theme.typography';

export const lightTheme = {
  colors: {
    primary: '#2976FF',
    onPrimary: '#ffffff',
  },
  ...commonTheme,
};

/**
 * 실제 사용되는 테마 타입
 */
export type defaultThemeType = typeof lightTheme;