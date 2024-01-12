import classnames from './state-overlay.module.scss';

interface StateOverlayProps {
  style?: React.CSSProperties;
}

export function StateOverlay({ style }: StateOverlayProps) {
  return <button className={classnames.state_overlay} style={style} />;
}