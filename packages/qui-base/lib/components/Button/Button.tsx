import { combineClassNames } from '../../utils';
import { Icon } from '../Icon';
import { StateOverlay } from '../StateOverlay';
import classnames from './button.module.scss';
import { ButtonLayoutType, ButtonSizeType, ButtonVariantType } from './type';

interface ButtonContainerProps {
  /**
   * React Children.
   *
   * 해당 값이 prop으로 전달될 경우, layoutContent prop은 무시됨.
   *
   */
  children?: React.ReactNode;
  /**
   * HTML classname
   */
  className?: string;
  /**
   * 버튼 비활성화 여부
   */
  disabled?: boolean;
  /**
   * 버튼 너비값을 콘텐츠 크기에 맞출지 여부.
   *
   * 비활성화할 경우 버튼의 너비값은 100%로 설정됨.
   */
  fitContentWidth?: boolean;
  /**
   * 버튼 높이값 고정 여부.
   *
   * 활성화할 경우 콘텐츠에 의해 버튼의 높이가 변경되지 않음.
   */
  fixedHeight?: boolean;
  /**
   * 버튼 크기
   */
  size?: ButtonSizeType;
  /**
   * CSS style
   */
  style?: React.CSSProperties;
  /**
   * 버튼 스타일
   */
  variant?: ButtonVariantType;
  /**
   * 버튼 클릭 이벤트핸들러
   */
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

interface ButtonContentsLayoutProps {
  /**
   * The layout of the button.
   */
  layoutStyle?: ButtonLayoutType;
  /**
   * The leading component of the button.
   */
  leading?: React.ReactNode;
  /**
   * The main component of the button.
   */
  main?: React.ReactNode;
  /**
   * The trailing component of the button.
   */
  trailing?: React.ReactNode;
}

interface ButtonProps extends ButtonContainerProps {
  /**
   * The layout of the button.
   */
  layoutContent?: ButtonContentsLayoutProps;
}

function ButtonContainer({
  children,
  className,
  disabled,
  fitContentWidth = false,
  fixedHeight = false,
  size = 'xl',
  variant = 'primary',
  ...props
}: ButtonContainerProps) {
  return (
    <button
      className={combineClassNames(
        classnames.button_container,
        classnames[`${size}${fixedHeight ? '__fixed' : ''}`],
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
  layoutStyle = 'hug',
  leading,
  main,
  trailing,
  ...props
}: ButtonContentsLayoutProps) {
  return (
    <div
      className={combineClassNames(
        classnames.button_contents,
        classnames[layoutStyle]
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
  fixedHeight = false,
  size = 'xl',
  variant = 'primary',
  layoutContent,
  onClick,
  ...props
}: ButtonProps) {
  return (
    <ButtonContainer
      data-testid="button"
      disabled={disabled}
      fitContentWidth={fitContentWidth}
      fixedHeight={fixedHeight}
      size={size}
      variant={variant}
      onClick={onClick}
      {...props}
    >
      {children || <ButtonContentsLayout {...layoutContent} />}
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
      fixedHeight
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
