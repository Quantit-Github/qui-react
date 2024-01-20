import { CSSProperties, ElementType } from 'react';

export const FONT_WEIGHTS = ['bold', 'semibold', 'regular'] as const;
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

export type TypographyVarint =
  | 'display'
  | 'headline'
  | 'title'
  | 'body'
  | 'label';
export type TypographySize = 'large' | 'medium' | 'small';
type TypographyVariantType = `${TypographyVarint}-${TypographySize}`;
type TextDecorationType = typeof TEXT_DECORATIONS[number];
type FontWeightType = typeof FONT_WEIGHTS[number];

export interface TypographyProps {
  as?: ElementType;
  bold?: FontWeightType;
  className?: string;
  children?: React.ReactNode;
  decoration?: TextDecorationType;
  style?: CSSProperties;
  variant?: TypographyVariantType;
}
