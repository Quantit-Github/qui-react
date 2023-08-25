import { Palette } from '../palette';
import { PaletteMode, PaletteOptions } from '../palette/palette';
import { TypographyTheme, defaultThemeType } from './theme';
import { typographyTheme } from './theme.typography';

export class Theme {
  private palette: Palette;
  private typography: TypographyTheme = typographyTheme;

  constructor() {
    this.palette = new Palette('light');
  }

  public setPalette(mode: PaletteMode, options: PaletteOptions) {
    this.palette.setPalette(mode, options);
    return this;
  }

  public setPaletteMode(mode: PaletteMode) {
    this.palette.setPaletteMode(mode);
    return this;
  }

  public getTheme(): defaultThemeType {
    return {
      colorPalette: this.palette.getPalette(),
      typography: this.typography,
    };
  }
}
