import { TypographyTheme } from './typography.type';
import { createTypography } from './typography.utils';

export const BASE_TYPOGRAPHY: TypographyTheme = {
  display: {
    lg: createTypography('56px', '64px'),
    md: createTypography('44px', '52px'),
    sm: createTypography('24px', '32px'),
  },
  headline: {
    lg: createTypography('32px', '40px'),
    md: createTypography('28px', '36px'),
    sm: createTypography('24px', '32px'),
  },
  title: {
    lg: createTypography('22px', '28px'),
    md: createTypography('16px', '24px'),
    sm: createTypography('14px', '20px'),
  },
  body: {
    lg: createTypography('16px', '24px'),
    md: createTypography('14px', '20px'),
    sm: createTypography('12px', '16px'),
  },
  label: {
    lg: createTypography('14px', '20px'),
    md: createTypography('10px', '14px'),
    sm: createTypography('10px', '14px'),
  },
};
