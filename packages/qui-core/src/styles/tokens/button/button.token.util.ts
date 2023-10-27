import { css } from 'styled-components';
import { buttonToken } from './button.token';
import {
  ButtonActiveType,
  ButtonFormatType,
  ButtonSizeType,
  ButtonType,
  IconSizeType,
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

export function getIconSize(size: IconSizeType) {
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

function getIconButtonSize(size: IconSizeType) {
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
  let padding: PixelType = '16px';
  let fontSize: PixelType = '16px';
  let lineHeight: PixelType = '24px';
  let gap: PixelType = '8px';
  let fontWeight = 700;

  switch (size) {
    case 'lg': {
      padding = '12px 16px';
      break;
    }
    case 'md': {
      fontWeight = 500;
      padding = '9px';
      gap = '4px';
      break;
    }
    case 'sm': {
      fontWeight = 500;
      fontSize = '14px';
      lineHeight = '20px';
      padding = '6px 8px';
      gap = '4px';
      break;
    }
  }

  return css`
    font-size: ${fontSize};
    font-weight: ${fontWeight};
    line-height: ${lineHeight};
    padding: ${padding};
    gap: ${gap};
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

function getButtonType(type: ButtonType) {
  const [size, format] = type.split('-') as [ButtonSizeType, ButtonFormatType];
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
  type: ButtonType,
  disabled: boolean
) {
  return css`
    ${getButtonType(type)}
    ${getButtonCommonToken(variant, disabled)}
  `;
}

export function getIconButtonToken(
  variant: ButtonActiveType,
  size: IconSizeType,
  disabled: boolean
) {
  return css`
    ${getIconButtonSize(size)}
    ${getButtonCommonToken(variant, disabled)}
  `;
}
