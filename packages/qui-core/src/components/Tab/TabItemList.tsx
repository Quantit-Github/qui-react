import styled from 'styled-components';
import {
  getTabDefaultStyle,
  getTabDividerStyle,
  getTabItemChecked,
  getTabItemDefaultStyle,
} from '../../styles/tokens';
import { Typography } from '../Typography';
import {
  TabDividerStyleProps,
  TabItemStyleProps,
  TabListStyleProps,
  TabProps,
} from './type';
import { Divider } from '../Divider';
import { Fragment } from 'react';

const TabList = styled.ul<TabListStyleProps>`
  ${getTabDefaultStyle}
`;

const TabItem = styled.li<TabItemStyleProps>`
  ${getTabItemDefaultStyle}
  ${getTabItemChecked};
`;

const TabItemLabel = styled(Typography)`
  padding: 0 12px;
`;

const TabDivider = styled(Divider)<TabDividerStyleProps>`
  ${getTabDividerStyle}
`;

export function TabItemList<T extends string>({
  list,
  selected,
  size = 'sm',
  onClickItem,
}: TabProps<T>) {
  return (
    <TabList $size={size}>
      {list.map(({ label, value }, index) => (
        <Fragment key={index}>
          {index > 0 && (
            <li>
              <TabDivider
                direction="vertical"
                hierarchy="low"
                $index={index}
                selected={selected}
              />
            </li>
          )}
          <TabItem onClick={onClickItem(value)} checked={selected === index}>
            <TabItemLabel
              variant={size === 'md' ? 'bodyMedium' : 'bodySmall'}
              bold={size === 'sm'}
            >
              {label}
            </TabItemLabel>
          </TabItem>
        </Fragment>
      ))}
    </TabList>
  );
}
