import { css } from 'styled-components';
import { stateOverlayToken } from './state-overlay.token';
import { BorderRadiusType } from './state-overlay.token.type';

function getStateOverlayContent(borderRadius: BorderRadiusType) {
  return css`
    /* overlay content */
    &::after {
      /* color */
      background-color: transparent;
      border: none;
      border-radius: ${borderRadius === 'rounded'
        ? '50%'
        : `${borderRadius}px`};
      /* content */
      content: '';
      /* size */
      height: 100%;
      width: 100%;
      /* position */
      position: absolute;
      left: 0;
      top: 0;
      z-index: -1;
    }

    position: relative;
  `;
}

export function getStateOverlayToken(borderRadius: BorderRadiusType) {
  return css`
    ${getStateOverlayContent(borderRadius)};

    ${({ theme }) => {
      const { focused, hover, pressed } = stateOverlayToken(theme);
      return css`
        &:active {
          &::after {
            background-color: ${pressed} !important;
          }
        }

        &:hover {
          &::after {
            background-color: ${hover};
          }
        }

        &:focus {
          outline: 2px solid ${focused};
        }
      `;
    }}
  `;
}
