import classNames from 'classnames';
import { useState } from 'react';
import { Icon } from '../Icon';
import { ItemList } from '../Item';
import { Item } from '../Item/ItemList';
import { StateOverlay } from '../StateOverlay';
import { Typography } from '../Typography';

interface DropdownContainerProps {
  children: React.ReactNode;
  width?: number;
  style?: React.CSSProperties;
  onClick?: () => void;
}

interface DropdownIconProps {
  open?: boolean;
}

interface DropdownSelectionProps {
  children?: React.ReactNode;
  open?: boolean;
}

interface DropdownItemsProps {
  children?: React.ReactNode;
}

interface DropdownProps {
  disabled?: boolean;
  items: Item[];
  /**
   * Open 초기값
   */
  open?: boolean;
  placeholder?: string;
  width?: number;
  onClick?: (id?: string) => void;
}

function DropdownContainer(props: DropdownContainerProps) {
  const { children, style, width, ...rest } = props;
  return (
    <div
      className={classNames('dropdown_container')}
      style={{ width, ...style }}
      {...rest}
    >
      {children}
    </div>
  );
}

function DropdownIcon(props: DropdownIconProps) {
  const { open = false } = props;

  if (open) {
    return <Icon.Up />;
  }

  return <Icon.Down />;
}

function DropdownSelection(props: DropdownSelectionProps) {
  const { children, open } = props;

  return (
    <div className={classNames('dropdown_selection')}>
      <div>{children}</div>
      <DropdownIcon open={open} />
    </div>
  );
}

function DropdownItems(props: DropdownItemsProps) {
  return <div className="dropdown_items">{props.children}</div>;
}

export function Dropdown(props: DropdownProps) {
  const {
    disabled,
    items = [],
    open = false,
    placeholder,
    width,
    onClick,
  } = props;
  const [_open, setOpen] = useState<boolean>(open);
  const [selected, setSelected] = useState<Item | null>(
    items.find((item) => item.selected) || null
  );

  const handleOpen = () => {
    setOpen((prev) => !prev);
  };

  const handleItem = (id?: string) => {
    setSelected(items.find((item) => item.id === id) || null);
    onClick?.(id);
  };

  return (
    <DropdownContainer width={width} onClick={handleOpen}>
      <DropdownSelection open={_open}>
        {selected ? (
          selected.children
        ) : (
          <Typography
            variant="body-medium"
            style={{ color: 'rgba(16, 16, 20, 0.50)' }}
          >
            {placeholder}
          </Typography>
        )}
      </DropdownSelection>
      {_open && (
        <DropdownItems>
          <ItemList
            items={items}
            style={{ border: 'none', borderRadius: 8 }}
            onClick={handleItem}
          />
        </DropdownItems>
      )}
      {!disabled && <StateOverlay />}
    </DropdownContainer>
  );
}
