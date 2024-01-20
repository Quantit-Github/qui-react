import { CSSProperties, ElementType } from 'react';
import { FONT_WEIGHTS, TEXT_DECORATIONS } from './const';

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
