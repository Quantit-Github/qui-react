import { DefaultTheme } from 'styled-components';

export const toggleToken = (theme: DefaultTheme) => ({
  off: {
    container: theme.color.black_alpha[90],
    handle: theme.color.grayscale[100],
  },
  on: {
    container: theme.color.black_alpha[0],
    handle: theme.color.grayscale[100],
  },
});
