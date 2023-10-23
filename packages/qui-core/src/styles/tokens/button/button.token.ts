import { DefaultTheme } from 'styled-components';

export const buttonToken = (theme: DefaultTheme) => ({
  primary: {
    active: {
      container: theme.color.primary[70],
      elements: theme.color.semantic.brightest,
    },
  },
  secondary: {
    active: {
      container: theme.color.primary[99],
      elements: theme.color.primary[10],
    },
  },
  ghost: {
    active: {
      elements: theme.color.black_alpha[0],
      container: theme.color.black_alpha[100],
    },
  },
  outline: {
    active: {
      elements: theme.color.black_alpha[0],
      outline: theme.color.semantic.border_medium,
      container: theme.color.black_alpha[100],
    },
  },
});
