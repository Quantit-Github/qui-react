import { DefaultTheme } from 'styled-components';

export const dropdownToken = (theme: DefaultTheme) => ({
  active: {
    elements: theme.color.black_alpha[100],
    outline: theme.color.semantic.border_medium,
    container: theme.color.black_alpha[0],
  },
  open: {
    elements: theme.color.black_alpha[100],
    outline: theme.color.semantic.border_medium,
    container: theme.color.grayscale[0],
  },
  disabled: {
    elements: theme.color.black_alpha[50],
    outline: theme.color.semantic.border_low,
    container: theme.color.black_alpha[20],
  },
});
