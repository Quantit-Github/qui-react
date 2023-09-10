import { TypographyValue } from './typography.type';

export function createTypography(
  fontSize: string,
  lineHeight: string
): TypographyValue {
  return {
    cssString: `font-size:${fontSize};line-height:${lineHeight}`,
    fontSize,
    lineHeight,
  };
}
