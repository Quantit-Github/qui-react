import { useRef } from 'react';
import { useButton } from 'react-aria';
import { css, styled } from 'styled-components';
import { getStateOverlayToken } from '../styles/tokens';
import { getButtonToken } from '../styles/tokens/button';

export interface ButtonProps {
  /**
   * 버튼 타입
   */
  buttonType: 'primary' | 'secondary' | 'ghost' | 'outline';
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
   * 버튼 클릭 이벤트 핸들러.
   *
   * @returns {void}
   */
  onClick?: () => void;
}

const style = styled.div<{ state: boolean }>``;

const ButtonStyle = styled.button<Pick<ButtonProps, 'buttonType' | 'disabled'>>`
  border: none;
  border-radius: 4px;
  cursor: pointer;
  line-height: 1;
  padding: 8px 16px;

  ${({ buttonType, disabled }) => getButtonToken(buttonType, disabled || false)}
  ${({ disabled }) => !disabled && getStateOverlayToken(4)}
`;

export function Button({
  buttonType,
  disabled = false,
  ...props
}: ButtonProps) {
  const ref = useRef(null);
  const { buttonProps } = useButton(
    {
      ...props,
      isDisabled: disabled,
      onPress: props.onClick,
    },
    ref
  );

  return (
    <ButtonStyle buttonType={buttonType} disabled={disabled} {...buttonProps}>
      {props.children}
    </ButtonStyle>
  );
}
