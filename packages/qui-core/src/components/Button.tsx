import { useRef } from 'react';
import { AriaButtonProps, useButton } from 'react-aria';
import { styled } from 'styled-components';

export interface ButtonProps extends AriaButtonProps {
  /**
   * 버튼 클릭 이벤트 핸들러.
   *
   * @returns {void}
   */
  onClick?: () => void;
}

const ButtonStyle = styled.button`
  background-color: ${({ theme }) => theme.colorPalette.primary[100]};
  border: none;
  border-radius: 4px;
  color: ${({ theme }) => theme.colorPalette.white[100]};
  cursor: pointer;
  line-height: 1;
  padding: 8px 16px;
`;

export function Button(props: ButtonProps) {
  const ref = useRef(null);
  const { buttonProps } = useButton({ ...props, onPress: props.onClick }, ref);
  return <ButtonStyle {...buttonProps}>{props.children}</ButtonStyle>;
}
