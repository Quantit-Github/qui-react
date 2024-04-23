import classNames from 'classnames';
import { replaceClassName } from '../../utils';
import { ItemCell, ItemCellProps } from './ItemCell';

export interface Item extends ItemCellProps {}

interface ItemListProps {
  className?: string;
  classReplacer?: Record<string, string>;
  items: Item[];
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

export function ItemList(props: ItemListProps) {
  const { items, onClick, ...rest } = props;

  return (
    <ItemListContainer {...rest}>
      {items.map((item) => (
        <ItemCell key={item.id} onClick={onClick} {...item} />
      ))}
    </ItemListContainer>
  );
}

ItemList.Container = ItemListContainer;
