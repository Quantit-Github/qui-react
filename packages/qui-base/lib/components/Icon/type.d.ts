const ICON_TYPES = ['check', 'close', 'smile'] as const;
const ICON_SIZES = ['xs', 'sm', 'md', 'lg', 'xl'] as const;
const ICON_VARIANTS = ['primary', 'secondary', 'ghost', 'outline'] as const;

export type IconType = typeof ICON_TYPES[number];
export type IconSizeType = typeof ICON_SIZES[number];
export type IconVariantType = typeof ICON_VARIANTS[number];
