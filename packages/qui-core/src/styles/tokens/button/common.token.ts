import { DefaultTheme, css } from 'styled-components';

export const buttonCommonToken = (theme: DefaultTheme) => ({
  disabled: {
    container: theme.color.black_alpha[95],
    elements: theme.color.black_alpha[70],
    outline: theme.color.semantic.border_low,
  },
});
