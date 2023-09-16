import { css } from 'styled-components';
import { getButtonActiveToken } from './button-active.token';
import { buttonDisabledToken } from './button-common.token';
import { ButtonActiveType } from './button.token';

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
