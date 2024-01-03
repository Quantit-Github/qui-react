import { StateOverlay } from '../StateOverlay';
import classnames from './button.module.scss';

export type ButtonFormatType = 'hug' | 'fill';

export type ButtonSizeType = 'xl' | 'lg' | 'md' | 'sm';

export type ButtonType = Exclude<
  `${ButtonSizeType}-${ButtonFormatType}`,
  'md-fill' | 'sm-fill'
>;

export interface ButtonContainerProps {
  /**
   * @description The children of the button.
   * @default undefined
   * @type React.ReactNode | undefined
   */
  children?: React.ReactNode;
  /**
   * @description The click event handler.
   * @default undefined
   * @type React.MouseEventHandler<HTMLButtonElement> | undefined
   */
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export interface ButtonContentsProps {
  /**
   * @description The main content of the button.
   * @default undefined
   * @type React.ReactNode | undefined
   */
  content?: React.ReactNode;
  leadingContent?: React.ReactNode;
  trailingContent?: React.ReactNode;
  type?: ButtonType;
}

export interface ButtonProps
  extends ButtonContainerProps,
    ButtonContentsProps {}

function combineClassNames(...classNames: string[]) {
  return classNames.join(' ');
}

function ButtonContainer({ children, ...props }: ButtonContainerProps) {
  return (
    <button className={classnames.button_container} {...props}>
      {children}
    </button>
  );
}

function ButtonContents({
  content,
  leadingContent,
  trailingContent,
  type = 'xl-hug',
  ...props
}: ButtonContentsProps) {
  const [sizeClassName, formatClassName] = type.split('-') as [
    ButtonSizeType,
    ButtonFormatType
  ];

  return (
    <button
      className={combineClassNames(
        classnames.button_contents,
        classnames[sizeClassName],
        classnames[formatClassName]
      )}
      {...props}
    >
      {leadingContent}
      {content}
      {trailingContent}
    </button>
  );
}

export function Button({ onClick, ...props }: ButtonProps) {
  return (
    <ButtonContainer onClick={onClick} {...props}>
      <ButtonContents {...props} />
      <StateOverlay />
    </ButtonContainer>
  );
}

Button.Container = ButtonContainer;
Button.Contents = ButtonContents;
