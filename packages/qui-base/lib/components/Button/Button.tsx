import classNames from 'classnames';
import { Icon } from '../Icon';
import { StateOverlay } from '../StateOverlay';
import {
  ButtonContainerProps,
  ButtonLayoutProps,
  ButtonProps,
  IconButtonProps,
} from './type';
import { replaceClassName } from '../../utils';

function ButtonContainer({
  children,
  className,
  classReplacer,
  disabled,
  fitContentWidth = false,
  size = 'xl',
  variant = 'primary',
  ...props
}: ButtonContainerProps) {
  return (
    <button
      className={replaceClassName(
        classNames(
          'button_container',
          size,
          disabled ? 'disabled' : variant,
          fitContentWidth ? 'fit_content' : '',
          className
        ),
        classReplacer
      )}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
}

function ButtonLayout({
  className,
  classReplacer,
  type = 'hug',
  leading,
  main,
  size,
  trailing,
  ...props
}: ButtonLayoutProps) {
  return (
    <div
      className={replaceClassName(
        classNames('button_contents', size, type, className),

        classReplacer
      )}
      {...props}
    >
      {leading}
      {main}
      {trailing}
    </div>
  );
}

export function Button({
  children,
  disabled = false,
  fitContentWidth = false,
  size = 'xl',
  variant = 'primary',
  layout,
  ...props
}: ButtonProps) {
  return (
    <ButtonContainer
      data-testid="button"
      disabled={disabled}
      fitContentWidth={fitContentWidth}
      size={size}
      variant={variant}
      {...props}
    >
      {children || <ButtonLayout {...layout} />}
      {!disabled && <StateOverlay />}
    </ButtonContainer>
  );
}

export function IconButton({
  className,
  classReplacer,
  iconClassName,
  size,
  variant = 'primary',
  type = 'check',
  ...props
}: IconButtonProps) {
  return (
    <Button
      className={replaceClassName(
        classNames('icon_button', `${size}__icon`, className),
        classReplacer
      )}
      classReplacer={classReplacer}
      size={size}
      variant={variant}
      {...props}
    >
      <Icon type={type} size={size} variant={variant} {...iconClassName} />
    </Button>
  );
}

Button.Container = ButtonContainer;
Button.Layout = ButtonLayout;
Button.Icon = IconButton;
