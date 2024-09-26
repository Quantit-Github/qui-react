import classNames from 'classnames';
import { forwardRef, useEffect, useRef, useState } from 'react';
import { Icon } from '../Icon';
import { Item, ItemList } from '../Item';
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

type DropdownSize = 'md' | 'sm';

interface DropdownSelectionProps {
  children?: React.ReactNode;
  iconColor?: string;
  open?: boolean;
  selected?: boolean;
  size?: DropdownSize;
}

interface DropdownItemsProps {
  children?: React.ReactNode;
  className?: string;
  fitContent?: boolean;
  width?: number;
  style?: React.CSSProperties;
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
  itemsClassName?: string;
  itemsFitContent?: boolean;
  itemsWidth?: number;
  itemsStyle?: React.CSSProperties;
  itemsScrollbarWidth?: 'auto' | 'thin' | 'none';
  /**
   * 드롭다운 아이템 클릭 시 드롭다운 닫기 여부
   * @default true
   */
  itemsCloseOnClickOutside?: boolean;
  /**
   * Open 초기값
   */
  open?: boolean;
  placeholder?: React.ReactNode;
  size?: DropdownSize;
  selectedItemRenderer?: (
    selectedItem: Item | null,
    status: {
      opened: boolean;
    },
    onClick?: () => void
  ) => React.ReactNode;
  width?: number;
  onClick?: (id?: string) => void;
}

interface DropdownSelectionTagProps {
  children: React.ReactNode;
  onClick?: () => void;
}

interface MultiDropdownProps
  extends Omit<DropdownProps, 'selectedItemRenderer'> {
  selectionRenderer?: (
    selectedItem: Item,
    onClick?: () => void
  ) => React.ReactNode;
  onRemove?: (id?: string) => void;
}

const DropdownContainer = forwardRef<HTMLDivElement, DropdownContainerProps>(
  (props, ref) => {
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
        ref={ref}
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
);

function DropdownItems(props: DropdownItemsProps) {
  const { children, className, fitContent, width, style } = props;
  return (
    <div
      className={classNames(
        'dropdown_items',
        fitContent ? 'fit_content' : '',
        className
      )}
      style={{ ...style, width }}
    >
      {children}
    </div>
  );
}

function DropdownPlaceholder(props: { children: React.ReactNode }) {
  return (
    <Typography
      variant="body-medium"
      style={{ color: 'var(--black-alpha-50)' }}
    >
      {props.children}
    </Typography>
  );
}

function DropdownSelection(props: DropdownSelectionProps) {
  const {
    children,
    iconColor,
    open = false,
    selected = false,
    size = 'md',
  } = props;
  let IconComponent = Icon.Down;

  if (open) {
    IconComponent = Icon.Up;
  }

  return (
    <div
      className={classNames(
        'dropdown_selection',
        selected ? 'selected' : '',
        size || ''
      )}
    >
      <div className={classNames('dropdown_selection_content')}>{children}</div>
      <IconComponent size={size} style={{ fill: iconColor }} />
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
    itemsClassName,
    itemsFitContent,
    itemsWidth,
    itemsStyle,
    itemsScrollbarWidth = 'none',
    itemsCloseOnClickOutside = true,
    open = false,
    placeholder,
    size,
    width,
    selectedItemRenderer,
    onClick,
    ...rest
  } = props;
  const [_open, setOpen] = useState<boolean>(open);
  const ref = useRef<HTMLDivElement>(null);
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

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        if (itemsCloseOnClickOutside) {
          setOpen(false);
        }
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <DropdownContainer
      ref={ref}
      border={border}
      fitContent={fitContent}
      width={width}
      onClick={handleOpen}
      {...rest}
    >
      {selectedItemRenderer ? (
        selectedItemRenderer(selected, { opened: _open }, handleOpen)
      ) : (
        <DropdownSelection
          iconColor={iconColor}
          open={_open}
          selected={!!selected}
          size={size}
        >
          {selected ? selected.children : placeholder}
        </DropdownSelection>
      )}

      {_open && (
        <DropdownItems
          className={itemsClassName}
          fitContent={itemsFitContent}
          width={itemsWidth}
          style={itemsStyle}
        >
          <ItemList
            items={items}
            style={{
              border: 'none',
              borderRadius: 8,
              scrollbarWidth: itemsScrollbarWidth,
            }}
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
    itemsClassName,
    itemsFitContent,
    itemsWidth,
    itemsStyle,
    itemsScrollbarWidth = 'none',
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
        <DropdownItems
          className={itemsClassName}
          fitContent={itemsFitContent}
          width={itemsWidth}
          style={itemsStyle}
        >
          <ItemList
            items={_items}
            style={{
              border: 'none',
              borderRadius: 8,
              scrollbarWidth: itemsScrollbarWidth,
            }}
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
