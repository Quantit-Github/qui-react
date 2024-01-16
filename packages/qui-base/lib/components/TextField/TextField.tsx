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
  onClick?: () => void;
}

interface TextFieldCustomLayoutProps {
  leading?: ReactNode;
  children: ReactElement;
  trailing?: ReactNode;
}

interface InputProps {
  type?: HTMLInputTypeAttribute;
  placeholder?: string;
  value?: string | number;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

interface TextFieldProps {
  className?: string;
  type?: HTMLInputTypeAttribute;
  placeholder?: string;
  /**
   * input에 입력시킬 값.
   *
   * 초기값 지정 혹은 값을 컴포넌트 외부에서 관리할 목적으로 활용.
   */
  value?: string | number;
  customLayout?: Omit<TextFieldCustomLayoutProps, 'children'>;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

function TextFieldContainer({
  className,
  children,
  onClick,
  ...props
}: TextFieldContainerProps) {
  return (
    <div
      role="textbox"
      className={combineClassNames(classnames.container, className)}
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
  { value = '', onChange, ...props },
  ref
) {
  const [_value, setValue] = useState(value);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue?.(e.currentTarget.value);
    onChange?.(e);
  };

  const handleClear = () => {
    setValue('');
  };

  useEffect(() => {
    setValue(value);
  }, [value]);

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
  onChange,
  ...props
}: TextFieldProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleContainerClick = () => {
    // StateOverlay에 인해 input focus 방해받지 않도록 처리
    inputRef.current?.focus();
  };

  return (
    <TextFieldContainer className={className} onClick={handleContainerClick}>
      <TextFieldCustomLayout {...customLayout}>
        <Input ref={inputRef} {...props} />
      </TextFieldCustomLayout>
      <StateOverlay />
    </TextFieldContainer>
  );
}

TextField.Container = TextFieldContainer;
TextField.CustomLayout = TextFieldCustomLayout;
TextField.Input = Input;
