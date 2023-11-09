import { useState } from 'react';
import { TabItemList } from './TabItemList';
import { TabProps } from './type';

export function Tab<T extends string>({
  list,
  size,
  selected,
  onClickItem,
}: TabProps<T>) {
  const [selectedIndex, setSelectedIndex] = useState(selected);
  const handleClickItem = (value: T) => () => {
    const index = list.findIndex((item) => item.value === value);
    setSelectedIndex(index);
    onClickItem(value)();
  };

  return (
    <TabItemList
      list={list}
      size={size}
      onClickItem={handleClickItem}
      selected={selectedIndex}
    />
  );
}
