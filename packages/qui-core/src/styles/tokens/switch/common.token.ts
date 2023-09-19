import { DefaultTheme } from 'styled-components';

export const switchCommonToken = (theme: DefaultTheme) => ({
  disabled: {
    container: theme.color.black_alpha[20],
    label: theme.color.black_alpha[50],
  },
});
