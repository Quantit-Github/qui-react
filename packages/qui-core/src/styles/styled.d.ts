import 'styled-components';
import { defaultThemeType } from './themes/light.theme';

declare module 'styled-components' {
  export interface DefaultTheme extends defaultThemeType {}
}
