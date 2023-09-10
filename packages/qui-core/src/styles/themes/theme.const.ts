import { DARK_BASE_PALETTE, LIGHT_BASE_PALETTE } from './palette.const';
import { QuiTheme } from './theme.type';
import { BASE_TYPOGRAPHY } from './typography.const';

export const BASE_THEME: QuiTheme = {
  color: { ...LIGHT_BASE_PALETTE },
  palette: {
    dark: { ...DARK_BASE_PALETTE },
    light: { ...LIGHT_BASE_PALETTE },
    mode: 'light',
  },
  typography: { ...BASE_TYPOGRAPHY },
};
