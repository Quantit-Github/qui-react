import { DefaultTheme } from 'styled-components';

export const stateOverlayToken = (theme: DefaultTheme) => ({
  selected: theme.color.primary[10],
  focused: theme.color.semantic.state_overlay_focused,
  pressed: theme.color.black_alpha[20],
  hover: theme.color.black_alpha[10],
});
