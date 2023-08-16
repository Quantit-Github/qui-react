import { commonTheme } from './common.theme';

export const lightTheme = {
  colors: {
    primary: '#ff0000',
  },
  ...commonTheme,
};

/**
 * 실제 사용되는 테마 타입
 */
export type defaultThemeType = typeof lightTheme;
