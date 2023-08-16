import React from 'react';
import { styled } from 'styled-components';

export interface ButtonProps {
  /**
   * 버튼 텍스트 또는 리액트 컴포넌트.
   */
  children: React.ReactNode;
  /**
   * 버튼 클릭 이벤트 핸들러.
   * @returns {void}
   */
  onClick?: () => void;
}

const ButtonStyle = styled.button`
  background-color: ${({ theme }) => theme.colors.primary};
  border: none;
  border-radius: 4px;
  color: ${({ theme }) => theme.colors.onPrimary};
  padding: 8px 16px;
  line-height: 1;
`;

export function Button(props: ButtonProps) {
  return <ButtonStyle {...props}>{props.children}</ButtonStyle>;
}
