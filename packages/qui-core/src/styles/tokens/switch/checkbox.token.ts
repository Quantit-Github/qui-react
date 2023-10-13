import { DefaultTheme } from 'styled-components';

export const checkboxToken = (theme: DefaultTheme) => ({
  checked: {
    icon: theme.color.grayscale[100],
    label: theme.color.black_alpha[0],
    frame: theme.color.black_alpha[0],
    container: theme.color.black_alpha[100],
  },
  unchecked: {
    label: theme.color.black_alpha[0],
    frame: theme.color.semantic.border_medium,
    container: theme.color.black_alpha[100],
  },
});
