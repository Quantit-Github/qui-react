import { DefaultTheme } from 'styled-components';

export const switchCommonToken = (theme: DefaultTheme) => ({
  disabled: {
    icon: theme.color.black_alpha[70],
    label: theme.color.black_alpha[70],
    handle: theme.color.grayscale[100],
    outline: theme.color.semantic.border_low,
    frame: theme.color.black_alpha[90],
    container: theme.color.black_alpha[100],
  },
});
