export const SIZES = ['xs', 'sm', 'md', 'lg', 'xl'] as const;
export const VARIANTS = ['primary', 'secondary', 'ghost', 'outline'] as const;

export type SizeType = typeof SIZES[number];
export type VariantType = typeof VARIANTS[number];
