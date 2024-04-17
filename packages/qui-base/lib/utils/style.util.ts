export function replaceClassName(
  className: string,
  replacer?: Record<string, string>
) {
  if (!replacer) return className;
  const classes = className.split(' ');
  return classes.map((c) => replacer[c] || c).join(' ');
}
