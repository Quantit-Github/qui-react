import { combineClassNames } from '../../utils';
import { Icon } from '../Icon';
import { StateOverlay } from '../StateOverlay';
import classnames from './button.module.scss';
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
      className={combineClassNames(
        classnames.button_container,
        classnames[size],
        !disabled ? classnames[variant] : classnames.disabled,
        fitContentWidth ? classnames.fit_content : '',
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
    <div
      className={combineClassNames(
        classnames.button_contents,
        classnames[type]
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
  onClick,
  ...props
}: ButtonProps) {
  return (
    <ButtonContainer
      data-testid="button"
      disabled={disabled}
      fitContentWidth={fitContentWidth}
      size={size}
      variant={variant}
      onClick={onClick}
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
      className={combineClassNames(
        classnames.icon_button,
        classnames[`${size}__icon`],
        className
      )}
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
