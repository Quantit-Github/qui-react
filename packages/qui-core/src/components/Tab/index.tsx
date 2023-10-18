import { useState } from 'react';
import { TabItemList } from './TabItemList';
import { TabProps } from './type';

export function Tab<T extends string>({ list, size, disabled }: TabProps<T>) {
  const [selectedValue, setSelectedValue] = useState(list[0].value);
  const handleClickItem = (value: T) => () => {
    setSelectedValue(value);
  };

  return (
    <TabItemList
      list={list}
      size={size}
      onClickItem={handleClickItem}
      disabled={disabled}
      selected={selectedValue}
    />
  );
}
