import { CSSProperties, ElementType, createElement } from 'react';
import { replaceClassName } from '../../utils';
import classNames from 'classnames';

interface LayoutContainerProps {
  as?: ElementType;
  /**
   * React Children
   */
  children?: React.ReactNode;
  /**
   * HTML classname
   */
  className?: string;
  /**
   * 각 클래스명을 변환할 때 사용할 객체
   */
  classReplacer?: Record<string, string>;
  /**
   * CSS style
   */
  style?: CSSProperties;
}

export function LayoutContainer({
  as = 'div',
  className,
  classReplacer,
  ...props
}: LayoutContainerProps) {
  return createElement(as, {
    className: replaceClassName(
      classNames('layout_container', className),
      classReplacer
    ),
    ...props,
  });
}

export const Layout = {
  Container: LayoutContainer,
};
