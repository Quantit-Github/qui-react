type DropdownSize = 'lg' | 'md';

export interface DropdownDataProps<T> {
  label: string;
  value: T;
  disabled?: boolean;
  prefix?: React.ReactNode;
  hasSuffix?: boolean;
}

export interface DropdownListProps<T> {
  list: DropdownDataProps<T>[];
  open: boolean;
  selected: T;
  onCellClick: (value: T) => void;
}

export interface DropdownProps<T> {
  list: DropdownDataProps<T>[];
  selected: T;
  onChangeSelected: (value: T) => void;
  disabled?: boolean;
  width?: number;
  size?: DropdownSize;
  placeholder?: string;
}

export interface DropdownStyleProps {
  open: boolean;
  $width?: number;
}

export interface DropdownContainerStyleProps {
  $width?: number;
  size?: DropdownSize;
}

export interface DropdownCellStyleProps {
  selected: boolean;
}
