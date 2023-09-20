import { DefaultTheme } from 'styled-components';

export const toggleToken = (theme: DefaultTheme) => ({
  off: {
    container: theme.color.black_alpha[30],
    handle: theme.color.grayscale[0],
  },
  on: {
    container: theme.color.black_alpha[100],
    handle: theme.color.grayscale[0],
  },
});
