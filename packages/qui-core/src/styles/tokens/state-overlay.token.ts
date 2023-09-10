import { css } from 'styled-components';

// TODO: 다크 테마 논의 후 코드 수정
const stateOverlayLightToken = css`
  &:active {
    &::after {
      background-color: ${({ theme }) => theme.color.black[20]} !important;
    }
  }

  &:hover {
    &::after {
      background-color: ${({ theme }) => theme.color.black[10]};
    }
  }

  &:focus {
    outline-color: ${({ theme }) => theme.color.primary[30]};
  }
`;

const stateOverlayDarkToken = css`
  &:active {
    &::after {
      background-color: ${({ theme }) => theme.color.white[20]} !important;
    }
  }

  &:hover {
    &::after {
      background-color: ${({ theme }) => theme.color.white[10]};
    }
  }

  &:focus {
    outline-color: ${({ theme }) => theme.color.primary[30]};
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
      if (theme.palette.mode === 'dark') {
        return stateOverlayDarkToken;
      }
      return stateOverlayLightToken;
    }}
  `;
}
