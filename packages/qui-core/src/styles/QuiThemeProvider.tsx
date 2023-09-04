import { useLayoutEffect, useMemo, useRef, useState } from 'react';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import { PaletteMode } from './themes/palette.type';
import { Theme } from './themes/theme';
import { isDarkMode } from './utils';

interface QuiThemeProviderProps {
  children: React.ReactNode;
  /**
   * 테마 모드  (light | dark)
   *
   * 테마 모드를 강제하고 싶을 때 사용.
   * @type {PaletteMode}
   */
  mode?: PaletteMode;
  /**
   * 테마 인스턴스
   *
   * 기존 테마를 덮어쓰고 싶을 때 사용.
   * @type {Theme}
   * @description 테마 인스턴스를 생성하여 넘긴다.
   * @example
   * const theme = new Theme().setPalette('dark', {
   *  primary: {
   *   100: '#FF0000',
   *  },
   * });
   *
   * <QuiThemeProvider themes={theme}>
   */
  theme?: Theme;
}

const GlobalStyle = createGlobalStyle`
  ${reset}
`;

export function QuiThemeProvider({
  children,
  mode,
  theme,
}: QuiThemeProviderProps) {
  const [systemMode, setSystemMode] = useState<PaletteMode>('light');
  const themeInstance = useRef(theme || new Theme());
  const _theme = useMemo(
    () => themeInstance.current.setPaletteMode(systemMode).getTheme(),
    [systemMode]
  );

  useLayoutEffect(() => {
    if (isDarkMode()) {
      setSystemMode('dark');
    }
  }, []);

  useLayoutEffect(() => {
    if (mode) {
      setSystemMode(mode);
    }
  }, [mode]);

  return (
    <ThemeProvider theme={_theme}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  );
}
