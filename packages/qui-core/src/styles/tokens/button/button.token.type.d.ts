export type PixelType =
  | `${number}px`
  | `${number}px ${number}px`
  | `${number}px ${number}px ${number}px`
  | `${number}px ${number}px ${number}px ${number}px`;

export type ButtonActiveType = 'primary' | 'secondary' | 'ghost' | 'outline';

export type ButtonSizeType = 'xl' | 'lg' | 'md' | 'sm' | 'xs';

export type ButtonFormatType = 'hug' | 'fillCenter';
