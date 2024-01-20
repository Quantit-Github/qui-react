import { TypographySize, TypographyVarint } from './type';

export const FONT_WEIGHTS = ['bold', 'semibold', 'medium'] as const;

export const TYPOGRAPHY_VARIANTS: `${TypographyVarint}-${TypographySize}`[] = [
  'display-large',
  'display-medium',
  'display-small',
  'headline-large',
  'headline-medium',
  'headline-small',
  'title-large',
  'title-medium',
  'title-small',
  'body-large',
  'body-medium',
  'body-small',
  'label-large',
  'label-medium',
  'label-small',
] as const;

export const TEXT_DECORATIONS = [
  'dashed',
  'dotted',
  'double',
  'line-through',
  'none',
  'overline',
  'solid',
  'underline',
  'wavy',
] as const;
