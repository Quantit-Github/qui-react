type TabSize = 'sm' | 'md';

export interface TabItemProps {
  /**
   * 체크 상태
   *
   * @default false
   */
  checked?: boolean;
  /**
   * Size
   */
  $size?: TabSize;
}

export interface TabItemDataProps<T> extends TabItemProps {
  /**
   * 라벨에 나타나는 string
   */
  label: string;
  /**
   * 리스트 아이템 값
   */
  value: T;
}

export interface TabProps<T> {
  size: TabSize;
  selected: T;
  list: TabItemDataProps<T>[];
  onClickItem: (value: T) => () => void;
}

export interface TabItemStyleProps extends TabItemProps {}
