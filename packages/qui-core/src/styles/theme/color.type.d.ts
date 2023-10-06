type RGB = `rgb(${number}, ${number}, ${number})`;
type RGBA = `rgba(${number}, ${number}, ${number}, ${number})`;
type HEX = `#${string}`;

export type Color = RGB | RGBA | HEX;

type ColorTokenRecord = 0 | 10 | 20 | 30 | 40 | 50 | 60 | 70 | 80 | 90 | 95 | 99 | 100;

export type ColorRange = Record<ColorTokenRecord, Color>;

export type PaletteRecord =
    | 'primary'
    | 'grayscale'
    | 'black_alpha'
    | 'white_alpha'
    | 'error'
    | 'revenue_up'
    | 'revenue_down';

export type OptionalColorRange = Record<string, ColorRange>;

export type ColorRangePartial = Partial<ColorRange>;

export type SemanticRecord = 'brightest' | 'border_high' | 'border_medium' | 'border_low' | 'state_overlay_focused' | 'primary_lighten';

export type SemanticColorRange = Record<SemanticRecord, Color>;

export type ColorRangeUnion = ColorRange | SemanticColorRange | OptionalColorRange;
