import classNames from 'classnames';
import { replaceClassName } from '../../utils';
import { ItemCell, ItemCellProps } from './ItemCell';

interface Item extends ItemCellProps {}

interface ItemListProps {
  className?: string;
  classReplacer?: Record<string, string>;
  items: Item[];
  onClick?: (id?: string) => void;
}

interface ItemListContainerProps {
  children?: React.ReactNode;
  className?: string;
  classReplacer?: Record<string, string>;
}

function ItemListContainer(props: ItemListContainerProps) {
  const { children, className, classReplacer } = props;

  return (
    <ul
      className={replaceClassName(
        classNames('itemlist_container', className),
        classReplacer
      )}
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
