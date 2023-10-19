import { css } from 'styled-components';
import { scrollbarToken } from './scrollbar.token';

export function getScrollbarToken(maxHeight: number) {
  return css`
    ${({ theme }) => {
      const { container } = scrollbarToken(theme);
      return css`
        overflow-y: scroll;
        max-height: ${maxHeight}px;

        &::-webkit-scrollbar {
          width: 4px;
          background: transparent;
        }

        &::-webkit-scrollbar-thumb {
          -webkit-border-radius: 9999px;
          border-radius: 9999px;
          background: ${container};
        }

        &::-webkit-scrollbar-button:vertical:start:decrement,
        &::-webkit-scrollbar-button:vertical:start:increment,
        &::-webkit-scrollbar-button:vertical:end:decrement,
        &::-webkit-scrollbar-button:vertical:end:increment {
          display: block;
          height: 2px;
        }
      `;
    }}
  `;
}
