import styled, { css } from 'styled-components';
import { useState } from 'react';
import { Typography } from '../Typography';
import {
  DropdownButtonStyleProps,
  DropdownProps,
  DropdownStyleProps,
} from './type';
import { DropdownList } from './DropdownList';
import { getDropdownIconToken, getDropdownToken } from '../../styles/tokens';
import { Icon } from '../Button';

const DropdownStyle = styled.div<DropdownStyleProps>`
  ${({ open }) =>
    open &&
    css`
      border-radius: 8px;
      box-shadow: 0px 0px 8px 0px rgba(74, 74, 74, 0.12);

      ul {
        box-shadow: 0px 0px 8px 0px rgba(74, 74, 74, 0.12);
        display: block;
      }
    `};
`;

const DropdownButtonStyle = styled.button<DropdownButtonStyleProps>`
  box-sizing: border-box;
  display: flex;
  padding: 8px;
  gap: 8px;
  align-items: center;
  justify-content: space-between;
  border-radius: 8px;

  padding-left: ${({ size }) => (size === 'md' ? '12px' : '16px')};
  height: ${({ size }) => (size === 'md' ? '40px' : '56px')};
  width: ${({ $width }) => $width}px;

  ${({ disabled, $hasSelectedItem }) =>
    getDropdownToken(disabled, $hasSelectedItem)}

  span {
    width: ${({ $width }) => $width - 52}px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    text-align: left;
  }
`;

const DropdownIconStyle = styled(Icon)<
  Pick<DropdownButtonStyleProps, 'disabled' | '$hasSelectedItem'>
>`
  ${({ disabled, $hasSelectedItem }) =>
    getDropdownIconToken(disabled, $hasSelectedItem)}
`;

export const Dropdown = <T extends unknown>({
  list,
  onChangeSelected,
  disabled = false,
  width = 126,
  size = 'md',
  placeholder,
}: DropdownProps<T>) => {
  const [open, setOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState<number | undefined>(
    undefined
  );

  const onItemClick = (value: T, index: number) => {
    setSelectedIndex(index);
    onChangeSelected(value);
    setOpen(!open);
  };

  return (
    <DropdownStyle open={open}>
      <DropdownButtonStyle
        onClick={() => setOpen(!open)}
        disabled={disabled}
        $width={width}
        size={size}
        $hasSelectedItem={selectedIndex !== undefined}
      >
        <Typography variant={size === 'md' ? 'bodyMedium' : 'bodyLarge'}>
          {selectedIndex === undefined
            ? placeholder
            : list[selectedIndex].label}
        </Typography>
        <DropdownIconStyle
          type={open ? 'chevron_up' : 'chevron_down'}
          disabled={disabled}
          $hasSelectedItem={selectedIndex !== undefined}
        />
      </DropdownButtonStyle>
      <DropdownList
        list={list}
        selectedIndex={selectedIndex}
        onItemClick={onItemClick}
      />
    </DropdownStyle>
  );
};
