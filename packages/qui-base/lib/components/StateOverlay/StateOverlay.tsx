import { forwardRef } from 'react';

interface StateOverlayProps {
  /**
   * CSS style
   */
  style?: React.CSSProperties;
  onClick?: () => void;
}

export const StateOverlay = forwardRef<HTMLButtonElement, StateOverlayProps>(
  function StateOverlay({ ...props }, ref) {
    return <button ref={ref} className="state_overlay" {...props} />;
  }
);
