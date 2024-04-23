import classNames from 'classnames';
import React from 'react';
import { StateOverlay } from '..';
import { replaceClassName } from '../../utils';

interface ItemCellContainerProps {
  children?: React.ReactNode;
  className?: string;
  classReplacer?: Record<string, string>;
  disabled?: boolean;
  fitContent?: boolean;
  selected?: boolean;
  onClick?: () => void;
}

interface ItemCellLayoutProps {
  type?: 'hug' | 'fill';
  leading?: React.ReactNode;
  main?: React.ReactNode;
  trailing?: React.ReactNode;
  className?: string;
  classReplacer?: Record<string, string>;
}

export interface ItemCellProps {
  children?: React.ReactNode;
  className?: string;
  classReplacer?: Record<string, string>;
  disabled?: boolean;
  fitContent?: boolean;
  id?: string;
  layout?: ItemCellLayoutProps;
  selected?: boolean;
  onClick?: (id?: string) => void;
}

function ItemCellContainer(props: ItemCellContainerProps) {
  const {
    className,
    classReplacer,
    children,
    disabled,
    fitContent,
    selected,
    onClick,
  } = props;
  const handleClick = () => {
    onClick?.();
  };

  return (
    <li
      className={replaceClassName(
        classNames(
          'item_cell_container',
          fitContent ? 'fit_content' : '',
          selected ? 'selected' : '',
          disabled ? 'disabled' : '',
          className
        ),
        classReplacer
      )}
      aria-disabled={disabled}
      role="button"
      onClick={handleClick}
    >
      {children}
    </li>
  );
}

function ItemCellLayout({
  className,
  classReplacer,
  type,
  leading,
  main,
  trailing,
  ...props
}: ItemCellLayoutProps) {
  return (
    <div
      className={replaceClassName(
        classNames('item_cell_layout', type, className),
        classReplacer
      )}
      {...props}
    >
      {leading}
      {main}
      {trailing}
    </div>
  );
}

export function ItemCell({
  id,
  children,
  className,
  classReplacer,
  disabled,
  fitContent,
  layout,
  selected,
  onClick,
}: ItemCellProps) {
  const handleClick = () => {
    if (!disabled) {
      onClick?.(id);
    }
  };

  return (
    <ItemCellContainer
      className={className}
      classReplacer={classReplacer}
      disabled={disabled}
      fitContent={fitContent}
      selected={selected}
      onClick={handleClick}
    >
      {children || <ItemCellLayout {...layout} />}
      {!disabled && <StateOverlay />}
    </ItemCellContainer>
  );
}

ItemCell.Container = ItemCellContainer;
ItemCell.Layout = ItemCellLayout;
