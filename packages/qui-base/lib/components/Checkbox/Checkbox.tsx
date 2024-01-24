import {
  ChangeEvent,
  forwardRef,
  useLayoutEffect,
  useRef,
  useState,
} from 'react';
import { Icon, StateOverlay } from '..';
import { combineClassNames } from '../../utils';
import classnames from './Checkbox.module.scss';
import {
  CheckboxContainerProps,
  CheckboxIconProps,
  CheckboxInputProps,
  CheckboxProps,
} from './type';

function classNameWithDisabled(className: string, disabled?: boolean) {
  return combineClassNames(className, disabled ? classnames.disabled : '');
}

function CheckboxContainer({ children, ...props }: CheckboxContainerProps) {
  return (
    <div
      data-testid="checkbox-container"
      className={classnames.checkbox_container}
      {...props}
    >
      {children}
    </div>
  );
}

function CheckboxIcon({ checked, disabled, indeterminate }: CheckboxIconProps) {
  const iconClassName = classNameWithDisabled(
    classnames.checkbox_icon,
    disabled
  );
  if (indeterminate) {
    return (
      <Icon.Indeterminate
        data-testid="indeterminate-icon"
        className={iconClassName}
      />
    );
  }
  if (checked) {
    return <Icon.Check data-testid="checked-icon" className={iconClassName} />;
  }
  return (
    <div
      data-testid="unchecked-icon"
      className={classNameWithDisabled(
        classnames.checkbox_icon__unchecked,
        disabled
      )}
    />
  );
}

const CheckboxInput = forwardRef<HTMLLabelElement, CheckboxInputProps>(
  function CheckboxInput(
    {
      children,
      checked = false,
      disabled = false,
      indeterminate = false,
      label,
      onChange,
      ...props
    },
    labelRef
  ) {
    const [_checked, setChecked] = useState<boolean>(checked);
    const [_indeterminate, setIndeterminate] = useState<boolean>(indeterminate);
    const inputRef = useRef<HTMLInputElement>(null);

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
      setChecked(e.target.checked);
      onChange?.(e);
      setIndeterminate(false);
    };

    useLayoutEffect(() => {
      if (inputRef.current) {
        inputRef.current.indeterminate = indeterminate;
        setIndeterminate(indeterminate);
      }
    }, [indeterminate]);

    useLayoutEffect(() => {
      setChecked(checked);
    }, [checked]);

    return (
      <label ref={labelRef} className={classnames.checkbox_input}>
        <CheckboxIcon
          checked={_checked}
          disabled={disabled}
          indeterminate={_indeterminate}
        />
        <input
          role="checkbox"
          type="checkbox"
          data-testid="checkbox"
          ref={inputRef}
          className={classnames.checkbox_input__inner}
          checked={_checked}
          disabled={disabled}
          onChange={handleInputChange}
          {...props}
        />
        {children || (
          <span
            className={classNameWithDisabled(
              classnames.checkbox_label,
              disabled
            )}
          >
            {label}
          </span>
        )}
      </label>
    );
  }
);

export function Checkbox({ disabled, ...props }: CheckboxProps) {
  const checkboxRef = useRef<HTMLLabelElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const handleClick = () => {
    checkboxRef.current?.click();
    buttonRef.current?.focus();
  };

  return (
    <CheckboxContainer onClick={handleClick}>
      <CheckboxInput ref={checkboxRef} disabled={disabled} {...props} />
      {!disabled && <StateOverlay ref={buttonRef} />}
    </CheckboxContainer>
  );
}

Checkbox.Container = CheckboxContainer;
Checkbox.Input = CheckboxInput;
Checkbox.Icon = CheckboxIcon;
