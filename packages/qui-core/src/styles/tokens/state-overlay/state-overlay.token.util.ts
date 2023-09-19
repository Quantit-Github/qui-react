import { css } from 'styled-components';
import { stateOverlayToken } from './state-overlay.token';

function getStateOverlayContent(borderRadius: number) {
  return css`
    /* overlay content */
    &::after {
      /* color */
      background-color: transparent;
      border: none;
      border-radius: ${`${borderRadius}px`};
      /* content */
      content: '';
      /* size */
      height: 100%;
      width: 100%;
      /* position */
      position: absolute;
      left: 0;
      top: 0;
    }

    position: relative;
  `;
}

export function getStateOverlayToken(borderRadius: number) {
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
          outline-color: ${focused};
        }
      `;
    }}
  `;
}
