const ICON_TYPES = ['check', 'smile'] as const;

export type IconType = typeof ICON_TYPES[number];
