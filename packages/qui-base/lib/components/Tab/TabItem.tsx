import classNames from 'classnames';
import React, { HTMLAttributes } from 'react';
import { StateOverlay } from '../StateOverlay';

interface TabItemLayoutProps {
  leading?: React.ReactNode;
  main?: React.ReactNode;
}

interface TabItemProps {
  children?: React.ReactNode;
  on?: boolean;
  layout?: TabItemLayoutProps;
  onClick?: HTMLAttributes<HTMLButtonElement>['onClick'];
}

function TabItemLayout(props: TabItemLayoutProps) {
  return (
    <div className="tab_item_layout">
      {props.leading}
      {props.main}
    </div>
  );
}

export function TabItem(props: TabItemProps) {
  const { children, on, layout, onClick, ...rest } = props;

  return (
    <button
      className={classNames('tab_item_container', on ? '' : 'off')}
      role="tab"
      onClick={onClick}
      {...rest}
    >
      {children || <TabItemLayout {...layout} />}
      <StateOverlay lightMode={on} />
    </button>
  );
}
