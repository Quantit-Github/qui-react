import { css } from 'styled-components';
import { buttonCommonToken, buttonToken } from '../button';
import { getStateOverlayToken } from '../state-overlay';
import { tabToken } from '../switch';

export const getPaginationAtomToken = (isOn: boolean) => {
  return css`
    ${({ theme }) => {
      const { on, off } = tabToken(theme);
      const variant = isOn ? on : off;

      return css`
        ${getStateOverlayToken(4, 1)}
        background-color: ${variant.container};
        color: ${variant.label};
        border: 1px solid ${variant.outline};
      `;
    }}
  `;
};

export const getPaginationIconToken = (isDisabled: boolean) => {
  return css`
    ${({ theme }) => {
      const { disabled } = buttonCommonToken(theme);
      const { ghost } = buttonToken(theme);
      return css`
        fill: ${isDisabled ? disabled.elements : ghost.active.elements};
      `;
    }}
  `;
};

export const getPaginationArrowButtonToken = (isDisabled: boolean) => {
  return css`
    ${({ theme }) => {
      const { disabled } = buttonCommonToken(theme);
      const { outline } = buttonToken(theme);

      return css`
        ${!isDisabled && getStateOverlayToken(4, 1)}
        cursor: ${!isDisabled && 'pointer'};
        background-color: ${outline.active.container};
        border: 1px solid
          ${isDisabled ? disabled.outline : outline.active.outline};
      `;
    }}
  `;
};

export const getPaginationToken = (pageSize: number) => {
  if (pageSize === 5) {
    return css`
      ${({ theme }) => theme.size.small.minMediaQuery`
        display: none;
      `}
    `;
  }
  return css`
    ${({ theme }) => theme.size.extraSmall.mediaQuery`
      display: none;
    `}
  `;
};
