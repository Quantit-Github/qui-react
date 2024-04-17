import { InputHTMLAttributes, ReactNode } from 'react';

interface ClassNameProps {
  className?: string;
  classReplacer?: Record<string, string>;
}

interface CheckboxCommonProps
  extends Pick<InputHTMLAttributes<HTMLInputElement>, 'checked' | 'disabled'>,
    ClassNameProps {
  indeterminate?: boolean;
}

type OnChangeType = (event: React.ChangeEvent<HTMLInputElement>) => void;

export interface CheckboxContainerProps extends ClassNameProps {
  children?: ReactNode;
  onClick?: () => void;
}

export interface CheckboxIconProps extends CheckboxCommonProps {}

export interface CheckboxInputProps extends CheckboxCommonProps {
  iconClassName?: string;
  children?: ReactNode;
  label?: string;
  onChange?: OnChangeType;
}

export interface CheckboxProps extends CheckboxCommonProps, CheckboxInputProps {
  containerClassName?: string;
  onChange?: OnChangeType;
}
