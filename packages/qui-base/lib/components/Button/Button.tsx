import classNames from 'classnames';
import { Icon } from '../Icon';
import { StateOverlay } from '../StateOverlay';
import {
  ButtonContainerProps,
  ButtonLayoutProps,
  ButtonProps,
  IconButtonProps,
} from './type';

function ButtonContainer({
  children,
  className,
  disabled,
  fitContentWidth = false,
  size = 'xl',
  variant = 'primary',
  ...props
}: ButtonContainerProps) {
  return (
    <button
      className={classNames(
        'button_container',
        size,
        disabled ? 'disabled' : variant,
        fitContentWidth ? 'fit_content' : '',
        className
      )}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
}

function ButtonLayout({
  type = 'hug',
  leading,
  main,
  trailing,
  ...props
}: ButtonLayoutProps) {
  return (
    <div className={classNames('button_contents', type)} {...props}>
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
  size,
  variant = 'primary',
  type = 'check',
  ...props
}: IconButtonProps) {
  return (
    <Button
      className={classNames('icon_button', `${size}__icon`, className)}
      size={size}
      variant={variant}
      {...props}
    >
      <Icon type={type} size={size} variant={variant} />
    </Button>
  );
}

Button.Container = ButtonContainer;
Button.Layout = ButtonLayout;
Button.Icon = IconButton;
