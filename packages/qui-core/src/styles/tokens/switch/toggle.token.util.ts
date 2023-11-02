import { css } from 'styled-components';
import { switchCommonToken } from './common.token';
import { toggleToken } from './toggle.token';
import { buttonCommonToken } from '../button';

export function getToggleToken(disabled: boolean, selected: boolean) {
  return css`
    ${({ theme }) => {
      const { off, on } = toggleToken(theme);
      const { disabled: disabledToken } = switchCommonToken(theme);
      const { disabled: buttonDisabledToken } = buttonCommonToken(theme);
      const handlePosition =
        '-webkit-transform: translateX(24px);-ms-transform: translateX(24px);transform: translateX(24px);';

      if (disabled) {
        return css`
          background-color: ${buttonDisabledToken.container};

          &::before {
            ${selected && handlePosition}
            background-color: ${disabledToken.handle};
          }
        `;
      }

      const variant = selected ? on : off;
      return css`
        background-color: ${variant.container};

        &::before {
          ${selected && handlePosition}
          background-color: ${variant.handle};
        }
      `;
    }}
  `;
}
