import classNames from 'classnames';
import { replaceClassName } from '../../utils';
import { ItemCell, ItemCellProps } from './ItemCell';

interface ItemListProps<T extends ItemCellProps> {
  className?: string;
  classReplacer?: Record<string, string>;
  items: T[];
  itemRenderer?: (item: T, index: number) => React.ReactNode;
  style?: React.CSSProperties;
  onClick?: (id?: string) => void;
}

interface ItemListContainerProps {
  children?: React.ReactNode;
  className?: string;
  classReplacer?: Record<string, string>;
  style?: React.CSSProperties;
}

function ItemListContainer(props: ItemListContainerProps) {
  const { children, className, classReplacer, ...rest } = props;

  return (
    <ul
      className={replaceClassName(
        classNames('itemlist_container', className),
        classReplacer
      )}
      {...rest}
    >
      {children}
    </ul>
  );
}

export function ItemList<T extends ItemCellProps>(props: ItemListProps<T>) {
  const { items, itemRenderer, onClick, ...rest } = props;

  return (
    <ItemListContainer {...rest}>
      {items.map((item, index) => {
        if (itemRenderer) {
          return itemRenderer(item, index);
        }
        return <ItemCell key={item.id} onClick={onClick} {...item} />;
      })}
    </ItemListContainer>
  );
}

ItemList.Container = ItemListContainer;
