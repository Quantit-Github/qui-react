import { css } from 'styled-components';
import { getStateOverlayToken } from '../state-overlay';
import { tabToken } from '../tab';
import { buttonCommonToken, buttonToken } from '../button';

export const getPaginationAtomToken = (isOn: boolean) => {
  return css`
    ${({ theme }) => {
      const { on, off } = tabToken(theme);
      const variant = isOn ? on : off;

      return css`
        background-color: ${variant.container};
        color: ${variant.label};
        border: 1px solid ${variant.outline};
      `;
    }}
  `;
};

export const getPaginationArrowButtonToken = (isDisabled: boolean) => {
  return css`
    ${({ theme }) => {
      const { disabled } = buttonCommonToken(theme);
      const { outline, ghost } = buttonToken(theme);

      if (isDisabled) {
        return css`
          background-color: ${outline.active.container};
          border: 1px solid ${disabled.outline};
          svg {
            fill: ${disabled.elements};
          }
        `;
      }
      return css`
        ${getStateOverlayToken(4)}
        cursor: pointer;
        background-color: ${outline.active.container};
        border: 1px solid ${outline.active.outline};
        svg {
          fill: ${ghost.active.elements};
        }
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
