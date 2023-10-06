import {
  ColorRange,
  ColorRangePartial,
  ColorRangeUnion,
  SemanticColorRange,
} from './color.type';

export type PaletteRecord =
  | 'primary'
  | 'grayscale'
  | 'black_alpha'
  | 'white_alpha'
  | 'error'
  | 'revenue_up'
  | 'revenue_down';

export type BaseQuiColorPalette = Record<PaletteRecord, ColorRange> &
  Record<'semantic', SemanticColorRange>;
export type QuiColorPalette = BaseQuiColorPalette &
  Record<string, ColorRangeUnion>;

export type ThemeMode = 'dark' | 'light';

export type PaletteOptions = Partial<Record<PaletteRecord, ColorRangePartial>>;

export type QuiPalette = {
  dark: QuiColorPalette;
  light: QuiColorPalette;
  mode: ThemeMode;
};
