import { SizeType, VariantType } from '../../types';

const ICON_TYPES = [
  'check',
  'close',
  'smile',
  'indeterminate',
  'up',
  'down',
] as const;

export type IconType = typeof ICON_TYPES[number];

export interface IconProps {
  /**
   * HTML classname
   */
  className?: string;
  /**
   * 각 클래스명을 변환할 때 사용할 객체
   */
  classReplacer?: Record<string, string>;
  /**
   * CSS style
   */
  style?: React.CSSProperties;
  /**
   * 아이콘 크기
   */
  size?: SizeType;
  /**
   * 아이콘 타입
   */
  type: IconType;
  /**
   * 아이콘 스타일
   */
  variant?: VariantType;
}

export type PresetIconProps = Omit<IconProps, 'type'>;
