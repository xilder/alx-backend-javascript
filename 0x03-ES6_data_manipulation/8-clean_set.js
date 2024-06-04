export default function cleanSet(set, startString) {
  if (
    !startString
    || startString === undefined
    || typeof startString !== 'string'
  ) {
    return '';
  }
  return [...set]
    .filter((string) => string && string.startsWith(startString))
    .map((string) => string.slice(startString.length, string.length))
    .join('-');
}
