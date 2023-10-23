import { CSSProp, css } from 'styled-components';
import { DeviceSizeProps } from './size.type';

export class DeviceSize implements DeviceSizeProps {
  constructor(
    public mainWidth: number,
    public max?: number,
    public min?: number
  ) {}

  /**
   * 해당 size의 max-width media query string을 반환합니다.
   * max가 없는 경우 빈 string을 반환합니다.
   * @example
   * theme.size.small.maxPx // '(min-width: 904px)'
   */
  get maxPx(): string {
    if (this.max === undefined) {
      return '';
    } else {
      return `(max-width: ${this.max}px)`;
    }
  }

  /**
   * 해당 size의 min-width media query string을 반환합니다.
   * min이 없는 경우 빈 string을 반환합니다.
   * @example
   * theme.size.small.minPx // '(min-width: 600px)'
   */
  get minPx(): string {
    if (this.min === undefined) {
      return '';
    } else {
      return `(min-width: ${this.min}px)`;
    }
  }

  /**
   * 해당 size의 media query string을 반환합니다.
   * @example
   * theme.size.small.mediaQueryString // '(max-width: 904px) and (min-width: 600px)'
   */
  get mediaQueryString(): string {
    if (this.maxPx.length > 0) {
      if (this.minPx.length > 0) {
        return `${this.maxPx} and ${this.minPx}`;
      }
      return this.maxPx;
    }
    return this.minPx;
  }

  /**
   * 해당 size에만 적용되는 media query를 사용해서
   * template literal을 받아 css prop으로 반환합니다.
   * @example
   * ${({ theme }) => theme.size.medium.mediaQuery`
   *  background-color: red;
   * `}
   */
  mediaQuery(literals: TemplateStringsArray, ...args: string[]): CSSProp {
    return css`
      @media screen and ${this.mediaQueryString} {
        ${css(literals, ...args)}
      }
    `;
  }

  /**
   * 해당 size 이상에만 적용되는 media query를 사용해서
   * template literal을 받아 css prop으로 반환합니다.
   * @example
   * ${({ theme }) => theme.size.medium.minMediaQuery`
   *  background-color: red;
   * `}
   */
  minMediaQuery(literals: TemplateStringsArray, ...args: string[]): CSSProp {
    return css`
      @media screen and ${this.minPx} {
        ${css(literals, ...args)}
      }
    `;
  }

  /**
   * 해당 size 이하에만 적용되는 media query를 사용해서
   * template literal을 받아 css prop으로 반환합니다.
   * @example
   * ${({ theme }) => theme.size.medium.maxMediaQuery`
   *  background-color: red;
   * `}
   */
  maxMediaQuery(literals: TemplateStringsArray, ...args: string[]): CSSProp {
    return css`
      @media screen and ${this.maxPx} {
        ${css(literals, ...args)}
      }
    `;
  }
}
