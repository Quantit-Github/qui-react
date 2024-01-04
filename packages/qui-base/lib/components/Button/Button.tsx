import { combineClassNames } from '../../utils';
import { StateOverlay } from '../StateOverlay';
import classnames from './button.module.scss';

export type ButtonVariantType = 'primary' | 'secondary' | 'ghost' | 'outline';

export type ButtonLayoutType = 'hug' | 'fill';

export type ButtonSizeType = 'xl' | 'lg' | 'md' | 'sm';

export type ButtonType = Exclude<
  `${ButtonSizeType}-${ButtonLayoutType}`,
  'md-fill' | 'sm-fill'
>;

export interface ButtonContainerProps {
  /**
   * @description The children of the button.
   * @default undefined
   * @type React.ReactNode | undefined
   */
  children?: React.ReactNode;
  disabled?: boolean;
  size?: ButtonSizeType;
  variant?: ButtonVariantType;
  /**
   * @description The click event handler.
   * @default undefined
   * @type React.MouseEventHandler<HTMLButtonElement> | undefined
   */
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export interface ButtonContentsLayoutProps {
  /**
   * @description The main content of the button.
   * @default undefined
   * @type React.ReactNode | undefined
   */
  children?: React.ReactNode;
  leadingContent?: React.ReactNode;
  trailingContent?: React.ReactNode;
  layout?: ButtonLayoutType;
}

export interface ButtonProps
  extends ButtonContainerProps,
    ButtonContentsLayoutProps {
  type?: ButtonType;
  style?: React.CSSProperties;
}

function ButtonContainer({
  children,
  disabled,
  size = 'xl',
  variant = 'primary',
  ...props
}: ButtonContainerProps) {
  return (
    <button
      className={combineClassNames(
        classnames.button_container,
        classnames[size],
        !disabled ? classnames[variant] : classnames.disabled
      )}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
}

function ButtonContentsLayout({
  children,
  leadingContent,
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
      {children}
      {trailingContent}
    </div>
  );
}

export function Button({
  children,
  disabled = false,
  leadingContent,
  trailingContent,
  variant = 'primary',
  type = 'xl-hug',
  onClick,
  ...props
}: ButtonProps) {
  const [size, layout] = type.split('-') as [ButtonSizeType, ButtonLayoutType];

  return (
    <ButtonContainer
      disabled={disabled}
      size={size}
      variant={variant}
      onClick={onClick}
      {...props}
    >
      <ButtonContentsLayout
        leadingContent={leadingContent}
        trailingContent={trailingContent}
        layout={layout}
      >
        {children}
      </ButtonContentsLayout>
      {!disabled && <StateOverlay />}
    </ButtonContainer>
  );
}

Button.Container = ButtonContainer;
Button.Contents = ButtonContentsLayout;
