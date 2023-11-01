import styled from 'styled-components';
import { DropdownItemStyleProps, DropdownListProps } from './type';
import {
  getDropdownItemToken,
  getStateOverlayToken,
  getScrollbarToken,
  itemListToken,
} from '../../styles/tokens';
import { Typography } from '../Typography';
import { ChevronRightIcon } from '../../assets/icons';

const DropdownListStyle = styled.ul`
  position: absolute;
  box-sizing: border-box;
  list-style: none;
  padding: 4px 0px;
  margin: 2px 0 0 0;
  border-radius: 4px;

  display: none;
  border: 1px solid ${({ theme }) => itemListToken(theme).active.outline};
  background-color: ${({ theme }) => itemListToken(theme).active.container};

  ${getScrollbarToken(188)}
`;

const DropdownItemStyle = styled.button<DropdownItemStyleProps>`
  display: flex;
  gap: 8px;
  height: 40px;
  min-width: 120px;
  width: 100%;
  padding: 0px 12px;
  align-items: center;
  border: none;
  border-radius: 0px;

  ${({ disabled }) => !disabled && getStateOverlayToken(0)}
  ${({ disabled = false, selected }) =>
    getDropdownItemToken(disabled, selected)}

  span {
    flex-grow: 2;
    text-align: left;
  }
`;

export const DropdownList = <T extends unknown>({
  list,
  selectedIndex,
  onItemClick,
}: DropdownListProps<T>) => {
  return (
    <DropdownListStyle>
      {list.map(({ label, value, disabled, prefix, hasSuffix }, index) => (
        <li key={index}>
          <DropdownItemStyle
            onClick={() => onItemClick(value, index)}
            disabled={disabled}
            selected={selectedIndex === index}
          >
            {prefix}
            <Typography variant="bodyMedium">{label}</Typography>
            {hasSuffix && <ChevronRightIcon />}
          </DropdownItemStyle>
        </li>
      ))}
    </DropdownListStyle>
  );
};
