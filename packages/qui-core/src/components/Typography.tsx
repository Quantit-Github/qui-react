import { ElementType, createElement } from 'react';
import { css, styled } from 'styled-components';
import { TypographyVariantType } from '../styles/theme/typography.type';

export interface TypographyProps {
  /**
   * HTML Element 태그
   *
   * @default span
   * @example
   * <Typography as="h1">Hello World</Typography>
   */
  as?: ElementType;
  /**
   * Bold 유무
   *
   * @default false
   * @example
   * <Typography bold>Hello World</Typography>
   */
  bold?: boolean;
  /**
   * Bold 유무
   *
   * @default false
   * @example
   * <Typography bold>Hello World</Typography>
   */
  underline?: boolean;
  /**
   * 자식 컴포넌트
   */
  children?: React.ReactNode;
  /**
   * 타이포그래피 타입
   *
   * @example
   * <Typography variant="titleLarge">Hello World</Typography>
   */
  variant: TypographyVariantType;
}

const typographyCss = css<TypographyProps>`
  ${({ theme, variant, bold, underline }) => {
    if (bold) {
      if (underline) {
        return theme.typography[variant].boldUnderlined;
      } else {
        return theme.typography[variant].bold;
      }
    }
    return theme.typography[variant].css;
  }}
`;

const Component = (props: TypographyProps) =>
  createElement(props.as || 'span', props);

const TypographyStyle = styled(Component)`
  ${typographyCss}
`;

export function Typography(props: TypographyProps) {
  return <TypographyStyle {...props} />;
}

/**
 * HTML Element가 설정된 Typography 컴포넌트를 반환
 *
 * @param {ElementType} as HTML Element 태그
 * @returns {Typography} Typography 컴포넌트
 */

Typography.as = (as: ElementType) => {
  const Component = (props: TypographyProps) =>
    createElement(as || 'span', props);

  const TypographyStyle = styled(Component)`
    ${typographyCss}
  `;

  return TypographyStyle;
};

Typography.displayName = 'Typography';
