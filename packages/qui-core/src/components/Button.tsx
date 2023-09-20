import { useRef } from 'react';
import { useButton } from 'react-aria';
import { styled } from 'styled-components';
import { getButtonToken, getStateOverlayToken } from '../styles/tokens';

export interface ButtonProps {
  /**
   * 자식 컴포넌트
   */
  children: React.ReactNode;
  /**
   * 비활성화 유무
   *
   * @default false
   */
  disabled?: boolean;
  /**
   * 버튼 타입
   */
  variant: 'primary' | 'secondary' | 'ghost' | 'outline';
  /**
   * 버튼 클릭 이벤트 핸들러.
   *
   * @returns {void}
   */
  onClick?: () => void;
}

const ButtonStyle = styled.button<Pick<ButtonProps, 'variant' | 'disabled'>>`
  border: none;
  border-radius: 4px;
  cursor: pointer;
  line-height: 1;
  padding: 8px 16px;

  ${({ variant, disabled }) => getButtonToken(variant, disabled || false)}
  ${({ disabled }) => !disabled && getStateOverlayToken(4)}
`;

export function Button({ disabled = false, variant, ...props }: ButtonProps) {
  const ref = useRef(null);
  const { buttonProps } = useButton(
    {
      isDisabled: disabled,
      onPress: props.onClick,
    },
    ref
  );

  return (
    <ButtonStyle disabled={disabled} variant={variant} {...buttonProps}>
      {props.children}
    </ButtonStyle>
  );
}
