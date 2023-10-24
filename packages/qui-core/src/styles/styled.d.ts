import 'styled-components';
import { QuiTheme } from './theme';

declare module 'styled-components' {
  export interface DefaultTheme extends QuiTheme {}
}
