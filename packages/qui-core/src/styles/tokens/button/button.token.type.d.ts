export type PixelType =
  | `${number}px`
  | `${number}px ${number}px`
  | `${number}px ${number}px ${number}px`
  | `${number}px ${number}px ${number}px ${number}px`;

export type ButtonActiveType = 'primary' | 'secondary' | 'ghost' | 'outline';

export type ButtonSizeType = 'xl' | 'lg' | 'md' | 'sm';

export type ButtonFormatType = 'hug' | 'fillCenter';

export type ButtonType =
  | 'xl-hug'
  | 'lg-hug'
  | 'md-hug'
  | 'sm-hug'
  | 'xl-fillCenter'
  | 'lg-fillCenter';

export type IconSizeType = ButtonSizeType | 'xs';
