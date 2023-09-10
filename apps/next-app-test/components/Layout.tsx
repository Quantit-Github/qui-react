import {
  BASE_THEME,
  Button,
  QuiTheme,
  ThemeProvider,
  Typography,
  useTheme,
} from '@quantit/qui-react';
import React from 'react';
import { styled } from 'styled-components';

interface LayoutProps {
  children: React.ReactNode;
}

const Div = styled.div<{ state: boolean }>`
  color: ${({ theme }) => theme.color.up[30]};
  font-size: ${({ theme }) => theme.typography.body.sm.fontSize};
`;

const customTheme: QuiTheme = {
  ...BASE_THEME,
  palette: {
    ...BASE_THEME.palette,
    light: {
      ...BASE_THEME.palette.light,
      primary: {
        ...BASE_THEME.palette.light.primary,
        50: 'green',
      },
    },
  },
};

export default function Layout({ children }: LayoutProps) {
  const { toggleThemeMode } = useTheme();

  return (
    <>
      <span>dfdfdf</span>
      <Div state={true}>divdiv</Div>
      <Button variant="secondary" onClick={toggleThemeMode}>
        dd
      </Button>
      <Typography variant="title" size="sm">
        dd
      </Typography>
      <ThemeProvider theme={customTheme}>{children}</ThemeProvider>
    </>
  );
}
