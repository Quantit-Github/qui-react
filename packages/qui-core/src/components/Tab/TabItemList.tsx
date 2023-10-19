import styled from 'styled-components';
import {
  getTabDefaultStyle,
  getTabItemChecked,
  getTabItemDefaultStyle,
  getTabItemHeight,
} from '../../styles/tokens/tab/tab.token.util';
import { Typography } from '../Typography';
import { TabItemStyleProps, TabProps } from './type';

const TabList = styled.ul`
  ${getTabDefaultStyle}
`;

const TabItem = styled.li<TabItemStyleProps>`
  ${getTabItemDefaultStyle}
  ${getTabItemChecked};
  ${getTabItemHeight};
  ${getTabItemChecked};
`;

export function TabItemList<T extends string>({
  list,
  selected,
  size = 'sm',
  onClickItem,
}: TabProps<T>) {
  return (
    <TabList>
      {list.map((item, index) => (
        <TabItem
          key={item.value}
          $size={size}
          onClick={onClickItem(item.value)}
          checked={selected === item.value}
          className={selected === item.value ? 'active' : ''}
        >
          <Typography
            variant={size === 'md' ? 'bodyMedium' : 'bodySmall'}
            bold={size === 'sm'}
          >
            {item.label}
          </Typography>
        </TabItem>
      ))}
    </TabList>
  );
}
