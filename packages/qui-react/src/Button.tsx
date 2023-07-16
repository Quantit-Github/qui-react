import React from "react";

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

export function Button(props: ButtonProps) {
  return <button>{props.children}</button>;
}

Button.displayName = "Button";
