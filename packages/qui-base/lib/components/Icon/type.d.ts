import { SizeType, VariantType } from '../../types';

const ICON_TYPES = ['check', 'close', 'smile'] as const;

export type IconType = typeof ICON_TYPES[number];

export interface IconProps {
  /**
   * HTML classname
   */
  className?: string;
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
