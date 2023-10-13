import { ChangeEventHandler, useState } from 'react';
import { styled } from 'styled-components';
import {
  getStateOverlayToken,
  getCheckboxFrameToken,
  getCheckboxToken,
} from '../../styles/tokens';
import { VisuallyHidden } from 'react-aria';
import CheckIcon from './CheckIcon';
import IndeterminateIcon from './IndeterminateIcon';
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
      <VisuallyHidden>
        <input
          role="switch"
          type="checkbox"
          checked={checkedState}
          disabled={disabled}
          {...props}
          onChange={handleChange}
        />
      </VisuallyHidden>
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
