import { css } from 'styled-components';
import {
  TabDividerStyleProps,
  TabItemProps,
  TabListStyleProps,
} from '../../../components/Tab/type';
import { tabToken } from './tab.token';
import { getStateOverlayToken } from '../state-overlay';

export const getTabDefaultStyle = ({ $size }: TabListStyleProps) => {
  return css`
    list-style: none;
    display: flex;
    height: ${$size === 'sm' ? '32px' : '40px'};
  `;
};

export const getTabItemDefaultStyle = () => {
  return css`
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    box-sizing: border-box;

    user-select: none;
    cursor: pointer;

    &:first-child {
      border-top-left-radius: 8px;
      border-bottom-left-radius: 8px;
    }

    &:last-child {
      border-top-right-radius: 8px;
      border-bottom-right-radius: 8px;
    }

    ${getStateOverlayToken(0)}

    ${({ theme }) => {
      const { off } = tabToken(theme);
      return css`
        color: ${off.label};
        border-top: 1px solid ${off.outline};
        border-bottom: 1px solid ${off.outline};

        &:first-child {
          border-left: 1px solid ${off.outline};
        }

        &:last-child {
          border-right: 1px solid ${off.outline};
        }
      `;
    }}
  `;
};

export const getTabItemChecked = ({ checked }: TabItemProps) => {
  return css`
    ${({ theme }) => {
      const { on } = tabToken(theme);
      if (checked) {
        return css`
          color: ${on.label};
          border-color: ${on.outline} !important;
        `;
      }
    }}
  `;
};

export const getTabDividerStyle = ({
  $index,
  selected,
}: TabDividerStyleProps) => {
  return css`
    ${({ theme }) => {
      const { on, off } = tabToken(theme);
      const variant = $index === selected || $index === selected + 1 ? on : off;
      return css`
        background-color: ${variant.outline};
      `;
    }}
  `;
};
