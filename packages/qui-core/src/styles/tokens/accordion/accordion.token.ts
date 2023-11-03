import { DefaultTheme } from 'styled-components';

export const accordionToken = (theme: DefaultTheme) => ({
  closed: {
    elements: theme.color.black_alpha[10],
    elements_lighten: theme.color.black_alpha[40],
    elements_brightest: theme.color.black_alpha[90],
    outline: theme.color.semantic.border_medium,
    container: theme.color.black_alpha[100],
  },
  open: {
    elements: theme.color.black_alpha[10],
    elements_lighten: theme.color.black_alpha[40],
    elements_brightest: theme.color.black_alpha[90],
    outline: theme.color.semantic.border_high,
    container: theme.color.black_alpha[100],
  },
  disabled: {
    elements: theme.color.black_alpha[70],
    elements_lighten: theme.color.black_alpha[80],
    elements_brightest: theme.color.black_alpha[95],
    outline: theme.color.semantic.border_low,
    container: theme.color.black_alpha[99],
  },
});
