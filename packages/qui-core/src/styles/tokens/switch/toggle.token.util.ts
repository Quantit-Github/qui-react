import { css } from 'styled-components';
import { switchCommonToken } from './common.token';
import { toggleToken } from './toggle.token';

export function getToggleToken(disabled: boolean, selected: boolean) {
  return css`
    ${({ theme }) => {
      const { off, on } = toggleToken(theme);
      const { disabled: disabledToken } = switchCommonToken(theme);

      if (selected)
        return css`
          // handle
          &:before {
            -webkit-transform: translateX(24px);
            -ms-transform: translateX(24px);
            transform: translateX(24px);
            background-color: ${on.handle};
          }

          background-color: ${on.container};
        `;
      if (disabled) {
        return css`
          background-color: ${disabledToken.container};
          color: ${disabledToken.label};
        `;
      }
      return css`
        background-color: ${off.container};

        // handle
        &::before {
          background-color: ${off.handle};
        }
      `;
    }}
  `;
}
