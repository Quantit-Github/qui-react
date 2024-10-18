import classNames from 'classnames';
import React, { HTMLAttributes } from 'react';
import { replaceClassName } from '../../utils';
import { StateOverlay } from '../StateOverlay';

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
  value?: string | number;
  variant?: 'standard' | 'underline';
  /**
   * @default false
   * variant가 underline일 때 Gap 컴포넌트를 표시할지 여부
   */
  hasGap?: boolean;
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
  const {
    className,
    classReplacer,
    children,
    on,
    layout,
    variant = 'standard',
    hasGap = false,
    onClick,
    ...rest
  } = props;

  if (variant === 'underline') {
    return (
      <>
        {hasGap && (
          <div
            className={classNames('tab_undeline_item_container', 'gap')}
          ></div>
        )}
        <div
          className={replaceClassName(
            classNames(
              'tab_undeline_item_container',
              on ? '' : 'off',
              className
            ),
            classReplacer
          )}
          role="tab"
          onClick={onClick}
          {...rest}
        >
          {children || <TabItemLayout {...layout} />}
          <StateOverlay lightMode={on} />
        </div>
      </>
    );
  }

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
