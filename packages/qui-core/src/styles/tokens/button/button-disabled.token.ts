import { css } from 'styled-components';
import { Theme } from '../../themes/theme';

const buttonDisabledLightToken = css`
  background-color: ${({ theme }) => theme.color.palette.black[20]};
  color: ${({ theme }) => theme.color.palette.grayscale[50]};
`;

const buttonDisabledDarkToken = css`
  background-color: ${({ theme }) => theme.color.palette.white[20]};
  color: ${({ theme }) => theme.color.palette.grayscale[95]};
`;

export const buttonDisabledToken = css`
  ${({ theme }) => {
    if (theme.color.mode === 'dark') {
      return buttonDisabledDarkToken;
    }
    return buttonDisabledLightToken;
  }}
`;
