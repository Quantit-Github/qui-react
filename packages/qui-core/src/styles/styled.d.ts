import 'styled-components';
import { defaultThemeType } from './themes/theme';

declare module 'styled-components' {
  export interface DefaultTheme extends defaultThemeType {}
}
