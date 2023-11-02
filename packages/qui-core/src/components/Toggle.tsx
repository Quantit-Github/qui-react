import { ChangeEventHandler, useState } from 'react';
import { styled } from 'styled-components';
import { getStateOverlayToken, getToggleToken } from '../styles/tokens';

export interface ToggleProps {
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
   * @default false
   */
  flag: boolean;
  /**
   *
   * @param {boolean} flag 토글 상태
   * @returns {void}
   */
  onChange: (flag: boolean) => void;
}

interface SliderStyleProps extends Pick<ToggleProps, 'disabled'> {
  selected: boolean;
}

const ToggleStyle = styled.label<Pick<ToggleProps, 'disabled'>>`
  position: relative;
  display: inline-block;
  width: 56px;
  height: 32px;
  cursor: ${({ disabled }) => !disabled && 'pointer'};
  border-radius: 32px;

  > input {
    position: absolute;
    width: 1px;
    height: 1px;
    margin: -1px;
    border: 0;
    padding: 0;

    white-space: nowrap;
    clip-path: inset(100%);
    clip: rect(0 0 0 0);
    overflow: hidden;
    outline: 0;
    outline-offset: 0;
  }

  ${({ disabled }) => !disabled && getStateOverlayToken(32)}
`;

const SliderStyle = styled.span<SliderStyleProps>`
  border-radius: 32px;
  box-sizing: border-box;

  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  -webkit-transition: 0.2s;
  transition: 0.2s;

  // handle
  &::before {
    position: absolute;
    content: '';
    height: 24px;
    width: 24px;
    left: 4px;
    bottom: 4px;
    -webkit-transition: 0.2s;
    transition: 0.2s;
    border-radius: 50%;
  }

  ${({ disabled = false, selected }) => getToggleToken(disabled, selected)}
`;

export function Toggle({
  children,
  disabled = false,
  flag = false,
  onChange,
  ...props
}: ToggleProps) {
  const [selected, setSelected] = useState(flag);
  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    const _isSelected = e.target.checked;
    setSelected(_isSelected);
    onChange(_isSelected);
  };

  return (
    <ToggleStyle disabled={disabled}>
      <input
        role="switch"
        type="checkbox"
        checked={selected}
        disabled={disabled}
        {...props}
        onChange={handleChange}
      />
      <SliderStyle disabled={disabled} selected={selected} />
    </ToggleStyle>
  );
}
