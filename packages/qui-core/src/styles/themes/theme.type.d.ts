import { BasePaletteType, PaletteMode } from './palette.type';
import { TypographyTheme } from './typography.type';

export interface QuiTheme {
  /** 컬러 */
  color: {
    mode: PaletteMode;
    palette: BasePaletteType;
  };
  /** 타이포그래피 */
  typography: TypographyTheme;
}
