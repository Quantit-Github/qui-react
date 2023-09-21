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
  hierarachy: Hierarchy;

  /**
   * 구분선 방향
   * @default horizontal
   */
  direction: Direction;
}

function getDividerStyle(
  hierarachy: Hierarchy,
  direction: Direction,
  theme: DefaultTheme
) {
  return css`
    width: ${direction === 'horizontal' ? '100%' : '1px'};
    height: ${direction === 'vertical'
      ? '100%'
      : hierarachy === 'low'
      ? '1px'
      : '8px'};
    background-color: ${direction === 'horizontal'
      ? hierarachy === 'high'
        ? dividerToken(theme).darken
        : dividerToken(theme).lighten
      : dividerToken(theme).lighten};
  `;
}

export function DividerHorizontal({
  hierarachy = 'low',
  direction = 'horizontal',
}: DividerProps) {
  return <DividerStyle hierarachy={hierarachy} direction={direction} />;
}

const DividerStyle = styled.div<DividerProps>`
  ${({ hierarachy, direction, theme }) =>
    getDividerStyle(hierarachy, direction, theme)}
`;
