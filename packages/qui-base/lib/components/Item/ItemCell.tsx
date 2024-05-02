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
  style?: React.CSSProperties;
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
  // TODO: children이 아닌 render 함수 넘기는 형식으로 변경 (IOC)
  children?: React.ReactNode;
  className?: string;
  classReplacer?: Record<string, string>;
  disabled?: boolean;
  fitContent?: boolean;
  id?: string;
  layout?: ItemCellLayoutProps;
  selected?: boolean;
  /**
   * 상태 오버레이를 표시할지 여부
   * @default true
   */
  stateOverlay?: boolean;
  style?: React.CSSProperties;
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
    ...rest
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
      {...rest}
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
  stateOverlay = true,
  onClick,
  ...rest
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
      {...rest}
    >
      {children || <ItemCellLayout {...layout} />}
      {stateOverlay && !disabled && <StateOverlay />}
    </ItemCellContainer>
  );
}

ItemCell.Container = ItemCellContainer;
ItemCell.Layout = ItemCellLayout;
