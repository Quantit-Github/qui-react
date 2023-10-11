import { ColorRange, SemanticColorRange } from "./color.type";
import { QuiColorPalette } from "./palette.type";
import { QuiTheme } from "./theme.type";
import { QuiTypography } from "./typography.type";
import { TypographyValue } from "./typography.util";


export const QUI_LIGHT_PRIMARY: ColorRange = {
    0: '#F2F6FA',
    10: '#D8E2FA',
    20: '#BAD4FF',
    30: '#8AB5FF',
    40: '#5B8FFF',
    50: '#3355FF',
    60: '#2B31EC',
    70: '#2227BD',
    80: '#1A1D8E',
    90: '#11145E',
    95: '#0D0F47',
    99: '#090A2F',
    100: '#040518',
};

export const QUI_LIGHT_GRAYSCALE: ColorRange = {
    0: '#FDFDFD',
    10: '#F9F9F9',
    20: '#F4F4F5',
    30: '#E9EAEA',
    40: '#D4D4D6',
    50: '#BEBFC1',
    60: '#A9AAAC',
    70: '#939597',
    80: '#7D7F83',
    90: '#686A6E',
    95: '#525559',
    99: '#3D3F45',
    100: '#1B1D20',
};
export const QUI_LIGHT_BLACK_ALPHA: ColorRange = {
    0: 'rgba(16, 16, 20, 1)',
    10: 'rgba(16, 16, 20, .9)',
    20: 'rgba(16, 16, 20, .8)',
    30: 'rgba(16, 16, 20, .7)',
    40: 'rgba(16, 16, 20, .6)',
    50: 'rgba(16, 16, 20, .5)',
    60: 'rgba(16, 16, 20, .4)',
    70: 'rgba(16, 16, 20, .3)',
    80: 'rgba(16, 16, 20, .2)',
    90: 'rgba(16, 16, 20, .15)',
    95: 'rgba(16, 16, 20, .06)',
    99: 'rgba(16, 16, 20, .03)',
    100: 'rgba(16, 16, 20, 0)',
};

export const QUI_LIGHT_WHITE_ALPHA: ColorRange = {
    0: 'rgba(249, 250, 253, 1)',
    10: 'rgba(249, 250, 253, .9)',
    20: 'rgba(249, 250, 253, .8)',
    30: 'rgba(249, 250, 253, .7)',
    40: 'rgba(249, 250, 253, .6)',
    50: 'rgba(249, 250, 253, .5)',
    60: 'rgba(249, 250, 253, .4)',
    70: 'rgba(249, 250, 253, .3)',
    80: 'rgba(249, 250, 253, .2)',
    90: 'rgba(249, 250, 253, .15)',
    95: 'rgba(249, 250, 253, .06)',
    99: 'rgba(249, 250, 253, .03)',
    100: 'rgba(249, 250, 253, 0)',
};


export const QUI_LIGHT_SEMANTIC: SemanticColorRange = {
    brightest: '#FDFDFD',
    border_high: 'rgba(16, 16, 20, .8)',
    border_medium: 'rgba(16, 16, 20, .15)',
    border_low: 'rgba(16, 16, 20, .06)',
    state_overlay_focused: '#BAD4FF',
    primary_lighten: '#2B31EC',
};

export const QUI_LIGHT_ERROR: ColorRange = {
    0: '#FFF3F5',
    10: '#FFEDF0',
    20: '#FFDAE1',
    30: '#FFC8D1',
    40: '#FFB5C2',
    50: '#FF90A4',
    60: '#FF6B85',
    70: '#FF4667',
    80: '#D23853',
    90: '#A52A40',
    95: '#771C2C',
    99: '#611522',
    100: '#4A0E19',
};

export const QUI_LIGHT_REVENUE_UP: ColorRange = {
    0: '#FFCDCD',
    10: '#FFBDBD',
    20: '#FFADAD',
    30: '#FF9C9C',
    40: '#FF8C8C',
    50: '#FF7B7B',
    60: '#FF5A5A',
    70: '#E55151',
    80: '#CC4848',
    90: '#B23F3F',
    95: '#993636',
    99: '#7F2D2D',
    100: '#662424',
};

export const QUI_LIGHT_REVENUE_DOWN: ColorRange = {
    0: '#BFDAF9',
    10: '#ABCDF7',
    20: '#96C1F5',
    30: '#80B5F2',
    40: '#6CA8F0',
    50: '#569CEE',
    60: '#2C83EA',
    70: '#2876D2',
    80: '#2369BB',
    90: '#1F5BA3',
    95: '#1A4F8C',
    99: '#164175',
    100: '#12345E',
};

/// QUI DARK

export const QUI_DARK_PRIMARY: ColorRange = {
    0: '#040518',
    10: '#090A2F',
    20: '#0D0F47',
    30: '#11145E',
    40: '#1A1D8E',
    50: '#2227BD',
    60: '#2B31EC',
    70: '#3355FF',
    80: '#5B8FFF',
    90: '#8AB5FF',
    95: '#BAD4FF',
    99: '#D8E2FA',
    100: '#F2F6FA',
};

export const QUI_DARK_GRAYSCALE: ColorRange = {
    0: '#1B1D20',
    10: '#3D3F45',
    20: '#525559',
    30: '#686A6E',
    40: '#7D7F83',
    50: '#939597',
    60: '#A9AAAC',
    70: '#BEBFC1',
    80: '#D4D4D6',
    90: '#E9EAEA',
    95: '#F4F4F5',
    99: '#F9F9F9',
    100: '#FDFDFD',
};

