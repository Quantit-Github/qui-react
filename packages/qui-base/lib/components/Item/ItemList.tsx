import classNames from 'classnames';
import { forwardRef, useEffect, useImperativeHandle, useRef } from 'react';
import { replaceClassName } from '../../utils';
import { ItemCell, ItemCellProps } from './ItemCell';

interface ItemListProps<T extends ItemCellProps> {
  className?: string;
  classReplacer?: Record<string, string>;
  items: T[];
  style?: React.CSSProperties;
  itemRenderer?: (item: T, index: number) => React.ReactNode;
  onClick?: (id?: string) => void;
  onClickOutside?: () => void;
}

interface ItemListContainerProps {
  children?: React.ReactNode;
  className?: string;
  classReplacer?: Record<string, string>;
  style?: React.CSSProperties;
}

export const ItemListContainer = forwardRef<
  HTMLUListElement,
  ItemListContainerProps
>((props: ItemListContainerProps, ref) => {
  const { children, className, classReplacer, ...rest } = props;

  return (
    <ul
      ref={ref}
      className={replaceClassName(
        classNames('itemlist_container', className),
        classReplacer
      )}
      {...rest}
    >
      {children}
    </ul>
  );
});

const ItemListComponent = <T extends ItemCellProps>(
  props: ItemListProps<T>,
  ref: React.Ref<HTMLUListElement>
) => {
  const { items, itemRenderer, onClick, onClickOutside, ...rest } = props;

  const itemListRef = useRef<HTMLUListElement>(null);

  useImperativeHandle(ref, () => itemListRef.current as HTMLUListElement);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        itemListRef.current &&
        !itemListRef.current.contains(event.target as Node)
      ) {
        onClickOutside?.();
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <ItemListContainer ref={itemListRef} {...rest}>
      {items.map((item, index) => {
        if (itemRenderer) {
          return itemRenderer(item, index);
        }
        return <ItemCell key={item.id} onClick={onClick} {...item} />;
      })}
    </ItemListContainer>
  );
};

const ForwardedItemList = forwardRef(ItemListComponent) as <
  T extends ItemCellProps
>(
  props: ItemListProps<T> & { ref?: React.Ref<HTMLUListElement> }
) => React.ReactElement;

(ForwardedItemList as any).Container = ItemListContainer;

export const ItemList = ForwardedItemList;
