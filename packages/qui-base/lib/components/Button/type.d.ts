const BUTTON_LAYOUTS = ['hug', 'fill'] as const;
const BUTTON_SIZES = ['xl', 'lg', 'md', 'sm', 'xs'] as const;
const BUTTON_VARIANTS = ['primary', 'secondary', 'ghost', 'outline'] as const;

export type ButtonLayoutType = typeof BUTTON_LAYOUTS[number];
export type ButtonSizeType = typeof BUTTON_SIZES[number];
export type ButtonVariantType = typeof BUTTON_VARIANTS[number];
