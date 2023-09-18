import { ChangeEventHandler, useState } from 'react';
import { css, styled } from 'styled-components';
import { getStateOverlayToken } from '../styles/tokens';
import { swtichDisabledToken } from '../styles/tokens/switch/common.token';
import {
  toggleOffToken,
  toggleOnToken,
} from '../styles/tokens/switch/toggle.token';

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

interface SliderStyleProps extends Pick<ToggleProps, 'disabled'> {
  isSelected: boolean;
}

const ToggleStyle = styled.label<Pick<ToggleProps, 'disabled'>>`
  position: relative;
  display: inline-block;
  width: 56px;
  height: 32px;

  & > input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  ${({ disabled }) => !disabled && getStateOverlayToken(32)}
`;

const SliderStyle = styled.span<SliderStyleProps>`
  background-color: #ccc;
  border-radius: 32px;
  box-sizing: border-box;
  cursor: pointer;

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
    background-color: white;
    -webkit-transition: 0.2s;
    transition: 0.2s;
    border-radius: 50%;
  }

  ${({ disabled, isSelected }) => {
    if (isSelected)
      return css`
        &:before {
          // handle
          -webkit-transform: translateX(24px);
          -ms-transform: translateX(24px);
          transform: translateX(24px);
        }

        ${toggleOnToken}
      `;
    if (disabled) {
      return css`
        ${swtichDisabledToken}
      `;
    }
    return toggleOffToken;
  }}
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
    <ToggleStyle disabled={disabled}>
      <input
        role="switch"
        type="checkbox"
        checked={isSelected}
        disabled={disabled}
        {...props}
        onChange={handleChange}
      />
      <SliderStyle disabled={disabled} isSelected={isSelected} />
    </ToggleStyle>
  );
}
