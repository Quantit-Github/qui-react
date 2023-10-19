import { css } from 'styled-components';
import { TabItemProps } from '../../../components/Tab/type';
import { getStateOverlayToken } from '../state-overlay';
import { tabToken } from './tab.token';

export const getTabDefaultStyle = () => {
  return css`
    list-style: none;
    display: flex;
  `;
};

export const getTabItemDefaultStyle = () => {
  return css`
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;

    user-select: none;
    padding: 0 12px;
    border: 1px solid;
    cursor: pointer;
    margin-left: -1px;

    &:first-child {
      border-top-left-radius: 8px;
      border-bottom-left-radius: 8px;
    }

    &:last-child {
      border-top-right-radius: 8px;
      border-bottom-right-radius: 8px;
    }

    ${({ theme }) => {
      const { off } = tabToken(theme);
      return css`
        color: ${off.label};
        border-color: ${off.outline};
      `;
    }}
  `;
};

export const getTabItemHeight = ({ $size }: TabItemProps) => {
  return css`
    height: ${$size === 'sm' ? '32px' : '40px'};
  `;
};

export const getTabItemChecked = ({ checked }: TabItemProps) => {
  return css`
    ${({ theme }) => {
      const { on } = tabToken(theme);
      if (checked) {
        return css`
          color: ${on.label};
          border-color: ${on.outline};
          border-right: 1px solid;
        `;
      }
    }}
  `;
};
