import { BasePaletteType, PaletteMode } from './palette.type';
import { TypographyTheme } from './typography.type';

export type SizeType = 'lg' | 'md' | 'sm';

export interface QuiTheme {
  color: {
    mode: PaletteMode;
    palette: BasePaletteType;
  };
  typography: TypographyTheme;
}
