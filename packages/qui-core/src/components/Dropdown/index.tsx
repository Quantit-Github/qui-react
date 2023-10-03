import styled, { css } from 'styled-components';
import { useState } from 'react';
import { Typography } from '../Typography';
import {
  DropdownContainerStyleProps,
  DropdownProps,
  DropdownStyleProps,
} from './type';
import { DropdownList } from './DropdownList';
import { getStateOverlayToken } from '../../styles/tokens';
import { getDropdownToken } from '../../styles/tokens/dropdown';
import ChevronUpIcon from './ChevronUpIcon';
import ChevronDownIcon from './ChevronDownIcon';

const DropdownStyle = styled.div<DropdownStyleProps>`
  ${({ open }) =>
    open &&
    css`
      border-radius: 8px;
      box-shadow: 0px 0px 8px 0px rgba(74, 74, 74, 0.12);

      ul {
        box-shadow: 0px 0px 8px 0px rgba(74, 74, 74, 0.12);
      }
    `};
`;

const DropdownContainerStyle = styled.button<DropdownContainerStyleProps>`
  box-sizing: border-box;
  border-width: 1px;
  border-style: solid;
  display: flex;
  padding: 0px 12px;
  align-items: center;
  justify-content: space-between;
  border-radius: 8px;

  height: ${({ size }) => (size === 'lg' ? '56px' : '32px')};
  width: ${({ $width }) => $width}px;

  ${({ disabled }) => !disabled && getStateOverlayToken(8)}
  ${({ disabled = false }) => getDropdownToken(disabled)}

  span {
    width: ${({ $width }) => ($width ?? 120) - 50}px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    text-align: left;
  }
`;

export const Dropdown = <T extends unknown>({
  list,
  selected,
  onChangeSelected,
  disabled = false,
  width = 126,
  size = 'md',
  placeholder = '',
}: DropdownProps<T>) => {
  const [openState, setOpenState] = useState(false);
  const [selectedState, setSelectedState] = useState<T>(selected);

  const onCellClick = (value: T) => {
    setSelectedState(value);
    onChangeSelected(value);
    setOpenState(!openState);
  };

  const selectedLabel = (placeholder: string, value?: T): string => {
    if (!value) return placeholder;
    const item = list.find((item) => item.value === value);
    return item?.label ?? placeholder;
  };

  return (
    <DropdownStyle open={openState}>
      <DropdownContainerStyle
        onClick={() => setOpenState(!openState)}
        disabled={disabled}
        $width={width}
        size={size}
      >
        <Typography variant="body" size="lg">
          {selectedLabel(placeholder, selectedState)}
        </Typography>
        {openState ? <ChevronUpIcon /> : <ChevronDownIcon />}
      </DropdownContainerStyle>
      <DropdownList
        list={list}
        open={openState}
        selected={selectedState}
        onCellClick={onCellClick}
      />
    </DropdownStyle>
  );
};
