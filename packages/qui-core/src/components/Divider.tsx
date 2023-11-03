import { css, styled } from 'styled-components';
import { DefaultTheme } from 'styled-components/dist/types';
import { dividerToken } from '../styles/tokens';

type Hierarchy = 'low' | 'high';
type Direction = 'horizontal' | 'vertical';

export interface DividerProps {
  /**
   * 구분선 두께
   * @default low
   */
  hierarchy: Hierarchy;

  /**
   * 구분선 방향
   * @default horizontal
   */
  direction: Direction;
}

function getDividerStyle(
  hierarchy: Hierarchy,
  direction: Direction,
  theme: DefaultTheme
) {
  return css`
    width: ${direction === 'horizontal' ? '100%' : '1px'};
    height: ${direction === 'vertical'
      ? '100%'
      : hierarchy === 'low'
      ? '1px'
      : '8px'};
    background-color: ${direction === 'horizontal'
      ? hierarchy === 'high'
        ? dividerToken(theme).darken
        : dividerToken(theme).lighten
      : dividerToken(theme).lighten};
  `;
}

const DividerStyle = styled.div<DividerProps>`
  ${({ hierarchy, direction, theme }) =>
    getDividerStyle(hierarchy, direction, theme)}
`;

export function Divider({
  hierarchy = 'low',
  direction = 'horizontal',
  ...props
}: DividerProps) {
  return (
    <DividerStyle hierarchy={hierarchy} direction={direction} {...props} />
  );
}
