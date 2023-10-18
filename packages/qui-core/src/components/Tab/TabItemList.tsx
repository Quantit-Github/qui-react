import styled from 'styled-components';
import {
  getTabDefaultStyle,
  getTabItemChecked,
  getTabItemDefaultStyle,
  getTabItemDisabled,
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
  ${getTabItemDisabled};
`;

export function TabItemList<T extends string>({
  list,
  selected,
  disabled = false,
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
          disabled={disabled}
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
