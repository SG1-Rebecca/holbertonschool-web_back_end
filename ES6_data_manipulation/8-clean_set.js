export default function cleanSet(set, startString) {
  if (!startString || typeof startString !== 'string') {
    return '';
  }

  const cleanString = [];

  for (const value of set) {
    if (typeof value === 'string' && value.startsWith(startString)) {
      cleanString.push(value.slice(startString.length));
    }
  }
  return cleanString.join('-');
}
