import { css } from 'styled-components';
import { dropdownToken } from './dropdown.token';
import { stateOverlayToken } from '../state-overlay';

export function getDropdownToken(disabled: boolean) {
  return css`
    ${({ theme }) => {
      const dropdown = dropdownToken(theme);
      const variant = disabled ? dropdown.disabled : dropdown.active;

      return css`
        background-color: ${variant.container};
        border-color: ${variant.outline};
        cursor: ${disabled ? 'auto' : 'pointer'};

        svg {
          fill: ${variant.elements};
        }
      `;
    }}
  `;
}

export function getDropdownCellToken(disabled: boolean, selected: boolean) {
  return css`
    ${({ theme }) => {
      const dropdown = dropdownToken(theme);
      const stateOverlay = stateOverlayToken(theme);

      if (disabled) {
        return css`
          background-color: ${dropdown.disabled.container};

          svg {
            fill: ${dropdown.disabled.elements};
          }
        `;
      }
      return css`
        cursor: pointer;
        background-color: ${selected
          ? stateOverlay.selected
          : dropdown.open.container};

        svg {
          fill: ${dropdown.open.elements};
        }
      `;
    }}
  `;
}
