import { SizeType, VariantType } from '../../types';

const ICON_TYPES = [
  'alertTriangle',
  'alpha',
  'alphaCombinator',
  'arrowUpRightCircle',
  'balance',
  'book',
  'calendar',
  'check',
  'checkCircle',
  'chevronDown',
  'chevronUp',
  'chevronLeft',
  'chevronRight',
  'chevronUpDown',
  'clipboard',
  'close',
  'closeCircle',
  'data',
  'delete',
  'document',
  'dollar',
  'down',
  'download',
  'edit',
  'executions',
  'experiment',
  'externalLink',
  'filter',
  'globe',
  'help',
  'helpCircle',
  'indeterminate',
  'info',
  'magic',
  'minus',
  'moreHorizontal',
  'moreVertical',
  'plus',
  'portfolio',
  'pythonProject',
  'quick',
  'rebalancing',
  'robo',
  'rotate',
  'search',
  'shopping',
  'smile',
  'star',
  'starLined',
  'terminal',
  'thumbsDown',
  'trading',
  'up',
  'upload',
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
