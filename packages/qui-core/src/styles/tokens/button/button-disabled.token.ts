import { css } from 'styled-components';

// TODO: 다크 테마 논의 후 코드 수정
const buttonDisabledLightToken = css`
  background-color: ${({ theme }) => theme.color.black[20]};
  color: ${({ theme }) => theme.color.grayscale[50]};
`;

const buttonDisabledDarkToken = css`
  background-color: ${({ theme }) => theme.color.white[20]};
  color: ${({ theme }) => theme.color.grayscale[95]};
`;

export const buttonDisabledToken = css`
  ${({ theme }) => {
    if (theme.palette.mode === 'dark') {
      return buttonDisabledDarkToken;
    }
    return buttonDisabledLightToken;
  }}
`;
