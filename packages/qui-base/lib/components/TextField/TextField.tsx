'use client';

import { ChangeEvent, forwardRef, useEffect, useRef, useState } from 'react';
import { IconButton, StateOverlay } from '..';
import { combineClassNames } from '../../utils';
import classnames from './TextField.module.scss';
import {
  InputProps,
  TextFieldContainerProps,
  TextFieldLayoutProps,
  TextFieldProps,
} from './type';

function TextFieldContainer({
  className,
  children,
  disabled,
  isActive,
  isError,
  size = 'xl',
  onClick,
  ...props
}: TextFieldContainerProps) {
  return (
    <div
      role="textbox"
      className={combineClassNames(
        classnames.container,
        classnames[size],
        disabled ? classnames.disabled : '',
        isActive ? classnames.active : '',
        isError ? classnames.error : '',
        className
      )}
      onClick={onClick}
      {...props}
    >
      {children}
    </div>
  );
}

function TextFieldLayout({
  leading,
  children,
  trailing,
}: TextFieldLayoutProps) {
  return (
    <div className={classnames.custom_layout}>
      {leading && (
        <div className={classnames.custom_layout_item}>{leading}</div>
      )}
      <div
        className={combineClassNames(
          classnames.custom_layout_item,
          classnames.custom_layout_item__full
        )}
      >
        {children}
      </div>
      {trailing && (
        <div className={classnames.custom_layout_item}>{trailing}</div>
      )}
    </div>
  );
}

const Input = forwardRef<HTMLInputElement, InputProps>(function Input(
  { disabled, value = '', size, onChange, onValueChange, ...props },
  ref
) {
  const [_value, setValue] = useState(value);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const val = e.currentTarget.value;
    setValue?.(val);
    onChange?.(e);
    onValueChange?.(val);
  };

  const handleClear = () => {
    setValue('');
    onValueChange?.('');
  };

  useEffect(() => {
    // 외부에서 value 변경시 input value도 변경
    setValue(value);
  }, [value]);

  if (disabled) {
    return (
      <input
        ref={ref}
        data-testid="input"
        className={classnames.input}
        disabled
        value={_value}
        {...props}
      />
    );
  }

  return (
    <>
      <input
        ref={ref}
        data-testid="input"
        className={combineClassNames(
          classnames.input,
          classnames.masking,
          size ? classnames[size] : ''
        )}
        value={_value}
        onChange={handleChange}
        {...props}
      />
      {_value && (
        <IconButton
          className={classnames.close_button}
          type="close"
          size="xs"
          variant="outline"
          onClick={handleClear}
        />
      )}
    </>
  );
});

export function TextField({
  className,
  disabled,
  isError = false,
  layout,
  size = 'xl',
  value,
  ...props
}: TextFieldProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [isActive, setActive] = useState<boolean>(!!value);

  const handleContainerClick = () => {
    // StateOverlay에 인해 input focus 방해받지 않도록 처리
    if (!disabled) {
      inputRef.current?.focus();
    }
  };

  const handleInputChange = (value: string | number) => {
    setActive(!!value);
  };

  return (
    <TextFieldContainer
      className={className}
      isActive={isActive}
      disabled={disabled}
      isError={isError}
      size={size}
      onClick={handleContainerClick}
    >
      <TextFieldLayout {...layout}>
        <Input
          ref={inputRef}
          disabled={disabled}
          value={value}
          size={size}
          onValueChange={handleInputChange}
          {...props}
        />
      </TextFieldLayout>
      {!disabled && <StateOverlay />}
    </TextFieldContainer>
  );
}

TextField.Container = TextFieldContainer;
TextField.Layout = TextFieldLayout;
TextField.Input = Input;
