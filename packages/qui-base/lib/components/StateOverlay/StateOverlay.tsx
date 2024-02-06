import { forwardRef } from 'react';
import styles from './StateOverlay.module.scss';

interface StateOverlayProps {
  /**
   * CSS style
   */
  style?: React.CSSProperties;
  onClick?: () => void;
}

export const StateOverlay = forwardRef<HTMLButtonElement, StateOverlayProps>(
  function StateOverlay({ ...props }, ref) {
    return <button ref={ref} className={styles.state_overlay} {...props} />;
  }
);
