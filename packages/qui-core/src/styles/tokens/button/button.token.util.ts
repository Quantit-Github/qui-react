import { css } from 'styled-components';
import { buttonToken } from './button.token';
import { ButtonActiveType } from './button.token.type';
import { buttonCommonToken } from './common.token';

export function getButtonActiveToken(type: ButtonActiveType) {
  return css`
    ${({ theme }) => {
      const { primary, secondary, ghost, outline } = buttonToken(theme);
      switch (type) {
        case 'primary':
          return css`
            background-color: ${primary.active.container};
            color: ${primary.active.elements};
          `;
        case 'secondary':
          return css`
            background-color: ${secondary.active.container};
            color: ${secondary.active.elements};
          `;
        case 'ghost':
          return css`
            color: ${ghost.active.elements};
          `;
        case 'outline':
          return css`
            border: 1px solid ${outline.active.outline};
            color: ${outline.active.elements};
          `;
        default:
          return '';
      }
    }}
  `;
}

export function getButtonToken(
  buttonType: ButtonActiveType,
  disabled: boolean
) {
  return css`
    background-color: transparent;

    ${({ theme }) => {
      const { disabled: disabledToken } = buttonCommonToken(theme);
      if (disabled) {
        return css`
          background-color: ${disabledToken.container};
          color: ${disabledToken.elements};
          /* border: 1px solid ${disabledToken.outline}; */
        `;
      }
      return getButtonActiveToken(buttonType);
    }}
  `;
}
