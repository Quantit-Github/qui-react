import {
  ChangeEvent,
  HTMLInputTypeAttribute,
  ReactElement,
  ReactNode,
  forwardRef,
  useEffect,
  useRef,
  useState,
} from 'react';
import { IconButton, StateOverlay } from '..';
import { combineClassNames } from '../../utils';
import classnames from './TextField.module.scss';

interface TextFieldContainerProps {
  className?: string;
  children?: ReactNode;
  disabled?: boolean;
  isActive?: boolean;
  isError?: boolean;
  onClick?: () => void;
}

interface TextFieldCustomLayoutProps {
  leading?: ReactNode;
  children: ReactElement;
  trailing?: ReactNode;
}

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  onValueChange?: (value: string | number) => void;
}

interface TextFieldProps {
  className?: string;
  customLayout?: Omit<TextFieldCustomLayoutProps, 'children'>;
  disabled?: boolean;
  /**
   * 에러 여부.
   *
   * @default false
   */
  isError?: boolean;
  placeholder?: string;
  /**
   * input에 입력시킬 값.
   *
   * 초기값 지정 혹은 값을 컴포넌트 외부에서 관리할 목적으로 활용.
   */
  value?: string | number;
  type?: HTMLInputTypeAttribute;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

function TextFieldContainer({
  className,
  children,
  disabled,
  isActive,
  isError,
  onClick,
  ...props
}: TextFieldContainerProps) {
  return (
    <div
      role="textbox"
      className={combineClassNames(
        classnames.container,
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

function TextFieldCustomLayout({
  leading,
  children,
  trailing,
}: TextFieldCustomLayoutProps) {
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
  { value = '', disabled, onChange, onValueChange, ...props },
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
      <input className={classnames.input} disabled value={_value} {...props} />
    );
  }

  return (
    <>
      <input
        ref={ref}
        className={classnames.input}
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
  customLayout,
  disabled,
  isError = false,
  value,
  onChange,
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
      onClick={handleContainerClick}
    >
      <TextFieldCustomLayout {...customLayout}>
        <Input
          ref={inputRef}
          disabled={disabled}
          value={value}
          onValueChange={handleInputChange}
          {...props}
        />
      </TextFieldCustomLayout>
      {!disabled && <StateOverlay />}
    </TextFieldContainer>
  );
}

TextField.Container = TextFieldContainer;
TextField.CustomLayout = TextFieldCustomLayout;
TextField.Input = Input;
