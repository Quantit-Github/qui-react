import { ChangeEventHandler, useState } from 'react';
import { styled } from 'styled-components';
import {
  getCheckboxFrameToken,
  getCheckboxIconToken,
  getCheckboxToken,
} from '../../styles/tokens';
import { CheckboxProps, CheckboxStyleProps } from './type';
import { Typography } from '../Typography';
import { Icon } from '../Button';

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

  ${({ disabled = false, checked = false, $indeterminate = false }) =>
    getCheckboxFrameToken(disabled, checked, $indeterminate)}
`;

const CheckboxLabelStyle = styled(Typography)`
  margin: 0 4px;
`;

const CheckboxIconStyle = styled(Icon)<Pick<CheckboxStyleProps, 'disabled'>>`
  ${({ disabled = false }) => getCheckboxIconToken(disabled)}
`;

export function Checkbox({
  children,
  disabled = false,
  $indeterminate = false,
  checked = false,
  onChange,
  $bold,
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
      {...props}
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
        {(checkedState || indeterminateState) && (
          <CheckboxIconStyle type={checkedState ? 'check' : 'indeterminate'} />
        )}
      </CheckboxFrameStyle>
      <CheckboxLabelStyle variant="bodyLarge" bold={$bold}>
        {children}
      </CheckboxLabelStyle>
    </CheckboxStyle>
  );
}
