export type ButtonFormatType = 'hug' | 'fillCenter';

export type ButtonSizeType = 'xl' | 'lg' | 'md' | 'sm' | 'xs';

export type IconType =
  | 'check'
  | 'chevron_down'
  | 'chevron_right'
  | 'chevron_up'
  | 'intermediate'
  | 'smile';

interface ButtonCommonProps
  extends Pick<React.HTMLAttributes<HTMLButtonElement>, 'onClick'> {
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
   * 포맷과 사이즈를 결정한다.
   *
   * @default 'xl-hug'
   */
  type?:
    | 'xl-hug'
    | 'lg-hug'
    | 'md-hug'
    | 'sm-hug'
    | 'xl-fillCenter'
    | 'lg-fillCenter';
  /**
   * 앞단 아이콘 타입
   */
  leadingIcon?: IconType;

  /**
   * 뒷단 아이콘 타입
   */
  trailingIcon?: IconType;
  /**
   * 앞단 아이콘 대체할 컴포넌트
   */
  customLeadingIcon?: React.ReactNode;
  /**
   * 뒷단 아이콘 대체할 컴포넌트
   */
  customTrailingIcon?: React.ReactNode;
}

export interface IconProps {
  /**
   * 아이콘 타입
   */
  type:
    | 'check'
    | 'chevron_down'
    | 'chevron_right'
    | 'chevron_up'
    | 'intermediate'
    | 'smile';
}

export interface IconButtonProps extends ButtonCommonProps, IconProps {
  children?: React.ReactNode;
  /**
   * 아이콘 사이즈
   */
  size: 'xl' | 'lg' | 'md' | 'sm' | 'xs';
}
