import classNames from 'classnames';
import { useState } from 'react';
import { replaceClassName } from '../../utils';
import { TabItem, TabItemProps } from './TabItem';

interface TabProps {
  className?: string;
  classReplacer?: Record<string, string>;
  items?: TabItemProps[];
  maxWidth?: number;
  scrollbarWidth?: React.CSSProperties['scrollbarWidth'];
  variant?: 'standard' | 'underline';
  onClick?: (item: TabItemProps) => void;
}

export function Tab(props: TabProps) {
  const {
    className,
    classReplacer,
    items = [],
    maxWidth,
    scrollbarWidth = 'none',
    variant = 'standard',
    onClick,
  } = props;

  const [selectedIndex, setIndex] = useState(
    items.length > 0 ? items.findIndex((item) => item.on) : 0
  );

  const handleTabItemClick = (item: TabItemProps, index: number) => {
    setIndex(index);
    onClick?.(item);
  };

  return (
    <div
      className={replaceClassName(
        classNames('tab_container', className),
        classReplacer
      )}
      style={{ maxWidth, scrollbarWidth }}
    >
      {items.map((item, index) => {
        const { on, ...rest } = item;
        return (
          <TabItem
            key={`tab_item_${index}`}
            on={selectedIndex === index}
            variant={variant}
            onClick={() => handleTabItemClick(item, index)}
            {...rest}
          />
        );
      })}
    </div>
  );
}
