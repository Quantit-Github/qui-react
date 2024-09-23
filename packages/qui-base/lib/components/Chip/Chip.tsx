import classNames from 'classnames';
import { CSSProperties, ReactNode } from 'react';
import { StateOverlay } from '../StateOverlay';

interface ChipContainerProps {
  children: ReactNode;
  on?: boolean;
  style?: CSSProperties;
}

function ChipContainer(props: ChipContainerProps) {
  return (
    <div
      role="button"
      className={classNames('chip_container', props.on ? 'on' : '')}
      {...props}
    >
      {props.children}
    </div>
  );
}

interface ChipLayoutProps {
  leading?: ReactNode;
  content?: ReactNode;
  trailing?: ReactNode;
}

function ChipLayout(props: ChipLayoutProps) {
  return (
    <div className="chip_layout">
      {props.leading}
      {props.content}
      {props.trailing}
    </div>
  );
}

interface ChipProps {
  children?: ReactNode;
  layout?: ChipLayoutProps;
  on?: boolean;

  borderRadius?: number;
  maxWidth?: number;
  style?: CSSProperties;
}

export function Chip(props: ChipProps) {
  const { children, layout, on, borderRadius, maxWidth, style } = props;

  return (
    <ChipContainer on={on} style={{ ...style, borderRadius, maxWidth }}>
      {!children && layout && <ChipLayout {...layout} />}
      {children}
      <StateOverlay />
    </ChipContainer>
  );
}
