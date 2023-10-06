type DisplayType = 'displayLarge' | 'displayMedium' | 'displaySmall';
type HeadlineType = 'headlineLarge' | 'headlineMedium' | 'headlineSmall';
type TitleType = 'titleLarge' | 'titleMedium' | 'titleSmall';
type BodyType = 'bodyLarge' | 'bodyMedium' | 'bodySmall';
type LabelType = 'labelLarge' | 'labelMedium' | 'labelSmall';

export type TypographyVariantType =
  | DisplayType
  | HeadlineType
  | TitleType
  | BodyType
  | LabelType;

type FontWeight = 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900;

type TextDecoration = 'none' | 'underline' | 'line-through' | 'overline' | 'inherit' | 'inherit';

interface TypographyValueInterface {
  /**
   * fontSize, lineHeight로 이뤄진 CSS string.
   * @example
   * theme.typography.body.lg.cssString // 'font-size:16px;line-height:24px'
   */
  fontSize: string;
  /**
   * lineHeight
   * @example
   * theme.typography.body.lg.lineHeight // '24px'
   */
  lineHeight: string;
}

export type QuiTypography = Record<TypographyVariantType, TypographyValue>;