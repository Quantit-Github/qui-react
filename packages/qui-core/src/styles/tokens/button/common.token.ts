import { DefaultTheme, css } from 'styled-components';

export const buttonCommonToken = (theme: DefaultTheme) => ({
  disabled: {
    container: theme.color.black_alpha[20],
    elements: theme.color.black_alpha[50],
    outline: theme.color.semantic.border_low,
  },
});
