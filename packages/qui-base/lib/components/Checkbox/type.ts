import { InputHTMLAttributes, ReactNode } from 'react';

interface CheckboxCommonProps
  extends Pick<InputHTMLAttributes<HTMLInputElement>, 'checked' | 'disabled'> {
  indeterminate?: boolean;
}

export interface CheckboxContainerProps {
  children?: ReactNode;
  onClick?: () => void;
}

export interface CheckboxIconProps extends CheckboxCommonProps {}

export interface CheckboxInputProps extends CheckboxCommonProps {
  children?: ReactNode;
  label?: string;
}

export interface CheckboxProps
  extends CheckboxCommonProps,
    CheckboxInputProps {}
