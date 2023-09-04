import { SizeType } from './theme.type';

export type TypographyVariantType =
  | 'title'
  | 'body'
  | 'label'
  | 'display'
  | 'headline';

export interface TypographySize {
  fontSize: string;
  lineHeight: string;
}

export type TypographyVariant = Record<SizeType, TypographySize>;

export type TypographyTheme = Record<TypographyVariantType, TypographyVariant>;
