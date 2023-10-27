import { DefaultTheme } from 'styled-components';

export const tabToken = (theme: DefaultTheme) => ({
  off: {
    label: theme.color.black_alpha[60],
    outline: theme.color.black_alpha[90],
    container: theme.color.black_alpha[100],
  },
  on: {
    label: theme.color.black_alpha[10],
    outline: theme.color.black_alpha[20],
    container: theme.color.black_alpha[100],
  },
});
