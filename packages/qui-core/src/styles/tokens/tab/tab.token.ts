import { DefaultTheme } from 'styled-components';

export const tabToken = (theme: DefaultTheme) => ({
  off: {
    label: theme.color.black_alpha[60],
    outline: theme.color.black_alpha[90],
  },
  on: {
    label: theme.color.black_alpha[10],
    outline: theme.color.black_alpha[20],
  },
});
