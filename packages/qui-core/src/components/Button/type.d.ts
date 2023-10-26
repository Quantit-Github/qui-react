export type ButtonSizeType = 'xl' | 'lg' | 'md' | 'sm';

export type IconSizeType = ButtonSizeType | 'xs';

export type IconType =
  | 'check'
  | 'chevron_down'
  | 'chevron_right'
  | 'chevron_up'
  | 'intermediate'
  | 'smile';

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
   * 버튼 사이즈
   */
  size?: ButtonSizeType;
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

export interface IconProps {
  /**
   * 아이콘 타입
   */
  type: IconType;
}

export interface IconButtonProps extends ButtonProps, IconProps {
  children?: React.ReactNode;
  size: IconSizeType;
}
