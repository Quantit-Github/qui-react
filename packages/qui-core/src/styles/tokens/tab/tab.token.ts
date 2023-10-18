import { DefaultTheme } from 'styled-components';

export const tabToken = (theme: DefaultTheme) => ({
  non_selected: {
    label: theme.color.black_alpha[60],
    outline: theme.color.black_alpha[90],
  },
  selected: {
    label: theme.color.black_alpha[10],
    outline: theme.color.black_alpha[20],
  },
  disabled: {
    label: theme.color.black_alpha[70],
    outline: theme.color.black_alpha[95],
  },
});
