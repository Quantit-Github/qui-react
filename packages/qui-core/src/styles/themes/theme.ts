import { Palette } from './palette';
import { PaletteMode, PaletteOptions } from './palette.type';
import { defaultThemeType } from './theme.type';
import { BASE_TYPOGRAPHY } from './typography.const';
import { TypographyTheme } from './typography.type';

export class Theme {
  private palette: Palette;
  private typography: TypographyTheme = BASE_TYPOGRAPHY;

  constructor(mode: PaletteMode = 'light') {
    this.palette = new Palette(mode);
    this.palette.setPaletteMode(mode);
  }

  public getTheme(): defaultThemeType {
    return {
      color: {
        mode: this.palette.getPaletteMode(),
        palette: this.palette.getPalette(),
      },
      typography: this.typography,
    };
  }

  public setPalette(mode: PaletteMode, options: PaletteOptions): this {
    this.palette.setPalette(mode, options);
    return this;
  }

  public setPaletteMode(mode: PaletteMode): this {
    this.palette.setPaletteMode(mode);
    return this;
  }
}
