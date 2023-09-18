import { css } from 'styled-components';

export const swtichDisabledToken = css`
  // container
  background-color: ${({ theme }) => theme.color.black_alpha[20]};
  // label
  color: ${({ theme }) => theme.color.black_alpha[50]};
`;
