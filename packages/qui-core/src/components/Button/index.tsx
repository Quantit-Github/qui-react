import styled from 'styled-components';
import { getButtonToken, getStateOverlayToken } from '../../styles/tokens';
import { IconButton } from './IconButton';
import { ButtonProps } from './type';

const ButtonStyle = styled.button<
  Pick<ButtonProps, 'variant' | 'disabled' | 'size'>
>`
  border: none;
  border-radius: 4px;
  cursor: pointer;
  line-height: 1;

  ${({ variant, size = 'lg', disabled }) =>
    getButtonToken(variant, size, disabled || false)}
  ${({ disabled }) => !disabled && getStateOverlayToken(4)}
`;

export function Button({ disabled = false, ...props }: ButtonProps) {
  return <ButtonStyle {...props} />;
}

Button.Icon = IconButton;

export * from './IconButton';
