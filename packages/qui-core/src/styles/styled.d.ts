import 'styled-components';
import { QuiTheme } from './themes';

declare module 'styled-components' {
  export interface DefaultTheme extends QuiTheme { }
}
