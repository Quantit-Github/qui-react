import { BasePaletteType } from './palette.type';

export const LIGHT_BASE_PALETTE: BasePaletteType = {
  primary: {
    100: '#040518',
    99: '#090A2F',
    95: '#0D0F47',
    90: '#11145E',
    80: '#1A1D8E',
    70: '#2227BD',
    60: '#2B31EC',
    50: '#3355FF',
    40: '#5B8FFF',
    30: '#8AB5FF',
    20: '#BAD4FF',
    10: '#D8E2FA',
    0: '#F2F6FA',
  },
  grayscale: {
    100: '#1B1D20',
    99: '#3D3F45',
    95: '#525559',
    90: '#686A6E',
    80: '#7D7F83',
    70: '#939597',
    60: '#A9AAAC',
    50: '#BEBFC1',
    40: '#D4D4D6',
    30: '#E9EAEA',
    20: '#F4F4F5',
    10: '#F9F9F9',
    0: '#FDFDFD',
  },
  black_alpha: {
    100: 'rgb(16, 16, 20)',
    99: 'rgb(16, 16, 20, .9)',
    95: 'rgb(16, 16, 20, .8)',
    90: 'rgb(16, 16, 20, .7)',
    80: 'rgb(16, 16, 20, .6)',
    70: 'rgb(16, 16, 20, .5)',
    60: 'rgb(16, 16, 20, .4)',
    50: 'rgb(16, 16, 20, .3)',
    40: 'rgb(16, 16, 20, .2)',
    30: 'rgb(16, 16, 20, .15)',
    20: 'rgb(16, 16, 20, .06)',
    10: 'rgb(16, 16, 20, .03)',
    0: 'rgb(16, 16, 20, 0)',
  },
  white_alpha: {
    100: 'rgb(249, 250, 253)',
    99: 'rgb(249, 250, 253, .9)',
    95: 'rgb(249, 250, 253, .8)',
    90: 'rgb(249, 250, 253, .7)',
    80: 'rgb(249, 250, 253, .6)',
    70: 'rgb(249, 250, 253, .5)',
    60: 'rgb(249, 250, 253, .4)',
    50: 'rgb(249, 250, 253, .3)',
    40: 'rgb(249, 250, 253, .2)',
    30: 'rgb(249, 250, 253, .15)',
    20: 'rgb(249, 250, 253, .06)',
    10: 'rgb(249, 250, 253, .03)',
    0: 'rgb(249, 250, 253, 0)',
  },
  semantic: {
    brightest: '#FDFDFD',
    border_high: 'rgb(16, 16, 20, .8)',
    border_medium: 'rgb(16, 16, 20, .15)',
    border_low: 'rgb(16, 16, 20, .06)',
    state_overlay_focused: '#BAD4FF',
    primary_lighten: '#2B31EC',
  },
  error: {
    100: '#4A0E19',
    99: '#611522',
    95: '#771C2C',
    90: '#A52A40',
    80: '#D23853',
    70: '#FF4667',
    60: '#FF6B85',
    50: '#FF90A4',
    40: '#FFB5C2',
    30: '#FFC8D1',
    20: '#FFDAE1',
    10: '#FFEDF0',
    0: '#FFF3F5',
  },
  revenue_up: {
    100: '#662424',
    99: '#7F2D2D',
    95: '#993636',
    90: '#B23F3F',
    80: '#CC4848',
    70: '#E55151',
    60: '#FF5A5A',
    50: '#FF7B7B',
    40: '#FF8C8C',
    30: '#FF9C9C',
    20: '#FFADAD',
    10: '#FFBDBD',
    0: '#FFCDCD',
  },
  revenue_down: {
    100: '#12345E',
    99: '#164175',
    95: '#1A4F8C',
    90: '#1F5BA3',
    80: '#2369BB',
    70: '#2876D2',
    60: '#2C83EA',
    50: '#569CEE',
    40: '#6CA8F0',
    30: '#80B5F2',
    20: '#96C1F5',
    10: '#ABCDF7',
    0: '#BFDAF9',
  },
};

