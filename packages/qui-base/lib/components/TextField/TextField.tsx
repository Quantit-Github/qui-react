import classNames from 'classnames';
import {
  ChangeEvent,
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from 'react';
import { IconButton, StateOverlay } from '..';
import {
  InputProps,
  TextFieldContainerProps,
  TextFieldLayoutProps,
  TextFieldProps,
} from './type';

export function TextFieldContainer({
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
      className={classNames(
        'textfield_container',
        size,
        disabled ? 'disabled' : '',
        isActive ? 'active' : '',
        isError ? 'error' : '',
        className
      )}
      onClick={onClick}
      {...props}
    >
      {children}
    </div>
  );
}

export function TextFieldLayout({
  disabled,
  leading,
  children,
  trailing,
}: TextFieldLayoutProps) {
  return (
    <div className={classNames('custom_layout', disabled ? 'disabled' : '')}>
      {leading && <div className="custom_layout_item">{leading}</div>}
      <div
        className={classNames('custom_layout_item', 'custom_layout_item__full')}
      >
        {children}
      </div>
      {trailing && <div className="custom_layout_item">{trailing}</div>}
    </div>
  );
}

export const Input = forwardRef<HTMLInputElement, InputProps>(function Input(
  { disabled, value = '', size = 'xl', onChange, onClear, ...props },
  ref
) {
  const [_value, setValue] = useState(value);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const val = e.currentTarget.value;
    setValue?.(val);
    onChange?.(e);
  };

  const handleClear = () => {
    setValue('');
    onClear?.();
  };

  useEffect(() => {
    // 외부에서 value 변경 시 내부 value(_value) 동기화
    setValue(value);
  }, [value]);

  if (disabled) {
    return (
      <input
        ref={ref}
        data-testid="input"
        className="input"
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
        className={classNames('input', 'masking', size)}
        value={_value}
        onChange={handleChange}
        {...props}
      />
      {!!_value && onClear && (
        <IconButton
          className="close_button"
          type="close"
          size="xs"
          variant="outline"
          onClick={handleClear}
        />
      )}
    </>
  );
});

export const TextField = forwardRef((props: TextFieldProps, ref) => {
  const {
    className,
    disabled,
    isError = false,
    layout,
    size = 'xl',
    value,
    ...rest
  } = props;
  const inputRef = useRef<HTMLInputElement>(null);
  const [isActive, setActive] = useState<boolean>(false);

  const handleContainerClick = () => {
    // StateOverlay에 인해 input focus 방해받지 않도록 처리
    if (!disabled) {
      inputRef.current?.focus();
    }
  };

  const handleFocus = () => {
    setActive(true);
  };

  const handleBlur = () => {
    setActive(false);
  };

  useImperativeHandle(ref, () => ({
    focus: () => {
      inputRef.current?.focus();
    },
    // 다른 메서드 추가 가능
  }));

  return (
    <TextFieldContainer
      className={className}
      disabled={disabled}
      isActive={isActive}
      isError={isError}
      size={size}
      onClick={handleContainerClick}
    >
      <TextFieldLayout disabled={disabled} {...layout}>
        <Input
          ref={inputRef}
          disabled={disabled}
          value={value}
          size={size}
          onFocus={handleFocus}
          onBlur={handleBlur}
          {...rest}
        />
      </TextFieldLayout>
      {!disabled && <StateOverlay />}
    </TextFieldContainer>
  );
});
