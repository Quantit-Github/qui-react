import React from 'react';
import { styled } from 'styled-components';

interface LayoutProps {
  children: React.ReactNode;
}

const Div = styled.div<{ state: boolean }>`
  color: ${({ theme }) => theme.color.palette.up[30]};
  font-size: ${({ theme }) => theme.typography.body.sm.fontSize};
`;

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <span>dfdfdf</span>
      <Div state={true}>divdiv</Div>
      {children}
    </>
  );
}
