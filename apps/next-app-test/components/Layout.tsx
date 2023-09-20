import {
  BASE_THEME,
  Button,
  ThemeProvider,
  Typography,
  useTheme,
} from '@quantit/qui-react';
import React from 'react';
import { styled } from 'styled-components';
import { ExtendedTheme } from '../styled';

interface LayoutProps {
  children: React.ReactNode;
}

const customTheme: ExtendedTheme = {
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
  foo: 'color: green; font-size: 20px;',
};

const Div = styled.div<{ state: boolean }>`
  color: ${({ theme }) => theme.color.revenue_up[30]};
  font-size: ${({ theme }) => theme.typography.body.sm.fontSize};
`;

const Foo = styled.p`
  ${({ theme }) => theme.foo};
`;

export default function Layout({ children }: LayoutProps) {
  const { toggleThemeMode } = useTheme();

  return (
    <>
      <span>dfdfdf</span>
      <Div state={true}>divdiv</Div>
      <Button variant="outline" onClick={toggleThemeMode}>
        dd
      </Button>
      <Typography variant="title" size="sm">
        dd
      </Typography>
      <Foo>Foo1</Foo>
      <ThemeProvider theme={customTheme}>
        <Foo>Foo2</Foo>
        {children}
      </ThemeProvider>
    </>
  );
}
