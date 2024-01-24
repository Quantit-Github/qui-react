import { InputHTMLAttributes, ReactNode } from 'react';

interface CheckboxCommonProps
  extends Pick<InputHTMLAttributes<HTMLInputElement>, 'checked' | 'disabled'> {
  indeterminate?: boolean;
}

type OnChangeType = (event: React.ChangeEvent<HTMLInputElement>) => void;

export interface CheckboxContainerProps {
  children?: ReactNode;
  onClick?: () => void;
}

export interface CheckboxIconProps extends CheckboxCommonProps {}

export interface CheckboxInputProps
  extends CheckboxCommonProps,
    Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange'> {
  children?: ReactNode;
  label?: string;
  onChange?: OnChangeType;
}

export interface CheckboxProps extends CheckboxCommonProps, CheckboxInputProps {
  onChange?: OnChangeType;
}
