import classnames from './button.module.css';

export interface ButtonProps {
  /**
   * The content of the button.
   *
   * @default undefined
   */
  children?: React.ReactNode;
}

export function Button({ children }: ButtonProps) {
  return <button className={classnames.button}>{children}</button>;
}
