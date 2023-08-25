import { BasePaletteType, PaletteMode, PaletteOptions } from './palette';
import { darkBasePalette, lightBasePalette } from './palette.base';
import { getPaletteFromOptions } from './palette.utils';

export class Palette {
  private mode: PaletteMode = 'light';
  private darkPalette: BasePaletteType = darkBasePalette;
  private lightPalette: BasePaletteType = lightBasePalette;
  private currentPalette: BasePaletteType = this.lightPalette;

  constructor(mode: PaletteMode) {
    this.mode = mode;
    this.currentPalette =
      this.mode === 'light' ? this.lightPalette : this.darkPalette;
    return this;
  }

  public getPalette(): BasePaletteType {
    return this.currentPalette;
  }

  public getPaletteMode(): PaletteMode {
    return this.mode;
  }

  public setPalette(mode: PaletteMode, options: PaletteOptions) {
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

  public setPaletteMode(mode: PaletteMode) {
    this.mode = mode;
    this.currentPalette =
      this.mode === 'light' ? this.lightPalette : this.darkPalette;
    return this;
  }
}
