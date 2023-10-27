import { css } from 'styled-components';
import { buttonToken } from './button.token';
import {
  ButtonActiveType,
  ButtonFormatType,
  ButtonSizeType,
  PixelType,
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

export function getIconSize(size: ButtonSizeType) {
  let width: PixelType = '24px';
  let height: PixelType = '24px';

  switch (size) {
    case 'md': {
      width = '20px';
      height = '20px';
      break;
    }
    case 'sm': {
      width = '16px';
      height = '16px';
      break;
    }
    case 'xs': {
      width = '14px';
      height = '14px';
      break;
    }
  }

  return css`
    svg {
      width: ${width};
      height: ${height};
    }
  `;
}

function getIconButtonSize(size: ButtonSizeType) {
  let padding: PixelType = '16px';

  switch (size) {
    case 'lg': {
      padding = '12px';
      break;
    }
    case 'md': {
      padding = '10px';
      break;
    }
    case 'sm': {
      padding = '8px';
      break;
    }
    case 'xs': {
      padding = '3px';
      break;
    }
  }

  return css`
    ${getIconSize(size)}
    padding: ${padding};
  `;
}

function getButtonSize(size: ButtonSizeType) {
  let borderRadius: PixelType = '12px';
  let fontSize: PixelType = '16px';
  let fontWeight = 700;
  let gap: PixelType = '8px';
  let lineHeight: PixelType = '24px';
  let padding: PixelType = '16px';

  switch (size) {
    case 'lg': {
      padding = '12px 16px';
      break;
    }
    case 'md': {
      borderRadius = '8px';
      fontWeight = 500;
      gap = '4px';
      padding = '9px';
      break;
    }
    case 'sm': {
      borderRadius = '8px';
      fontSize = '14px';
      fontWeight = 500;
      gap = '4px';
      lineHeight = '20px';
      padding = '6px 8px';
      break;
    }
  }

  return css`
    border-radius: ${borderRadius};
    font-weight: ${fontWeight};
    font-size: ${fontSize};
    gap: ${gap};
    line-height: ${lineHeight};
    padding: ${padding};
  `;
}

function getFormatStyle(format: ButtonFormatType, size: ButtonSizeType) {
  if (format === 'hug') {
    return css`
      justify-content: center;
      ${(size === 'md' || size === 'sm') && 'width: fit-content;'}
    `;
  }
  return css`
    justify-content: space-between;
  `;
}

function getButtonType(format: ButtonFormatType, size: ButtonSizeType) {
  return css`
    ${getButtonSize(size)}
    ${getFormatStyle(format, size)}
  `;
}

export function getButtonCommonToken(
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
  format: ButtonFormatType,
  size: ButtonSizeType,
  disabled: boolean
) {
  return css`
    ${getButtonType(format, size)}
    ${getButtonCommonToken(variant, disabled)}
  `;
}

export function getIconButtonToken(
  variant: ButtonActiveType,
  size: ButtonSizeType,
  disabled: boolean
) {
  return css`
    ${getIconButtonSize(size)}
    ${getButtonCommonToken(variant, disabled)}
  `;
}
