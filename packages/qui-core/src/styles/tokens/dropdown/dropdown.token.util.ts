import { css } from 'styled-components';
import { dropdownToken } from './dropdown.token';
import { getStateOverlayToken, stateOverlayToken } from '../state-overlay';
import { itemListToken } from '../item-list';
import { getIconSize } from '../button';

export function getDropdownToken(
  isDisabled: boolean,
  hasSelectedItem: boolean
) {
  return css`
    ${({ theme }) => {
      const { disabled, selected, non_selected } = dropdownToken(theme);

      const variant = isDisabled
        ? disabled
        : hasSelectedItem
        ? selected
        : non_selected;

      return css`
        ${!isDisabled && getStateOverlayToken(8)}
        cursor: ${!isDisabled && 'pointer'};
        color: ${variant.elements};
        background-color: ${variant.container};
        border-color: ${variant.outline};
      `;
    }}
  `;
}

export function getDropdownItemToken(isDisabled: boolean, isSelected: boolean) {
  return css`
    ${({ theme }) => {
      const { disabled, active } = itemListToken(theme);
      const stateOverlay = stateOverlayToken(theme);

      return css`
        ${!isDisabled && getStateOverlayToken(0)}
        cursor: ${!isDisabled && 'pointer'};
        background-color: ${isDisabled
          ? disabled.container
          : isSelected
          ? stateOverlay.selected
          : active.container};

        &:focus {
          outline: none;
          box-shadow: 0 0 0 2px ${stateOverlay.focused} inset;
        }
      `;
    }}
  `;
}

export function getDropdownIconToken(
  isDisabled: boolean,
  hasSelectedItem: boolean
) {
  return css`
    ${({ theme }) => {
      const { disabled, selected, non_selected } = dropdownToken(theme);

      return css`
        ${getIconSize('md')}
        fill: ${isDisabled
          ? disabled.elements
          : hasSelectedItem
          ? selected.elements_var
          : non_selected.elements_var};
      `;
    }}
  `;
}

export function getDropdownItemIconToken(isDisabled: boolean) {
  return css`
    ${({ theme }) => {
      const { disabled, active } = itemListToken(theme);

      return css`
        ${getIconSize('md')}
        fill: ${isDisabled ? disabled.elements : active.elements};
      `;
    }}
  `;
}