export const DARK_BASE_PALETTE: BasePaletteType = {
  primary: {
    100: '#F2F6FA',
    99: '#D8E2FA',
    95: '#BAD4FF',
    90: '#8AB5FF',
    80: '#5B8FFF',
    70: '#3355FF',
    60: '#2B31EC',
    50: '#2227BD',
    40: '#1A1D8E',
    30: '#11145E',
    20: '#0D0F47',
    10: '#090A2F',
    0: '#040518',
  },
  grayscale: {
    100: '#FDFDFD',
    99: '#F9F9F9',
    95: '#F4F4F5',
    90: '#E9EAEA',
    80: '#D4D4D6',
    70: '#BEBFC1',
    60: '#A9AAAC',
    50: '#939597',
    40: '#7D7F83',
    30: '#686A6E',
    20: '#525559',
    10: '#3D3F45',
    0: '#1B1D20',
  },
  black_alpha: {
    100: 'rgb(249, 250, 253)',
    99: 'rgb(249, 250, 253, .9)',
    95: 'rgb(249, 250, 253, .8)',
    90: 'rgb(249, 250, 253, .7)',
    80: 'rgb(249, 250, 253, .6)',
    70: 'rgb(249, 250, 253, .5)',
    60: 'rgb(249, 250, 253, .4)',
    50: 'rgb(249, 250, 253, .3)',
    40: 'rgb(249, 250, 253, .2)',
    30: 'rgb(249, 250, 253, .15)',
    20: 'rgb(249, 250, 253, .06)',
    10: 'rgb(249, 250, 253, .03)',
    0: 'rgb(249, 250, 253, 0)',
  },
  white_alpha: {
    100: 'rgb(16, 16, 20)',
    99: 'rgb(16, 16, 20, .9)',
    95: 'rgb(16, 16, 20, .8)',
    90: 'rgb(16, 16, 20, .7)',
    80: 'rgb(16, 16, 20, .6)',
    70: 'rgb(16, 16, 20, .5)',
    60: 'rgb(16, 16, 20, .4)',
    50: 'rgb(16, 16, 20, .3)',
    40: 'rgb(16, 16, 20, .2)',
    30: 'rgb(16, 16, 20, .15)',
    20: 'rgb(16, 16, 20, .06)',
    10: 'rgb(16, 16, 20, .03)',
    0: 'rgb(16, 16, 20, 0)',
  },
  semantic: {
    brightest: '#FDFDFD',
    border_high: 'rgb(249, 250, 253, .8)',
    border_medium: 'rgb(249, 250, 253, .15)',
    border_low: 'rgb(249, 250, 253, .06)',
    state_overlay_focused: '#BAD4FF',
    primary_lighten: '#8AB5FF',
  },
  error: {
    100: '#FFF3F5',
    99: '#FFEDF0',
    95: '#FFDAE1',
    90: '#FFC8D1',
    80: '#FFB5C2',
    70: '#FF90A4',
    60: '#FF6B85',
    50: '#FF4667',
    40: '#D23853',
    30: '#A52A40',
    20: '#771C2C',
    10: '#611522',
    0: '#4A0E19',
  },
  revenue_up: {
    100: '#FFCDCD',
    99: '#FFBDBD',
    95: '#FFADAD',
    90: '#FF9C9C',
    80: '#FF8C8C',
    70: '#FF7B7B',
    60: '#FF5A5A',
    50: '#E55151',
    40: '#CC4848',
    30: '#B23F3F',
    20: '#993636',
    10: '#7F2D2D',
    0: '#662424',
  },
  revenue_down: {
    100: '#BFDAF9',
    99: '#ABCDF7',
    95: '#96C1F5',
    90: '#80B5F2',
    80: '#6CA8F0',
    70: '#569CEE',
    60: '#2C83EA',
    50: '#2876D2',
    40: '#2369BB',
    30: '#1F5BA3',
    20: '#1A4F8C',
    10: '#164175',
    0: '#12345E',
  },
};
