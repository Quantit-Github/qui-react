import { QuiTheme } from '@quantit/qui-react';
import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme extends QuiTheme {}
}
