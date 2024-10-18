import classNames from 'classnames';
import { useState } from 'react';
import { replaceClassName } from '../../utils';
import { TabItem, TabItemProps } from './TabItem';

interface TabProps<T extends TabItemProps> {
  className?: string;
  classReplacer?: Record<string, string>;
  items?: T[];
  maxWidth?: number;
  scrollbarWidth?: React.CSSProperties['scrollbarWidth'];
  variant?: 'standard' | 'underline';
  itemRenderer?: (item: T, index: number) => React.ReactNode;
  onClick?: (item: TabItemProps) => void;
}

export function Tab<T extends TabItemProps>(props: TabProps<T>) {
  const {
    className,
    classReplacer,
    items = [],
    maxWidth,
    scrollbarWidth = 'none',
    variant = 'standard',
    itemRenderer,
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
        classNames(
          'tab_container',
          variant === 'underline' ? 'underline' : '',
          className
        ),
        classReplacer
      )}
      style={{
        maxWidth,
        scrollbarWidth,
      }}
    >
      {items.map((item, index) => {
        if (itemRenderer) {
          return itemRenderer(item, index);
        }
        return (
          <TabItem
            {...item}
            key={`tab_item_${index}`}
            on={selectedIndex === index}
            variant={variant}
            onClick={() => handleTabItemClick(item, index)}
          />
        );
      })}
    </div>
  );
}
