export function isDarkMode(): boolean {
  if (window.matchMedia?.('(prefers-color-scheme: dark)').matches) {
    return true;
  }
  return false;
}
