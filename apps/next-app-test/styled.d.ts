import { QuiTheme } from '@quantit/qui-react';
import 'styled-components';

export interface ExtendedTheme extends QuiTheme {
  foo: string;
}

declare module 'styled-components' {
  export interface DefaultTheme extends ExtendedTheme { }
}
