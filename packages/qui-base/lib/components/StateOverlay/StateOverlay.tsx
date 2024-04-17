import { forwardRef } from 'react';
import { replaceClassName } from '../../utils';
import classNames from 'classnames';

interface StateOverlayProps {
  /**
   * HTML classname
   */
  className?: string;
  /**
   * 각 클래스명을 변환할 때 사용할 객체
   */
  classReplacer?: Record<string, string>;
  /**
   * CSS style
   */
  style?: React.CSSProperties;
  onClick?: () => void;
}

export const StateOverlay = forwardRef<HTMLButtonElement, StateOverlayProps>(
  function StateOverlay({ className, classReplacer, ...props }, ref) {
    return (
      <button
        ref={ref}
        className={replaceClassName(
          classNames('state_overlay', className),
          classReplacer
        )}
        {...props}
      />
    );
  }
);
