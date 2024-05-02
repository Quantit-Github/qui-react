import classNames from 'classnames';
import { useState } from 'react';
import { Icon } from '../Icon';
import { ItemList } from '../Item';
import { Item } from '../Item/ItemList';
import { StateOverlay } from '../StateOverlay';
import { Typography } from '../Typography';

interface DropdownContainerProps {
  border?: boolean;
  className?: string;
  children: React.ReactNode;
  fitContent?: boolean;
  width?: number;
  style?: React.CSSProperties;
  onClick?: () => void;
}

interface DropdownSelectionProps {
  children?: React.ReactNode;
  iconColor?: string;
  open?: boolean;
}

interface DropdownItemsProps {
  children?: React.ReactNode;
  fitContent?: boolean;
  width?: number;
}

interface DropdownProps {
  /**
   * 테두리 여부
   * @default true
   */
  border?: boolean;
  disabled?: boolean;
  fitContent?: boolean;
  iconColor?: string;
  items: Item[];
  itemFitContent?: boolean;
  itemWidth?: number;
  /**
   * Open 초기값
   */
  open?: boolean;
  placeholder?: React.ReactNode;
  selectionRenderer?: (
    selectedList: Item,
    onClick?: () => void
  ) => React.ReactNode;
  width?: number;
  onClick?: (id?: string) => void;
}

interface DropdownSelectionTagProps {
  children: React.ReactNode;
  onClick?: () => void;
}

interface MultiDropdownProps extends DropdownProps {
  onRemove?: (id?: string) => void;
}

function DropdownContainer(props: DropdownContainerProps) {
  const {
    border = true,
    children,
    className,
    fitContent,
    style,
    width,
    ...rest
  } = props;
  return (
    <div
      className={classNames(
        'dropdown_container',
        border ? 'border' : '',
        fitContent ? 'fit_content' : '',
        className
      )}
      style={{ width, ...style }}
      {...rest}
    >
      {children}
    </div>
  );
}

function DropdownItems(props: DropdownItemsProps) {
  const { children, fitContent, width } = props;
  return (
    <div
      className={classNames('dropdown_items', fitContent ? 'fit_content' : '')}
      style={{ width }}
    >
      {children}
    </div>
  );
}

function DropdownPlaceholder(props: { children: React.ReactNode }) {
  return (
    <Typography
      variant="body-medium"
      style={{ color: 'rgba(16, 16, 20, 0.50)' }}
    >
      {props.children}
    </Typography>
  );
}

function DropdownSelection(props: DropdownSelectionProps) {
  const { children, iconColor = 'rgba(16, 16, 20, 0.5)', open = false } = props;
  let IconComponent = Icon.Down;

  if (open) {
    IconComponent = Icon.Up;
  }

  return (
    <div className={classNames('dropdown_selection')}>
      <div className="dropdown_selection_content">{children}</div>
      <IconComponent size="md" style={{ fill: iconColor }} />
    </div>
  );
}

export function Dropdown(props: DropdownProps) {
  const {
    border = true,
    disabled,
    fitContent,
    iconColor,
    items = [],
    itemFitContent,
    itemWidth,
    open = false,
    placeholder,
    width,
    onClick,
    ...rest
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
    <DropdownContainer
      border={border}
      fitContent={fitContent}
      width={width}
      onClick={handleOpen}
      {...rest}
    >
      <DropdownSelection iconColor={iconColor} open={_open}>
        {selected ? selected.children : placeholder}
      </DropdownSelection>
      {_open && (
        <DropdownItems fitContent={itemFitContent} width={itemWidth}>
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

function DropdownSelectionTag(props: DropdownSelectionTagProps) {
  const handleBlock = (e: any) => {
    e.stopPropagation();
  };

  return (
    <div className="dropdown_item_tag" onClick={handleBlock}>
      <Typography variant="body-small">{props.children}</Typography>

      <div
        className="dropdown_item_tag_chip"
        role="button"
        onClick={props.onClick}
      >
        <Icon.Close size="xs" />
      </div>
    </div>
  );
}

export function MultiSelectionDropdown(props: MultiDropdownProps) {
  const {
    border = true,
    disabled,
    items = [],
    itemFitContent,
    itemWidth,
    open = false,
    placeholder,
    width,
    selectionRenderer,
    onClick,
    onRemove,
    ...rest
  } = props;
  const [_open, setOpen] = useState<boolean>(open);
  const [selectedList, setSelectedList] = useState<Item[] | null>(
    items.filter((item) => item.selected) || null
  );

  const idSet = new Set(selectedList?.map((item) => item.id) || []);
  const _items = items.map((item) => ({
    ...item,
    selected: idSet.has(item.id),
  }));

  const handleOpen = () => {
    setOpen((prev) => !prev);
  };

  const handleItem = (id?: string) => {
    const item = items.find((item) => item.id === id);
    if (!item) return;
    setSelectedList((prev) => {
      if (!prev) return [item];
      if (idSet.has(id)) {
        return prev.filter((item) => item.id !== id);
      }
      return prev.concat(item);
    });
    onClick?.(id);
  };

  const handleRemove = (id?: string) => {
    setSelectedList((prev) => {
      if (!prev) return null;
      return prev.filter((item) => item.id !== id);
    });
    onRemove?.(id);
  };

  return (
    <DropdownContainer
      border={border}
      width={width}
      onClick={handleOpen}
      {...rest}
    >
      <DropdownSelection open={_open}>
        {selectedList && selectedList.length > 0
          ? selectedList.map((item) => {
              if (props.selectionRenderer) {
                return props.selectionRenderer(item, () =>
                  handleRemove(item.id)
                );
              }
              return (
                <Dropdown.SelectionTag onClick={() => handleRemove(item.id)}>
                  {item.children}
                </Dropdown.SelectionTag>
              );
            })
          : placeholder}
      </DropdownSelection>
      {_open && (
        <DropdownItems fitContent={itemFitContent} width={itemWidth}>
          <ItemList
            items={_items}
            style={{ border: 'none', borderRadius: 8 }}
            onClick={handleItem}
          />
        </DropdownItems>
      )}
      {!disabled && <StateOverlay />}
    </DropdownContainer>
  );
}

Dropdown.Container = DropdownContainer;
Dropdown.Items = DropdownItems;
Dropdown.Placeholder = DropdownPlaceholder;
Dropdown.Selection = DropdownSelection;
Dropdown.SelectionTag = DropdownSelectionTag;
Dropdown.MultiSelection = MultiSelectionDropdown;
