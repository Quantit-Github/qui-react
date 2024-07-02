import classNames from 'classnames';
import React, { HTMLAttributes } from 'react';
import { StateOverlay } from '../StateOverlay';
import { replaceClassName } from '../../utils';

interface TabItemLayoutProps {
  className?: string;
  classReplacer?: Record<string, string>;
  leading?: React.ReactNode;
  main?: React.ReactNode;
  style?: React.CSSProperties;
}

export interface TabItemProps {
  className?: string;
  classReplacer?: Record<string, string>;
  children?: React.ReactNode;
  on?: boolean;
  layout?: TabItemLayoutProps;
  onClick?: HTMLAttributes<HTMLDivElement>['onClick'];
}

function TabItemLayout(props: TabItemLayoutProps) {
  const { className, classReplacer, leading, main, style } = props;
  return (
    <div
      className={replaceClassName(
        classNames('tab_item_layout', className),
        classReplacer
      )}
      style={style}
    >
      {leading}
      {main}
    </div>
  );
}

export function TabItem(props: TabItemProps) {
  const { className, classReplacer, children, on, layout, onClick, ...rest } =
    props;

  return (
    <div
      className={replaceClassName(
        classNames('tab_item_container', on ? '' : 'off', className),
        classReplacer
      )}
      role="tab"
      onClick={onClick}
      {...rest}
    >
      {children || <TabItemLayout {...layout} />}
      <StateOverlay lightMode={on} />
    </div>
  );
}
