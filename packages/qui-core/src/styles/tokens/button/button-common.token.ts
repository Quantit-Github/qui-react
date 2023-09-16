import { css } from 'styled-components';

export const buttonDisabledToken = css`
  background-color: ${({ theme }) => theme.color.black_alpha[20]};
  color: ${({ theme }) => theme.color.grayscale[50]};
`;