export const QUI_DARK_BLACK_ALPHA: ColorRange = {
    0: 'rgba(249, 250, 253, 1)',
    10: 'rgba(249, 250, 253, .9)',
    20: 'rgba(249, 250, 253, .8)',
    30: 'rgba(249, 250, 253, .7)',
    40: 'rgba(249, 250, 253, .6)',
    50: 'rgba(249, 250, 253, .5)',
    60: 'rgba(249, 250, 253, .4)',
    70: 'rgba(249, 250, 253, .3)',
    80: 'rgba(249, 250, 253, .2)',
    90: 'rgba(249, 250, 253, .15)',
    95: 'rgba(249, 250, 253, .06)',
    99: 'rgba(249, 250, 253, .03)',
    100: 'rgba(249, 250, 253, 0)',
};

export const QUI_DARK_WHITE_ALPHA: ColorRange = {
    0: 'rgba(16, 16, 20, 1)',
    10: 'rgba(16, 16, 20, .9)',
    20: 'rgba(16, 16, 20, .8)',
    30: 'rgba(16, 16, 20, .7)',
    40: 'rgba(16, 16, 20, .6)',
    50: 'rgba(16, 16, 20, .5)',
    60: 'rgba(16, 16, 20, .4)',
    70: 'rgba(16, 16, 20, .3)',
    80: 'rgba(16, 16, 20, .2)',
    90: 'rgba(16, 16, 20, .15)',
    95: 'rgba(16, 16, 20, .06)',
    99: 'rgba(16, 16, 20, .03)',
    100: 'rgba(16, 16, 20, 0)',
};

export const QUI_DARK_SEMANTIC: SemanticColorRange = {
    brightest: '#FDFDFD',
    border_high: 'rgba(249, 250, 253, .8)',
    border_medium: 'rgba(249, 250, 253, .15)',
    border_low: 'rgba(249, 250, 253, .06)',
    state_overlay_focused: '#BAD4FF',
    primary_lighten: '#8AB5FF',
};


export const QUI_DARK_ERROR: ColorRange = {
    0: '#4A0E19',
    10: '#611522',
    20: '#771C2C',
    30: '#A52A40',
    40: '#D23853',
    50: '#FF4667',
    60: '#FF6B85',
    70: '#FF90A4',
    80: '#FFB5C2',
    90: '#FFC8D1',
    95: '#FFDAE1',
    99: '#FFEDF0',
    100: '#FFF3F5',
};

export const QUI_DARK_REVENUE_UP: ColorRange = {
    0: '#662424',
    10: '#7F2D2D',
    20: '#993636',
    30: '#B23F3F',
    40: '#CC4848',
    50: '#E55151',
    60: '#FF5A5A',
    70: '#FF7B7B',
    80: '#FF8C8C',
    90: '#FF9C9C',
    95: '#FFADAD',
    99: '#FFBDBD',
    100: '#FFCDCD',
};

export const QUI_DARK_REVENUE_DOWN: ColorRange = {
    0: '#12345E',
    10: '#164175',
    20: '#1A4F8C',
    30: '#1F5BA3',
    40: '#2369BB',
    50: '#2876D2',
    60: '#2C83EA',
    70: '#569CEE',
    80: '#6CA8F0',
    90: '#80B5F2',
    95: '#96C1F5',
    99: '#ABCDF7',
    100: '#BFDAF9',
};

export const QUI_LIGHT_PALETTE: QuiColorPalette = {
    primary: QUI_LIGHT_PRIMARY,
    grayscale: QUI_LIGHT_GRAYSCALE,
    black_alpha: QUI_LIGHT_BLACK_ALPHA,
    white_alpha: QUI_LIGHT_WHITE_ALPHA,
    semantic: QUI_LIGHT_SEMANTIC,
    error: QUI_LIGHT_ERROR,
    revenue_up: QUI_LIGHT_REVENUE_UP,
    revenue_down: QUI_LIGHT_REVENUE_DOWN,
};

export const QUI_DARK_PALETTE: QuiColorPalette = {
    primary: QUI_DARK_PRIMARY,
    grayscale: QUI_DARK_GRAYSCALE,
    black_alpha: QUI_DARK_BLACK_ALPHA,
    white_alpha: QUI_DARK_WHITE_ALPHA,
    semantic: QUI_DARK_SEMANTIC,
    error: QUI_DARK_ERROR,
    revenue_up: QUI_DARK_REVENUE_UP,
    revenue_down: QUI_DARK_REVENUE_DOWN,
};

export const QUI_TYPOGRAPHY: QuiTypography = {
    displayLarge: new TypographyValue('56px', '64px'),
    displayMedium: new TypographyValue('44px', '52px'),
    displaySmall: new TypographyValue('24px', '32px'),
    headlineLarge: new TypographyValue('32px', '40px'),
    headlineMedium: new TypographyValue('28px', '36px'),
    headlineSmall: new TypographyValue('24px', '32px'),
    titleLarge: new TypographyValue('22px', '28px'),
    titleMedium: new TypographyValue('16px', '24px'),
    titleSmall: new TypographyValue('14px', '20px'),
    bodyLarge: new TypographyValue('16px', '24px'),
    bodyMedium: new TypographyValue('14px', '20px'),
    bodySmall: new TypographyValue('12px', '16px'),
    labelLarge: new TypographyValue('14px', '20px'),
    labelMedium: new TypographyValue('10px', '14px'),
    labelSmall: new TypographyValue('10px', '14px'),
};


export const QUI_BASE_THEME: QuiTheme = {
    color: { ...QUI_LIGHT_PALETTE },
    palette: {
        mode: 'light',
        light: { ...QUI_LIGHT_PALETTE },
        dark: { ...QUI_DARK_PALETTE },
    },
    typography: { ...QUI_TYPOGRAPHY },
};