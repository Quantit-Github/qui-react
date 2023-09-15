import { ChangeEventHandler, InputHTMLAttributes, useState } from 'react';
import { VisuallyHidden } from 'react-aria';
import { styled } from 'styled-components';
import { getStateOverlayToken } from '../styles/tokens';

export interface ToggleProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange'> {
  /**
   * 자식 컴포넌트
   */
  children?: React.ReactNode | string;
  /**
   * 비활성화 유무
   *
   * @default false
   */
  disabled?: boolean;
  /**
   * 토글 상태
   *
   * TODO: Controlled Component로 강제 여부 검토
   *
   * @default false
   */
  flag?: boolean;
  /**
   *
   * @param {boolean} flag 토글 상태
   * @returns {void}
   */
  onChange: (flag: boolean) => void;
}

const ToggleStyle2 = styled.label<Pick<ToggleProps, 'disabled'>>`
  display: inline-flex;
  align-items: center;

  & rect {
  }
  & rect:nth-of-type(2) {
    stroke: blue;
    fill: none;
  }
  & circle {
    transition: all 0.3s;
    fill: white;
  }

  ${getStateOverlayToken(16)}
`;

export function Toggle({
  children,
  disabled = false,
  flag = false,
  onChange,
  ...props
}: ToggleProps) {
  const [isSelected, setSelected] = useState(flag);
  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    const _isSelected = e.target.checked;
    setSelected(_isSelected);
    onChange(_isSelected);
  };

  return (
    <ToggleStyle2
      style={{
        opacity: disabled ? 0.4 : 1,
      }}
    >
      <VisuallyHidden>
        <input
          disabled={disabled}
          type="checkbox"
          role="switch"
          onChange={handleChange}
          {...props}
        />
      </VisuallyHidden>
      <svg width={56} height={32} aria-hidden="true">
        <rect
          width={56}
          height={32}
          rx={16}
          fill={isSelected ? 'black' : 'gray'}
        />
        <circle cx={isSelected ? 40 : 16} cy={16} r={12} />
        {/* {isFocusVisible && (
          <rect x={1} y={1} width={54} height={30} rx={16} strokeWidth={2} />
        )} */}
      </svg>
      {children}
    </ToggleStyle2>
  );
}
