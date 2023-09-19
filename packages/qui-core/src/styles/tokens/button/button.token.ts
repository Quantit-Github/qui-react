import { DefaultTheme } from 'styled-components';

export const buttonToken = (theme: DefaultTheme) => ({
  primary: {
    active: {
      container: theme.color.primary[50],
      elements: theme.color.semantic.brightest,
    },
  },
  secondary: {
    active: {
      container: theme.color.primary[10],
      elements: theme.color.black_alpha[100],
    },
  },
  ghost: {
    active: {
      elements: theme.color.black_alpha[100],
      elements_var: theme.color.black_alpha[30],
    },
  },
  outline: {
    active: {
      elements: theme.color.black_alpha[100],
      outline: theme.color.semantic.border_medium,
    },
  },
});
