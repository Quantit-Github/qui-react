import { SizeType, VariantType } from '../../types';
import { IconType } from '../Icon/type';

const BUTTON_LAYOUTS = ['hug', 'fill'] as const;

export type ButtonLayoutType = typeof BUTTON_LAYOUTS[number];

interface ButtonCommonProps {
  /**
   * React Children.
   *
   * 해당 값이 prop으로 전달될 경우, layout prop은 무시됨.
   *
   */
  children?: React.ReactNode;
  /**
   * HTML classname
   */
  className?: string;
  /**
   * 버튼 비활성화 여부
   */
  disabled?: boolean;
  /**
   * 버튼 너비값을 콘텐츠 크기에 맞출지 여부.
   *
   * 비활성화할 경우 버튼의 너비값은 100%로 설정됨.
   */
  fitContentWidth?: boolean;
  /**
   * 버튼 크기
   */
  size?: SizeType;
  /**
   * CSS style
   */
  style?: React.CSSProperties;
  /**
   * 버튼 스타일
   */
  variant?: VariantType;
  /**
   * 버튼 클릭 이벤트핸들러
   */
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export interface ButtonContainerProps extends ButtonCommonProps {}

export interface ButtonLayoutProps {
  /**
   * The layout of the button.
   */
  type?: ButtonLayoutType;
  /**
   * The leading component of the button.
   */
  leading?: React.ReactNode;
  /**
   * The main component of the button.
   */
  main?: React.ReactNode;
  /**
   * The trailing component of the button.
   */
  trailing?: React.ReactNode;
}

export interface ButtonProps extends ButtonCommonProps {
  /**
   * The layout of the button.
   */
  layout?: ButtonLayoutProps;
}

export interface IconButtonProps
  extends Omit<ButtonCommonProps, 'fitContentWidth'> {
  type?: IconType;
}
