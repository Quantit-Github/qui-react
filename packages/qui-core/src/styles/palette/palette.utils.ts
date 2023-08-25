import {
  BasePaletteEnum,
  BasePaletteType,
  PaletteMode,
  PaletteOptions,
} from './palette';
import { darkBasePalette, lightBasePalette } from './palette.base';

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
  mode: PaletteMode,
  options: PaletteOptions
): BasePaletteType {
  const palette: BasePaletteType = Object.create(
    mode === 'dark' ? darkBasePalette : lightBasePalette
  );

  Object.keys(options).forEach((optionKey) => {
    const _key = optionKey as BasePaletteEnum;
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
