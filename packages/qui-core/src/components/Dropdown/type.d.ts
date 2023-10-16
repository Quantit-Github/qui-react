type DropdownSize = 'lg' | 'md';

export interface DropdownDataProps<T> {
  /**
   * 라벨에 나타나는 string
   */
  label: string;
  /**
   * 리스트 아이템 값
   */
  value: T;
  /**
   * disabled 상태
   */
  disabled?: boolean;
  /**
   * prefix로 나타나는 아이콘
   */
  prefix?: React.ReactNode;
  /**
   * suffix 아이콘 유무
   */
  hasSuffix?: boolean;
}

export interface DropdownListProps<T> {
  /**
   * 드롭다운 리스트
   */
  list: DropdownDataProps<T>[];
  /**
   * 선택된 값의 index
   */
  selectedIndex?: number;
  /**
   * 리스트 아이템 클릭시 실행되는 함수
   * @param {T} value 리스트 중 클릭한 값
   * @param {number} index 리스트 중 클릭한 값의 index
   * @returns {void}
   */
  onItemClick: (value: T, index: number) => void;
}

export interface DropdownProps<T> {
  /**
   * 드롭다운 리스트
   */
  list: DropdownDataProps<T>[];
  /**
   * 선택값 변경시 실행되는 함수
   * @param {T} value 리스트 중 클릭한 값
   * @returns {void}
   */
  onChangeSelected: (value: T) => void;
  /**
   * 미선택 상태에 보여지는 placeholder 값
   */
  placeholder: string;
  /**
   * disabled 상태
   */
  disabled?: boolean;
  /**
   * 드롭다운 버튼 너비
   * 50 이상의 값으로 설정해야 함
   * @default 126
   */
  width?: number;
  /**
   * 드롭다운 사이즈 타입
   * 'lg' | 'md'
   * @default 'md'
   */
  size?: DropdownSize;
}

export interface DropdownStyleProps {
  open: boolean;
}

export interface DropdownButtonStyleProps {
  $width: number;
  size?: DropdownSize;
  $hasSelectedItem: boolean;
}

export interface DropdownItemStyleProps {
  selected: boolean;
}
