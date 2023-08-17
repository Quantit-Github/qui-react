import { ThemeProvider, createGlobalStyle } from 'styled-components';
import { themes as $themes, ThemeMode, ThemesType, isDarkMode } from '.';
import { useLayoutEffect, useState } from 'react';
import reset from 'styled-reset';

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

const GlobalStyle = createGlobalStyle`
  ${reset}
`;

export function QuiThemeProvider({
  children,
  mode,
  themes = $themes,
}: QuiThemeProviderProps) {
  const [systemMode, setSystemMode] = useState<ThemeMode>('light');

  useLayoutEffect(() => {
    if (isDarkMode()) {
      setSystemMode('dark');
    }
  }, []);

  return (
    <ThemeProvider theme={themes[mode || systemMode]}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  );
}
