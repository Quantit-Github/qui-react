import { css } from 'styled-components';
import { switchCommonToken } from './common.token';
import { checkboxToken } from './checkbox.token';

export function getCheckboxFrameToken(
  disabled: boolean,
  selected: boolean,
  indeterminate: boolean
) {
  return css`
    ${({ theme }) => {
      const { unchecked, checked } = checkboxToken(theme);
      const { disabled: disabledToken } = switchCommonToken(theme);

      const backgroundColor = disabled ? disabledToken.frame : checked.frame;
      const iconColor = disabled ? disabledToken.icon : checked.icon;
      const borderColor = disabled ? disabledToken.outline : unchecked.frame;

      if (selected) {
        return css`
          background-color: ${backgroundColor};
          svg {
            fill: ${iconColor};
          }
        `;
      }
      if (indeterminate) {
        return css`
          background-color: ${backgroundColor};
          svg {
            stroke: ${iconColor};
          }
        `;
      }
      return css`
        border: 2px solid ${borderColor};
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

      const color = disabled
        ? disabledToken.label
        : selected || indeterminate
        ? checked.label
        : unchecked.label;

      const backgroundColor = disabled
        ? disabledToken.container
        : selected || indeterminate
        ? checked.container
        : unchecked.container;

      return css`
        color: ${color};
        background-color: ${backgroundColor};
        cursor: ${!disabled && 'pointer'};
      `;
    }}
  `;
}
