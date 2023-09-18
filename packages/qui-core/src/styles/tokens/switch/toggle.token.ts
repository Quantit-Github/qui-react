import { css } from 'styled-components';

export const toggleOnToken = css`
  // container
  background-color: ${({ theme }) => theme.color.black_alpha[100]};
  // handle
  &::before {
    background-color: ${({ theme }) => theme.color.grayscale[0]};
  }
`;

export const toggleOffToken = css`
  // container
  background-color: ${({ theme }) => theme.color.black_alpha[30]};
  // handle
  &::before {
    background-color: ${({ theme }) => theme.color.grayscale[0]};
  }
`;
