import { combineClassNames } from '../../utils';
import { Icon } from '../Icon';
import { StateOverlay } from '../StateOverlay';
import classnames from './button.module.scss';

type ButtonVariantType = 'primary' | 'secondary' | 'ghost' | 'outline';

type ButtonLayoutType = 'hug' | 'fill';

type ButtonSizeType = 'xl' | 'lg' | 'md' | 'sm' | 'xs';

interface ButtonContainerProps {
  /**
   * @description The children of the button.
   * @default undefined
   * @type React.ReactNode | undefined
   */
  children?: React.ReactNode;
  className?: string;
  disabled?: boolean;
  fitContentWidth?: boolean;
  /**
   * @description Whether the button's height should overflow.
   * @default false
   */
  fixedSize?: boolean;
  size?: ButtonSizeType;
  style?: React.CSSProperties;
  variant?: ButtonVariantType;
  /**
   * @description The click event handler.
   * @default undefined
   * @type React.MouseEventHandler<HTMLButtonElement> | undefined
   */
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

interface ButtonContentsLayoutProps {
  leadingContent?: React.ReactNode;
  mainContent?: React.ReactNode;
  trailingContent?: React.ReactNode;
  layout?: ButtonLayoutType;
}

interface ButtonProps extends ButtonContainerProps, ButtonContentsLayoutProps {}

function ButtonContainer({
  children,
  className,
  disabled,
  fitContentWidth = false,
  fixedSize = false,
  size = 'xl',
  variant = 'primary',
  ...props
}: ButtonContainerProps) {
  return (
    <button
      className={combineClassNames(
        classnames.button_container,
        classnames[`${size}${fixedSize ? '__fixed' : ''}`],
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

function ButtonContentsLayout({
  leadingContent,
  mainContent,
  trailingContent,
  layout = 'hug',
  ...props
}: ButtonContentsLayoutProps) {
  return (
    <div
      className={combineClassNames(
        classnames.button_contents,
        classnames[layout]
      )}
      {...props}
    >
      {leadingContent}
      {mainContent}
      {trailingContent}
    </div>
  );
}

export function Button({
  children,
  disabled = false,
  leadingContent,
  mainContent,
  trailingContent,
  fitContentWidth = false,
  fixedSize = false,
  layout = 'hug',
  size = 'xl',
  variant = 'primary',
  onClick,
  ...props
}: ButtonProps) {
  // const [size, layout] = type.split('-') as [ButtonSizeType, ButtonLayoutType];
  return (
    <ButtonContainer
      data-testid="button"
      disabled={disabled}
      fitContentWidth={fitContentWidth}
      fixedSize={fixedSize}
      size={size}
      variant={variant}
      onClick={onClick}
      {...props}
    >
      {children || (
        <ButtonContentsLayout
          leadingContent={leadingContent}
          mainContent={mainContent}
          trailingContent={trailingContent}
          layout={layout}
        />
      )}
      {!disabled && <StateOverlay />}
    </ButtonContainer>
  );
}

interface IconButtonProps
  extends Pick<
    ButtonProps,
    | 'children'
    | 'className'
    | 'disabled'
    | 'size'
    | 'style'
    | 'variant'
    | 'onClick'
  > {}

export function IconButton({
  size,
  variant = 'primary',
  ...props
}: IconButtonProps) {
  return (
    <Button
      className={combineClassNames(classnames.button_icon)}
      fixedSize
      size={size}
      variant={variant}
      {...props}
    >
      <Icon type="smile" size={size} variant={variant} />
    </Button>
  );
}

Button.Container = ButtonContainer;
Button.Contents = ButtonContentsLayout;
Button.Icon = IconButton;
