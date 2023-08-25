import { BasePaletteType } from '../palette/palette';

export type SizeType = 'lg' | 'md' | 'sm';

export type TypographyVariantType =
  | 'title'
  | 'body'
  | 'label'
  | 'display'
  | 'headline';

export interface TypographySize {
  fontSize: string;
  lineHeight: string;
}

export type TypographyVariant = Record<SizeType, TypographySize>;

export type TypographyTheme = Record<TypographyVariantType, TypographyVariant>;

export interface defaultThemeType {
  colorPalette: BasePaletteType;
  typography: TypographyTheme;
}
