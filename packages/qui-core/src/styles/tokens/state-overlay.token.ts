import { css } from 'styled-components';

const stateOverlayToken = css`
  &:active {
    &::after {
      background-color: ${({ theme }) =>
        theme.color.black_alpha[20]} !important;
    }
  }

  &:hover {
    &::after {
      background-color: ${({ theme }) => theme.color.black_alpha[10]};
    }
  }

  &:focus {
    outline-color: ${({ theme }) => theme.color.primary[20]};
  }
`;

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
    ${stateOverlayToken}
  `;
}
