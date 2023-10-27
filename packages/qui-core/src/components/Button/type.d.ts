export type PixelType =
  | `${number}px`
  | `${number}px ${number}px`
  | `${number}px ${number}px ${number}px`
  | `${number}px ${number}px ${number}px ${number}px`;

export type ButtonSizeType = 'xl' | 'lg' | 'md' | 'sm';

export type ButtonFormatType = 'hug' | 'fillCenter';

export type ButtonType =
  | 'xl-hug'
  | 'lg-hug'
  | 'md-hug'
  | 'sm-hug'
  | 'xl-fillCenter'
  | 'lg-fillCenter';

export type IconSizeType = ButtonSizeType | 'xs';

export type IconType =
  | 'check'
  | 'chevron_down'
  | 'chevron_right'
  | 'chevron_up'
  | 'intermediate'
  | 'smile';

interface ButtonCommonProps {
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
}

export interface ButtonProps extends ButtonCommonProps {
  /**
   * 버튼 타입
   *
   * @default 'xl-hug'
   */
  type?: ButtonType;
  leadingIcon?: IconType;
  trailingIcon?: IconType;
  customLeadingIcon?: React.ReactNode;
  customTrailingIcon?: React.ReactNode;
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

export interface IconButtonProps extends ButtonCommonProps, IconProps {
  children?: React.ReactNode;
  size: IconSizeType;
}
