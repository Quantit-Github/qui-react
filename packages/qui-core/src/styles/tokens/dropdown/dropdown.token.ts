import { DefaultTheme } from 'styled-components';

export const dropdownToken = (theme: DefaultTheme) => ({
  non_selected: {
    elements: theme.color.black_alpha[50],
    elements_var: theme.color.black_alpha[50],
    outline: theme.color.semantic.border_medium,
    container: theme.color.black_alpha[100],
  },
  selected: {
    elements: theme.color.black_alpha[10],
    elements_var: theme.color.black_alpha[50],
    outline: theme.color.semantic.border_medium,
    container: theme.color.black_alpha[100],
  },
  disabled: {
    elements: theme.color.black_alpha[70],
    outline: theme.color.semantic.border_low,
    container: theme.color.black_alpha[95],
  },
});
