import { QUI_DARK_PALETTE, QUI_LIGHT_PALETTE } from './const';
import {
  PaletteRecord,
  QuiColorPalette,
  ThemeMode,
  PaletteOptions,
} from './palette.type';

/**
 * 컬러 옵션을 넘겨서 새로운 팔레트를 만들어 반환.
 *
 * @param mode 팔레트 모드 (dark | light)
 * @param options 컬러 옵션
 * @returns {BasePaletteType}
 *
 * @example
 * const newLightPalette = getPaletteFromOptions('light', {
 *  primary: {
 *   0: '#ffffff',
 *   10: '#ffffff',
 *  }
 * });
 */
export function getPaletteFromOptions(
  mode: ThemeMode,
  options: PaletteOptions
): QuiColorPalette {
  const palette: QuiColorPalette = Object.create(
    mode === 'dark' ? QUI_DARK_PALETTE : QUI_LIGHT_PALETTE
  );

  Object.keys(options).forEach((optionKey) => {
    const _key = optionKey as PaletteRecord;
    const scale = options[_key];
    if (scale) {
      palette[_key] = {
        ...palette[_key],
        ...scale,
      };
    }
  });

  return palette;
}
