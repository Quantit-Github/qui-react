import { InputHTMLAttributes, ReactElement, ReactNode } from 'react';
import { SizeType } from '../../types';

export type TextFieldSizeType = Exclude<SizeType, 'xs'>;

interface TextFieldCommonProps
  extends Pick<
    InputHTMLAttributes<HTMLInputElement>,
    'className' | 'disabled'
  > {
  /**
   * 에러 여부.
   *
   * @default false
   */
  isError?: boolean;
  /**
   * 텍스트필드 크기.
   *
   * @default 'xl'
   */
  size?: TextFieldSizeType;
}

export interface TextFieldContainerProps extends TextFieldCommonProps {
  /**
   * React Children.
   */
  children?: ReactNode;
  /**
   * 활성화 여부.
   *
   * 값이 존재할 경우
   *
   * @default false
   */
  isActive?: boolean;
  onClick?: () => void;
}

export interface TextFieldLayoutProps {
  /**
   * React Children.
   */
  children: ReactElement;
  /**
   * 텍스트필드 InputElement 앞 영역.
   */
  leading?: ReactNode;
  /**
   * 텍스트필드 InputElement 뒷 영역.
   */
  trailing?: ReactNode;
}

export interface InputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
  /**
   * 텍스트필드 크기.
   *
   * @default 'xl'
   */
  size?: TextFieldSizeType;
  onValueChange?: (value: string | number) => void;
}

export interface TextFieldProps
  extends TextFieldCommonProps,
    Pick<
      InputHTMLAttributes<HTMLInputElement>,
      'value' | 'type' | 'placeholder' | 'onChange'
    > {
  /**
   * 텍스트필드 InputElement의 앞뒤 영역 컨트롤러.
   *
   * leading, trailing 각각의 영역에는 ReactNode가 들어갈 수 있음.
   */
  layout?: Omit<TextFieldLayoutProps, 'children'>;
}
