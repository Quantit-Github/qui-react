export interface CheckboxStateProps {
  /**
   * indeterminate 상태
   *
   * @default false
   */
  $indeterminate?: boolean;
  /**
   * 체크 상태
   *
   * @default false
   */
  checked?: boolean;
}

export interface CheckboxStyleProps extends CheckboxStateProps {
  /**
   * disabled 상태
   *
   * @default false
   */
  disabled?: boolean;
}

export interface CheckboxProps extends CheckboxStyleProps {
  /**
   * 자식 컴포넌트
   */
  children: React.ReactNode;
  /**
   *
   * @param {boolean} checked 체크 상태
   * @param {boolean} indeterminate indeterminate 상태
   * @returns {void}
   */
  onChange: (props: CheckboxStateProps) => void;
  $bold?: boolean;
}
