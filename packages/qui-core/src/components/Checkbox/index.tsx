import { ChangeEventHandler, useState } from 'react';
import { styled } from 'styled-components';
import { getCheckboxFrameToken, getCheckboxToken } from '../../styles/tokens';
import { CheckIcon, IndeterminateIcon } from '../../assets/icons';
import { CheckboxProps, CheckboxStyleProps } from './type';
import { Typography } from '../Typography';

const CheckboxStyle = styled.label<CheckboxStyleProps>`
  border-radius: 4px;
  display: flex;
  align-items: center;
  gap: 4px;

  ${({ disabled = false, checked = false, $indeterminate = false }) =>
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
  min-width: 24px;
  width: 24px;
  height: 24px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;

  svg {
    width: 20px;
    height: 20px;
  }

  ${({ disabled = false, checked = false, $indeterminate = false }) =>
    getCheckboxFrameToken(disabled, checked, $indeterminate)}
`;

const CheckboxLabelStyle = styled(Typography)`
  margin: 0 4px;
`;

export function Checkbox({
  children,
  disabled = false,
  $indeterminate = false,
  checked = false,
  onChange,
  $bold,
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
      <CheckboxLabelStyle variant="bodyLarge" bold={$bold}>
        {children}
      </CheckboxLabelStyle>
    </CheckboxStyle>
  );
}
