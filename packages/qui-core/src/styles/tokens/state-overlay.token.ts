import { css } from 'styled-components';

const stateOverlayLightToken = css`
  &:active {
    &::after {
      background-color: ${({ theme }) =>
        theme.color.palette.black[20]} !important;
    }
  }

  &:hover {
    &::after {
      background-color: ${({ theme }) => theme.color.palette.black[10]};
    }
  }

  &:focus {
    outline-color: ${({ theme }) => theme.color.palette.primary[30]};
  }
`;

const stateOverlayDarkToken = css`
  &:active {
    &::after {
      background-color: ${({ theme }) =>
        theme.color.palette.white[20]} !important;
    }
  }

  &:hover {
    &::after {
      background-color: ${({ theme }) => theme.color.palette.white[10]};
    }
  }

  &:focus {
    outline-color: ${({ theme }) => theme.color.palette.primary[30]};
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

    ${({ theme }) => {
      if (theme.color.mode === 'dark') {
        return stateOverlayDarkToken;
      }
      return stateOverlayLightToken;
    }}
  `;
}
