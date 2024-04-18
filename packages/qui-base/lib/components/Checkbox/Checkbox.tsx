import classNames from 'classnames';
import {
  ChangeEvent,
  forwardRef,
  useLayoutEffect,
  useRef,
  useState,
} from 'react';
import { Icon, StateOverlay } from '..';
import {
  CheckboxContainerProps,
  CheckboxIconProps,
  CheckboxInputProps,
  CheckboxProps,
} from './type';
import { replaceClassName } from '../../utils';

function classNameWithDisabled(className: string, disabled?: boolean) {
  return classNames(className, disabled ? 'disabled' : '');
}

function CheckboxContainer({
  children,
  className,
  classReplacer,
  ...props
}: CheckboxContainerProps) {
  return (
    <div
      data-testid="checkbox-container"
      className={replaceClassName(
        classNames('checkbox_container', className),
        classReplacer
      )}
      {...props}
    >
      {children}
    </div>
  );
}

function CheckboxIcon({
  checked,
  className,
  classReplacer,
  disabled,
  indeterminate,
}: CheckboxIconProps) {
  const createClassName = (staticClassName: string) =>
    replaceClassName(
      classNameWithDisabled(classNames(staticClassName, className), disabled),
      classReplacer
    );
  const iconClassName = createClassName('checkbox_icon');
  const uncheckedClassName = createClassName('checkbox_icon__unchecked');

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

  return <div data-testid="unchecked-icon" className={uncheckedClassName} />;
}

const CheckboxInput = forwardRef<HTMLLabelElement, CheckboxInputProps>(
  function CheckboxInput(
    {
      children,
      iconClassName,
      className,
      classReplacer,
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
      <label
        ref={labelRef}
        className={replaceClassName(
          classNames('checkbox_input', className),
          classReplacer
        )}
      >
        <CheckboxIcon
          checked={_checked}
          className={iconClassName}
          classReplacer={classReplacer}
          disabled={disabled}
          indeterminate={_indeterminate}
        />
        <input
          role="checkbox"
          type="checkbox"
          data-testid="checkbox"
          ref={inputRef}
          className={replaceClassName('checkbox_input__inner', classReplacer)}
          checked={_checked}
          disabled={disabled}
          onChange={handleInputChange}
          {...props}
        />
        {children || (
          <span
            className={replaceClassName(
              classNameWithDisabled('checkbox_label', disabled),
              classReplacer
            )}
          >
            {label}
          </span>
        )}
      </label>
    );
  }
);

export function Checkbox({
  disabled,
  containerClassName,
  className,
  classReplacer,
  ...props
}: CheckboxProps) {
  const checkboxRef = useRef<HTMLLabelElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const handleClick = () => {
    checkboxRef.current?.click();
    buttonRef.current?.focus();
  };

  return (
    <CheckboxContainer
      className={containerClassName}
      classReplacer={classReplacer}
      onClick={handleClick}
    >
      <CheckboxInput ref={checkboxRef} disabled={disabled} {...props} />
      {!disabled && <StateOverlay ref={buttonRef} />}
    </CheckboxContainer>
  );
}

Checkbox.Container = CheckboxContainer;
Checkbox.Input = CheckboxInput;
Checkbox.Icon = CheckboxIcon;
