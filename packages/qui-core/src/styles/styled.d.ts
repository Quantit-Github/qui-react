import 'styled-components';
import { defaultThemeType } from './themes/theme.light';

declare module 'styled-components' {
  export interface DefaultTheme extends defaultThemeType {}
}
