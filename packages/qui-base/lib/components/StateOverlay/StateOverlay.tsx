import classnames from './state-overlay.module.scss';

interface StateOverlayProps {
  /**
   * CSS style
   */
  style?: React.CSSProperties;
}

export function StateOverlay({ style, ...props }: StateOverlayProps) {
  return (
    <button className={classnames.state_overlay} style={style} {...props} />
  );
}
