type SizeType = 'extraSmall' | 'small' | 'medium' | 'large' | 'extraLarge';

export interface DeviceSizeProps {
  /**
   * main의 width. min이 존재하는 경우 min보다 작아야 합니다.
   * @type {number}
   */
  mainWidth: number;
  /**
   * 최대 넓이, undefined의 경우 무한대까지
   * @type {number?}
   */
  max?: number;
  /**
   * 최소 넓이, undefined의 경우 0까지
   * @type {number?}
   */
  min?: number;
}

export type QuiSize = Record<SizeType, DeviceSizeProps>;
