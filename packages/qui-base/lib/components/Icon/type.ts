import { SizeType, VariantType } from '../../types';

const ICON_TYPES = [
  'alertTriangle',
  'alpha',
  'alphaCombinator',
  'arrowLeft',
  'arrowLeftCircle',
  'arrowRight',
  'arrowRightCircle',
  'arrowUp',
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
  'copy',
  'data',
  'delete',
  'document',
  'dollar',
  'down',
  'download',
  'dragZoom',
  'edit',
  'editorRobo',
  'executions',
  'experiment',
  'externalLink',
  'filter',
  'globe',
  'help',
  'helpCircle',
  'indeterminate',
  'info',
  'logout',
  'magic',
  'menu',
  'minus',
  'moreHorizontal',
  'moreVertical',
  'overview',
  'pan',
  'play',
  'plus',
  'portfolio',
  'profile',
  'pulse',
  'pythonProject',
  'quick',
  'rebalancing',
  'robo',
  'roboA',
  'roboB',
  'roboC',
  'roboD',
  'rotate',
  'search',
  'shopping',
  'siren',
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
