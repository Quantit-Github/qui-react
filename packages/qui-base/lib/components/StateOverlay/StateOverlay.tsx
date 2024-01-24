import { forwardRef } from 'react';
import classnames from './StateOverlay.module.scss';

interface StateOverlayProps {
  /**
   * CSS style
   */
  style?: React.CSSProperties;
  onClick?: () => void;
}

export const StateOverlay = forwardRef<HTMLButtonElement, StateOverlayProps>(
  function StateOverlay({ ...props }, ref) {
    return <button ref={ref} className={classnames.state_overlay} {...props} />;
  }
);
