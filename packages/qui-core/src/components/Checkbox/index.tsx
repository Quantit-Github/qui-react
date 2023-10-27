import { ChangeEventHandler, useState } from 'react';
import { styled } from 'styled-components';
import {
  getStateOverlayToken,
  getCheckboxFrameToken,
  getCheckboxToken,
} from '../../styles/tokens';
import { CheckIcon, IndeterminateIcon } from '../../assets/icons';
import { Typography } from '../Typography';
import { CheckboxProps, CheckboxStyleProps } from './type';

const CheckboxStyle = styled.label<CheckboxStyleProps>`
  padding: 4px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  gap: 8px;

  ${({ disabled }) => !disabled && getStateOverlayToken(8)}
  ${({ disabled = false, checked, $indeterminate }) =>
    getCheckboxToken(disabled, checked, $indeterminate)};

  input {
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
`;

const CheckboxFrameStyle = styled.div<CheckboxStyleProps>`
  width: 24px;
  height: 24px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  ${({ disabled = false, checked, $indeterminate }) =>
    getCheckboxFrameToken(disabled, checked, $indeterminate)}
`;

export function Checkbox({
  children,
  disabled = false,
  $indeterminate = false,
  checked = false,
  onChange,
  ...props
}: CheckboxProps) {
  const [checkedState, setCheckedState] = useState(checked);
  const [indeterminateState, setIndeterminateState] = useState($indeterminate);
  const handleChange: ChangeEventHandler<HTMLInputElement> = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const _checked = e.target.checked;
    const _indeterminate = e.target.indeterminate;
    setCheckedState(_checked);
    setIndeterminateState(_indeterminate);
    onChange({
      checked: _checked,
      $indeterminate: _indeterminate,
    });
  };

  return (
    <CheckboxStyle
      disabled={disabled}
      $indeterminate={indeterminateState}
      checked={checkedState}
    >
      <input
        role="switch"
        type="checkbox"
        checked={checkedState}
        disabled={disabled}
        {...props}
        onChange={handleChange}
      />
      <CheckboxFrameStyle
        disabled={disabled}
        $indeterminate={indeterminateState}
        checked={checkedState}
      >
        {checkedState ? (
          <CheckIcon />
        ) : indeterminateState ? (
          <IndeterminateIcon />
        ) : null}
      </CheckboxFrameStyle>
      <Typography variant="bodyLarge">{children}</Typography>
    </CheckboxStyle>
  );
}
