function toTitleCase(str: string) {
  return str
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.substring(1).toLowerCase())
    .join(' ');
}

export default toTitleCase;