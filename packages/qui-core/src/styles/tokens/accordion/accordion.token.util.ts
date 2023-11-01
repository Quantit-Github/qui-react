import { DefaultTheme, css } from 'styled-components';
import { accordionToken } from './accordion.token';
import { getStateOverlayToken } from '../state-overlay';

export function getAccordionTokenVariant(
  isDisabled: boolean,
  isOpen: boolean,
  theme: DefaultTheme
) {
  const { closed, open, disabled } = accordionToken(theme);
  return isDisabled ? disabled : isOpen ? open : closed;
}

export function getAccordionToken(disabled: boolean, open: boolean) {
  return css`
    ${({ theme }) => {
      const variant = getAccordionTokenVariant(disabled, open, theme);

      return css`
        color: ${variant.elements};
        background-color: ${variant.container};
        outline: 1px solid ${variant.outline};
        cursor: ${!disabled && 'pointer'};
        ${!disabled && getStateOverlayToken(12)}
      `;
    }}
  `;
}

export function getAccordionSubInfoRowToken(disabled: boolean, open: boolean) {
  return css`
    ${({ theme }) => {
      const variant = getAccordionTokenVariant(disabled, open, theme);

      return css`
        span {
          color: ${variant.elements_lighten};
        }
        div {
          background-color: ${variant.elements_brightest};
        }
      `;
    }}
  `;
}

export function getAccordionDividerToken(disabled: boolean, open: boolean) {
  return css`
    ${({ theme }) => {
      const variant = getAccordionTokenVariant(disabled, open, theme);

      return css`
        background-color: ${variant.elements_brightest};
      `;
    }}
  `;
}

export function getAccordionSubInfoToken(ellipsis?: boolean) {
  if (ellipsis)
    return css`
      overflow: hidden;
      text-overflow: ellipsis;
    `;
}
