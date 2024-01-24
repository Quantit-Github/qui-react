import { CSSProperties, ElementType, createElement } from 'react';
import classnames from './LayoutContainer.module.scss';

interface ContainerProps {
  as?: ElementType;
  children?: React.ReactNode;
  style?: CSSProperties;
}

export function LayoutContainer({ as = 'div', ...props }: ContainerProps) {
  return createElement(as, {
    className: classnames.container,
    ...props,
  });
}

export const Layout = {
  Container: LayoutContainer,
};
