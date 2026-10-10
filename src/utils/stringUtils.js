export function getGreeting(hour) {
  if (hour >= 5 && hour < 12) return 'Good morning';
  if (hour >= 12 && hour < 17) return 'Good afternoon';
  return 'Good evening';
}

export function toTitleCase(str = '') {
  return str.replace(/\b\w/g, (char) => char.toUpperCase());
}
