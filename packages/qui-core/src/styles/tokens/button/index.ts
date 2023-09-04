import { css } from 'styled-components';
import { getButtonActiveToken } from './button-active.token';
import { ButtonActiveType } from './button.token';
import { buttonDisabledToken } from './button-disabled.token';

export function getButtonToken(
  buttonType: ButtonActiveType,
  disabled: boolean
) {
  return css`
    background-color: transparent;

    ${() => {
      if (disabled) {
        return buttonDisabledToken;
      }
      return getButtonActiveToken(buttonType);
    }}
  `;
}
