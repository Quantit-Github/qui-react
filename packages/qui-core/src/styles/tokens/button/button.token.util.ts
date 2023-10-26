import { css } from 'styled-components';
import { buttonToken } from './button.token';
import {
  ButtonActiveType,
  ButtonSizeType,
  IconSizeType,
} from './button.token.type';
import { buttonCommonToken } from './common.token';

function getButtonActiveToken(variant: ButtonActiveType) {
  return css`
    ${({ theme }) => {
      const { primary, secondary, ghost, outline } = buttonToken(theme);
      switch (variant) {
        case 'primary':
          return css`
            background-color: ${primary.active.container};
            color: ${primary.active.elements};

            svg {
              fill: ${primary.active.elements};
            }
          `;
        case 'secondary':
          return css`
            background-color: ${secondary.active.container};
            color: ${secondary.active.elements};

            svg {
              fill: ${secondary.active.elements};
            }
          `;
        case 'ghost':
          return css`
            color: ${ghost.active.elements};

            svg {
              fill: ${ghost.active.elements};
            }
          `;
        case 'outline':
          return css`
            border: 1px solid ${outline.active.outline};
            color: ${outline.active.elements};

            svg {
              fill: ${outline.active.elements};
            }
          `;
        default:
          return '';
      }
    }}
  `;
}

function getDefaultButtonSize(size: ButtonSizeType) {
  if (size === 'xl') {
    return css`
      padding: 16px;
    `;
  } else if (size === 'lg') {
    return css`
      padding: 14px 16px;
    `;
  }
}

function getIconButtonSize(size: IconSizeType) {
  if (size === 'xl' || size === 'lg') {
    return css`
      svg {
        width: 24px;
        height: 24px;
      }
      padding: ${size === 'xl' ? 16 : 12}px;
    `;
  } else if (size === 'md') {
    return css`
      svg {
        width: 20px;
        height: 20px;
      }
      padding: 10px;
    `;
  } else if (size === 'sm') {
    return css`
      svg {
        width: 16px;
        height: 16px;
      }
      padding: 8px;
    `;
  } else {
    return css`
      svg {
        width: 14px;
        height: 14px;
      }
      padding: 3px;
    `;
  }
}

export function getCommonButtonToken(
  variant: ButtonActiveType,
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

          svg {
            fill: ${disabledToken.elements};
          }
        `;
      }
      return getButtonActiveToken(variant);
    }}
  `;
}

export function getButtonToken(
  variant: ButtonActiveType,
  size: ButtonSizeType,
  disabled: boolean
) {
  return css`
    ${getDefaultButtonSize(size)}
    ${getCommonButtonToken(variant, disabled)}
  `;
}

export function getIconButtonToken(
  variant: ButtonActiveType,
  size: IconSizeType,
  disabled: boolean
) {
  return css`
    ${getIconButtonSize(size)}
    ${getCommonButtonToken(variant, disabled)}
  `;
}
