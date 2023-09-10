import { ElementType, createElement } from 'react';
import { css, styled } from 'styled-components';
import {
  TypographySizeType,
  TypographyVariantType,
} from '../styles/themes/typography.type';

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
   * 자식 컴포넌트
   */
  children?: React.ReactNode;
  /**
   * 타이포그래피 사이즈
   *
   * @example
   * <Typography size="sm">Hello World</Typography>
   */
  size: TypographySizeType;
  /**
   * 타이포그래피 타입
   *
   * @example
   * <Typography variant="title">Hello World</Typography>
   */
  variant: TypographyVariantType;
}

const boldCss = css<TypographyProps>`
  ${({ bold }) => {
    if (!bold) return;
    return css`
      font-weight: bold;
    `;
  }}
`;

const variantCss = css<TypographyProps>`
  ${({ size, theme, variant }) => css`
    ${theme.typography[variant][size].cssString}
  `}
`;

const Component = (props: TypographyProps) =>
  createElement(props.as || 'span', props);

const TypographyStyle = styled(Component)`
  ${boldCss}
  ${variantCss}
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
Typography.as = (as: ElementType) => (props: TypographyProps) =>
  <TypographyStyle as={as} {...props} />;
