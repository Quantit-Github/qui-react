import { createContext, useContext, useMemo, useState } from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { ThemeMode } from './theme/palette.type';
import { QuiTheme } from './theme/theme.type';
import { QUI_BASE_THEME } from './theme/const';

interface ThemeProviderProps {
  children: React.ReactNode;
  /**
   * 커스텀 테마
   *
   * 기존 테마를 덮어쓰고 싶을 때 사용.
   * @type {QuiTheme}
   * @description 테마 인스턴스를 생성하여 넘긴다.
   *
   * @example
   *
   * <QuiThemeProvider theme={theme}>
   */
  theme?: QuiTheme;
}

interface ThemeContextProps {
  themeMode: ThemeMode;
  toggleThemeMode: () => void;
}

export const ThemeContext = createContext<ThemeContextProps>({
  themeMode: 'light',
  toggleThemeMode: () => {},
});

export function useTheme() {
  const { toggleThemeMode, themeMode } = useContext(ThemeContext);

  return {
    toggleThemeMode,
    themeMode,
  };
}

export function QuiThemeProvider({
  children,
  theme: _theme,
}: ThemeProviderProps) {
  const [themeMode, setThemeMode] = useState<ThemeMode>('light');

  const toggleThemeMode = () => {
    setThemeMode(themeMode === 'light' ? 'dark' : 'light');
  };

  const theme = useMemo(() => {
    let currentTheme = _theme || QUI_BASE_THEME;
    currentTheme = {
      ...currentTheme,
      color: { ...currentTheme.palette[themeMode] },
      // TODO: 다크 테마 논의 후 임시 코드 제거
      palette: { ...currentTheme.palette, mode: themeMode },
    };
    return currentTheme;
  }, [_theme, themeMode]);

  return (
    <StyledThemeProvider theme={theme}>
      <ThemeContext.Provider
        value={{
          themeMode,
          toggleThemeMode,
        }}
      >
        {children}
      </ThemeContext.Provider>
    </StyledThemeProvider>
  );
}
