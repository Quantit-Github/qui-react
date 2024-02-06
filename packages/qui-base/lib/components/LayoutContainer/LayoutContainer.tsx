import { CSSProperties, ElementType, createElement } from 'react';
import styles from './LayoutContainer.module.scss';

interface ContainerProps {
  as?: ElementType;
  children?: React.ReactNode;
  style?: CSSProperties;
}

export function LayoutContainer({ as = 'div', ...props }: ContainerProps) {
  return createElement(as, {
    className: styles.container,
    ...props,
  });
}

export const Layout = {
  Container: LayoutContainer,
};
