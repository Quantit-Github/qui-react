import { css } from 'styled-components';
import { switchCommonToken } from './common.token';
import { checkboxToken } from './checkbox.token';
import { getStateOverlayToken } from '../state-overlay';
import { getIconSize } from '../button';

export function getCheckboxIconToken(disabled: boolean) {
  return css`
    ${({ theme }) => {
      const { checked } = checkboxToken(theme);
      const { disabled: disabledToken } = switchCommonToken(theme);
      const variant = disabled ? disabledToken : checked;

      return css`
        ${getIconSize('md')}
        fill: ${variant.icon};
      `;
    }}
  `;
}

export function getCheckboxFrameToken(
  disabled: boolean,
  selected: boolean,
  indeterminate: boolean
) {
  return css`
    ${({ theme }) => {
      const { unchecked, checked } = checkboxToken(theme);
      const { disabled: disabledToken } = switchCommonToken(theme);

      if (selected || indeterminate) {
        return css`
          background-color: ${disabled ? disabledToken.frame : checked.frame};
        `;
      }
      return css`
        border: 2px solid ${disabled ? disabledToken.outline : unchecked.frame};
      `;
    }}
  `;
}

export function getCheckboxToken(
  disabled: boolean,
  selected: boolean,
  indeterminate: boolean
) {
  return css`
    ${({ theme }) => {
      const { unchecked, checked } = checkboxToken(theme);
      const { disabled: disabledToken } = switchCommonToken(theme);

      const variant = disabled
        ? disabledToken
        : selected || indeterminate
        ? checked
        : unchecked;

      return css`
        color: ${variant.label};
        background-color: ${variant.container};
        cursor: ${!disabled && 'pointer'};
        ${!disabled && getStateOverlayToken(4)}
      `;
    }}
  `;
}
