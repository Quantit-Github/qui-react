import { DefaultTheme } from 'styled-components';

export const dividerToken = (theme: DefaultTheme) => ({
  darken: theme.color.semantic.border_low,
  lighten: theme.color.semantic.border_medium,
});
