export type TypographySizeType = 'lg' | 'md' | 'sm';

export type TypographyVariantType =
  | 'title'
  | 'body'
  | 'label'
  | 'display'
  | 'headline';

export interface TypographyValue {
  /**
   * fontSize, lineHeight로 이뤄진 CSS string.
   * @example
   * theme.typography.body.lg.cssString // 'font-size:16px;line-height:24px'
   */
  cssString: string;
  /**
   * fontSize
   * @example
   * theme.typography.body.lg.fontSize // '16px'
   */
  fontSize: string;
  /**
   * lineHeight
   * @example
   * theme.typography.body.lg.lineHeight // '24px'
   */
  lineHeight: string;
}

export type TypographyVariant = Record<TypographySizeType, TypographyValue>;

export type TypographyTheme = Record<TypographyVariantType, TypographyVariant>;
