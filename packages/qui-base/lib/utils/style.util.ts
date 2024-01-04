export function combineClassNames(
  ...classNames: Array<string | undefined | null>
) {
  return classNames.filter((c) => c).join(' ');
}
