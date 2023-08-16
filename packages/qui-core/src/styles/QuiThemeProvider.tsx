import { useLayoutEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import {
  GlobalStyle,
  ThemeMode,
  ThemesType,
  themes as $themes,
  isDarkMode,
} from '.';

interface QuiThemeProviderProps {
  children: React.ReactNode;
  /**
   * 테마 모드  (light | dark)
   *
   * 테마 모드를 강제로 설정하고 싶을 때 사용.
   */
  mode?: ThemeMode;
  /**
   * 테마 객체
   *
   * 기존 테마를 덮어쓰고 싶을 때 사용.
   * @description light와 dark 모드가 모두 정의되어야 함.
   * @type {ThemesType}
   */
  themes?: ThemesType;
}

export function QuiThemeProvider({
  children,
  mode,
  themes = $themes,
}: QuiThemeProviderProps) {
  const [systemThemeMode, setSystemThemeMode] = useState<ThemeMode>('light'); // props mode가 없다면 시스템 테마 사용.

  useLayoutEffect(() => {
    if (isDarkMode()) {
      setSystemThemeMode('dark');
    }
  }, []);

  return (
    <ThemeProvider theme={themes[mode || systemThemeMode]}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  );
}
