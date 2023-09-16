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

export interface SemanticColorRange {
  brightest: string;
  border_high: string;
  border_medium: string;
  border_low: string;
  state_overlay_focused: string;
  primary_lighten: string;
}

export type ColorRangePartial = Partial<ColorRange>;

export type BasePaletteEnum =
  | 'primary'
  | 'grayscale'
  | 'black_alpha'
  | 'white_alpha'
  | 'error'
  | 'revenue_up'
  | 'revenue_down';

export type BasePaletteType = Record<BasePaletteEnum, ColorRange> &
  Record<'semantic', SemanticColorRange>;

export type PaletteMode = 'dark' | 'light';

export type PaletteOptions = Partial<
  Record<BasePaletteEnum, ColorRangePartial>
>;
