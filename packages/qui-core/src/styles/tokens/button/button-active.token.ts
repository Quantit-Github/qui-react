import { css } from 'styled-components';
import { ButtonActiveType } from './button.token';

export const buttonPrimaryToken = css`
  background-color: ${({ theme }) => theme.color.primary[50]};
  color: ${({ theme }) => theme.color.grayscale[0]};
`;

export const buttonSecondaryToken = css`
  background-color: ${({ theme }) => theme.color.primary[10]};
  color: ${({ theme }) => theme.color.primary[100]};
`;

export const buttonGhostToken = css`
  color: ${({ theme }) => theme.color.grayscale[100]};
`;

export const buttonOutlineToken = css`
  border: 1px solid ${({ theme }) => theme.color.black_alpha[20]};
  color: ${({ theme }) => theme.color.grayscale[100]};
`;

export function getButtonActiveToken(type: ButtonActiveType) {
  switch (type) {
    case 'primary':
      return css`
        ${buttonPrimaryToken}
      `;
    case 'secondary':
      return css`
        ${buttonSecondaryToken}
      `;
    case 'ghost':
      return css`
        ${buttonGhostToken}
      `;
    case 'outline':
      return css`
        ${buttonOutlineToken}
      `;
    default:
      return '';
  }
}
