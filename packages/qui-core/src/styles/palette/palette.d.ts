export interface ColorRange {
  0: string;
  10: string;
  20: string;
  30: string;
  40: string;
  50: string;
  60: string;
  70: string;
  80: string;
  90: string;
  95: string;
  99: string;
  100: string;
}

export type ColorRangePartial = Partial<ColorRange>;

export type BasePaletteEnum =
  | 'black'
  | 'error'
  | 'grayscale'
  | 'minus'
  | 'primary'
  | 'up'
  | 'white';

export type BasePaletteType = Record<BasePaletteEnum, ColorRange>;

export type PaletteMode = 'dark' | 'light';

export type PaletteOptions = Partial<
  Record<BasePaletteEnum, ColorRangePartial>
>;
