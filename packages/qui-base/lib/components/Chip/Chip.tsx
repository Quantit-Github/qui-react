import classNames from 'classnames';
import { CSSProperties, forwardRef, ReactNode, Ref } from 'react';
import { StateOverlay } from '../StateOverlay';

interface ChipContainerProps {
  children: ReactNode;
  on?: boolean;
  style?: CSSProperties;
  onClick?: () => void;
}

const ChipContainer = forwardRef(
  (props: ChipContainerProps, ref: Ref<HTMLDivElement>) => {
    return (
      <div
        ref={ref}
        role="button"
        className={classNames('chip_container', props.on ? 'on' : '')}
        {...props}
      >
        {props.children}
      </div>
    );
  }
);

interface ChipLayoutProps {
  leading?: ReactNode;
  content?: ReactNode;
  trailing?: ReactNode;
  style?: CSSProperties;
}

function ChipLayout(props: ChipLayoutProps) {
  const { leading, content, trailing, ...rest } = props;
  return (
    <div className="chip_layout" {...rest}>
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
  onClick?: () => void;
}

export const Chip = forwardRef((props: ChipProps, ref: Ref<HTMLDivElement>) => {
  const {
    children,
    layout,
    on,
    borderRadius,
    maxWidth,
    style,
    onClick,
    ...rest
  } = props;

  return (
    <ChipContainer
      ref={ref}
      on={on}
      onClick={onClick}
      style={{ ...style, borderRadius, maxWidth }}
      {...rest}
    >
      {!children && layout && <ChipLayout {...layout} />}
      {children}
      <StateOverlay />
    </ChipContainer>
  );
});
