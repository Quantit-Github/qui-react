import { DefaultTheme } from 'styled-components';

export const itemListToken = (theme: DefaultTheme) => ({
  active: {
    elements: theme.color.black_alpha[0],
    outline: theme.color.semantic.border_medium,
    container: theme.color.grayscale[100],
  },
  disabled: {
    elements: theme.color.black_alpha[70],
    container: theme.color.grayscale[100],
  },
});
