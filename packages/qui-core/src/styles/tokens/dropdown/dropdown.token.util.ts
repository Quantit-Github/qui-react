import { css } from 'styled-components';
import { dropdownToken } from './dropdown.token';
import { stateOverlayToken } from '../state-overlay';
import { itemListToken } from '../item-list';

export function getDropdownToken(
  isDisabled: boolean,
  hasSelectedItem: boolean
) {
  return css`
    ${({ theme }) => {
      const { disabled, selected, non_selected } = dropdownToken(theme);

      if (isDisabled) {
        return css`
          color: ${disabled.elements};
          background-color: ${disabled.container};
          border-color: ${disabled.outline};

          svg {
            fill: ${disabled.elements};
          }
        `;
      }

      const variant = hasSelectedItem ? selected : non_selected;
      return css`
        color: ${variant.elements};
        background-color: ${variant.container};
        border-color: ${variant.outline};
        cursor: pointer;

        svg {
          fill: ${variant.elements_var};
        }
      `;
    }}
  `;
}

export function getDropdownItemToken(isDisabled: boolean, isSelected: boolean) {
  return css`
    ${({ theme }) => {
      const itemList = itemListToken(theme);
      const stateOverlay = stateOverlayToken(theme);

      if (isDisabled) {
        return css`
          background-color: ${itemList.disabled.container};

          svg {
            fill: ${itemList.disabled.elements};
          }
        `;
      }

      return css`
        cursor: pointer;
        background-color: ${isSelected
          ? stateOverlay.selected
          : itemList.active.container};

        svg {
          fill: ${itemList.active.elements};
        }
      `;
    }}
  `;
}
