import styled, { css } from 'styled-components';
import {
  getButtonToken,
  getIconSize,
  getStateOverlayToken,
} from '../../styles/tokens';
import { Icon, IconButton } from './IconButton';
import { ButtonProps, IconSizeType } from './type';

const ButtonStyle = styled.button<
  Pick<ButtonProps, 'variant' | 'disabled' | 'type'>
>`
  border: none;
  border-radius: 12px;
  cursor: pointer;
  line-height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;

  ${({ variant, type = 'xl-hug', disabled }) =>
    css`
      ${getButtonToken(variant, type, disabled || false)}
      ${getIconSize(type.split('-')[0] as IconSizeType)}
    `}

  ${({ disabled }) => !disabled && getStateOverlayToken(4)};
`;

export function Button({
  disabled = false,
  leadingIcon,
  trailingIcon,
  customLeadingIcon,
  customTrailingIcon,
  ...props
}: ButtonProps) {
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
    <ButtonStyle disabled={disabled} {...props}>
      {getLeadingIcon()}
      {props.children}
      {getTrailingIcon()}
    </ButtonStyle>
  );
}

Button.Icon = IconButton;

export * from './IconButton';
