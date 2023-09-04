import { css } from 'styled-components';
import { ButtonActiveType } from './button.token';

const buttonPrimaryLightToken = css`
  background-color: ${({ theme }) => theme.color.palette.primary[50]};
  color: ${({ theme }) => theme.color.palette.grayscale[0]};
`;

const buttonPrimaryDarkToken = css`
  background-color: ${({ theme }) => theme.color.palette.primary[50]};
  color: ${({ theme }) => theme.color.palette.grayscale[0]};
`;

const buttonSecondaryLightToken = css`
  background-color: ${({ theme }) => theme.color.palette.primary[10]};
  color: ${({ theme }) => theme.color.palette.primary[100]};
`;

const buttonSecondaryDarkToken = css`
  background-color: ${({ theme }) => theme.color.palette.primary[95]};
  color: ${({ theme }) => theme.color.palette.primary[10]};
`;

const buttonGhostLightToken = css`
  color: ${({ theme }) => theme.color.palette.grayscale[100]};
`;

const buttonGhostDarkToken = css`
  color: ${({ theme }) => theme.color.palette.grayscale[0]};
`;

const buttonOutlineLightToken = css`
  border: 1px solid ${({ theme }) => theme.color.palette.black[20]};
  color: ${({ theme }) => theme.color.palette.grayscale[100]};
`;

const buttonOutlineDarkToken = css`
  border: 1px solid ${({ theme }) => theme.color.palette.white[70]};
  color: ${({ theme }) => theme.color.palette.grayscale[0]};
`;

export function getButtonActiveToken(type: ButtonActiveType) {
  switch (type) {
    case 'primary':
      return css`
        ${({ theme }) => {
          if (theme.color.mode === 'dark') {
            return buttonPrimaryDarkToken;
          }
          return buttonPrimaryLightToken;
        }}
      `;
    case 'secondary':
      return css`
        ${({ theme }) => {
          if (theme.color.mode === 'dark') {
            return buttonSecondaryDarkToken;
          }
          return buttonSecondaryLightToken;
        }}
      `;
    case 'ghost':
      return css`
        ${({ theme }) => {
          if (theme.color.mode === 'dark') {
            return buttonGhostDarkToken;
          }
          return buttonGhostLightToken;
        }}
      `;
    case 'outline':
      return css`
        ${({ theme }) => {
          if (theme.color.mode === 'dark') {
            return buttonOutlineDarkToken;
          }
          return buttonOutlineLightToken;
        }}
      `;
    default:
      return '';
  }
}