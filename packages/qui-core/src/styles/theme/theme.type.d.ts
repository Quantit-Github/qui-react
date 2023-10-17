import { QuiPalette, QuiColorPalette } from './palette.type';
import { QuiTypography } from './typography.type';
import { QuiSize } from './size.type';

export interface QuiTheme {
  /** 컬러 */
  color: QuiColorPalette;
  /** 타이포그래피 */
  typography: QuiTypography;
  palette: QuiPalette;
  size: QuiSize;
}
