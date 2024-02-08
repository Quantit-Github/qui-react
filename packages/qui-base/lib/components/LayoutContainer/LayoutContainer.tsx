import { CSSProperties, ElementType, createElement } from 'react';

interface ContainerProps {
  as?: ElementType;
  children?: React.ReactNode;
  style?: CSSProperties;
}

export function LayoutContainer({ as = 'div', ...props }: ContainerProps) {
  return createElement(as, {
    className: 'layout_container',
    ...props,
  });
}

export const Layout = {
  Container: LayoutContainer,
};
