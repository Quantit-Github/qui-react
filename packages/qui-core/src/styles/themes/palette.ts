import { DARK_BASE_PALETTE, LIGHT_BASE_PALETTE } from './palette.const';
import { BasePaletteType, PaletteMode, PaletteOptions } from './palette.type';
import { getPaletteFromOptions } from './palette.utils';

export class Palette {
  private mode: PaletteMode = 'light';
  private darkPalette: BasePaletteType = DARK_BASE_PALETTE;
  private lightPalette: BasePaletteType = LIGHT_BASE_PALETTE;
  private currentPalette: BasePaletteType = this.lightPalette;

  constructor(mode: PaletteMode) {
    this.mode = mode;
    this.currentPalette =
      this.mode === 'light' ? this.lightPalette : this.darkPalette;
  }

  public getPalette(): BasePaletteType {
    return this.currentPalette;
  }

  public getPaletteMode(): PaletteMode {
    return this.mode;
  }

  public setPalette(mode: PaletteMode, options: PaletteOptions): this {
    if (mode === 'dark') {
      this.darkPalette = {
        ...this.darkPalette,
        ...getPaletteFromOptions(mode, options),
      };
    } else if (mode === 'light') {
      this.lightPalette = {
        ...this.lightPalette,
        ...getPaletteFromOptions(mode, options),
      };
    }
    return this;
  }

  public setPaletteMode(mode: PaletteMode): this {
    this.mode = mode;
    this.currentPalette =
      this.mode === 'light' ? this.lightPalette : this.darkPalette;
    return this;
  }
}
