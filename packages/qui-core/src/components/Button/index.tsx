import styled, { css } from 'styled-components';
import {
  getButtonToken,
  getIconSize,
  getStateOverlayToken,
} from '../../styles/tokens';
import { Icon, IconButton } from './IconButton';
import { ButtonFormatType, ButtonProps, ButtonSizeType } from './type';

interface ButtonStyleProps extends Pick<ButtonProps, 'variant' | 'disabled'> {
  format: ButtonFormatType;
  size: ButtonSizeType;
}

const ButtonStyle = styled.button<ButtonStyleProps>`
  border: none;
  line-height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;

  ${({ variant, disabled, format, size }) =>
    css`
      ${getButtonToken(variant, format, size, disabled || false)}
      svg {
        ${getIconSize(size)}
      }
    `}

  ${({ disabled, size }) =>
    !disabled && getStateOverlayToken(size === 'xl' || size === 'lg' ? 12 : 8)};
`;

export function Button({
  disabled = false,
  leadingIcon,
  trailingIcon,
  customLeadingIcon,
  customTrailingIcon,
  type = 'xl-hug',
  ...props
}: ButtonProps) {
  const [size, format] = type.split('-') as [ButtonSizeType, ButtonFormatType];

  const getLeadingIcon = () => {
    if (!leadingIcon) return null;
    if (customLeadingIcon) {
      return customLeadingIcon;
    }
    return <Icon type={leadingIcon} />;
  };

  const getTrailingIcon = () => {
    if (!trailingIcon) return null;
    if (customTrailingIcon) {
      return customTrailingIcon;
    }
    return <Icon type={trailingIcon} />;
  };

  return (
    <ButtonStyle disabled={disabled} format={format} size={size} {...props}>
      {getLeadingIcon()}
      {props.children}
      {getTrailingIcon()}
    </ButtonStyle>
  );
}

Button.Icon = IconButton;

export * from './IconButton';
export type { ButtonSizeType, IconType } from './type';
