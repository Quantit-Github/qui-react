import styled from 'styled-components';
import {
  dropdownToken,
  getDropdownCellToken,
} from '../../styles/tokens/dropdown';
import {
  DropdownCellStyleProps,
  DropdownListProps,
  DropdownStyleProps,
} from './type';
import { getStateOverlayToken } from '../../styles/tokens';
import { Typography } from '../Typography';
import ChevronRightIcon from './ChevronRightIcon';
import { scrollbarToken } from '../../styles/tokens/scrollbar';

const DropdownListStyle = styled.ul<DropdownStyleProps>`
  position: absolute;
  box-sizing: border-box;
  list-style: none;
  overflow-y: scroll;
  padding: 4px 0px;
  margin: 2px 0 0 0;
  max-height: 188px;
  border-radius: 4px;

  display: ${({ open }) => (open ? 'block' : 'none')};
  border: 1px solid ${({ theme }) => dropdownToken(theme).open.outline};
  background-color: ${({ theme }) => dropdownToken(theme).open.container};

  &::-webkit-scrollbar {
    width: 4px;
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    -webkit-border-radius: 9999px;
    border-radius: 9999px;
    background: ${({ theme }) => scrollbarToken(theme).container};
  }

  &::-webkit-scrollbar-button:vertical:start:decrement,
  &::-webkit-scrollbar-button:vertical:start:increment,
  &::-webkit-scrollbar-button:vertical:end:decrement,
  &::-webkit-scrollbar-button:vertical:end:increment {
    display: block;
    height: 2px;
  }
`;

const DropdownCellStyle = styled.button<DropdownCellStyleProps>`
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
    getDropdownCellToken(disabled, selected)}

  span {
    flex-grow: 2;
    text-align: left;
  }
`;

export const DropdownList = <T extends unknown>({
  list,
  open,
  selected,
  onCellClick,
}: DropdownListProps<T>) => {
  return (
    <DropdownListStyle open={open}>
      {list.map(({ label, value, disabled, prefix, hasSuffix }) => (
        <li key={`${value}-${label}`}>
          <DropdownCellStyle
            onClick={() => onCellClick(value)}
            disabled={disabled}
            selected={selected === value}
          >
            {prefix}
            <Typography variant="body" size="lg">
              {label}
            </Typography>
            {hasSuffix && <ChevronRightIcon />}
          </DropdownCellStyle>
        </li>
      ))}
    </DropdownListStyle>
  );
};
