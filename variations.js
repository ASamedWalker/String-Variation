export function getNumberOfChars(name) {
  //returns the number of characters in: name
  return name.length;
}

export function getFirstChar(name) {
  // returns the first character of: name
  return name[0];
}

export function getLastChar(name) {
  //return the last character of: name
  return name[name.length - 1];
}

export function getLower(name) {
  //return name all in lower case
  return name.toLowerCase();
}

export function getUpper(name) {
  //return name all in Upper case
  return name.toUpperCase();
}

export function getCapitalized(name) {
  //return a capitalized version of name
  return `${name[0].toUpperCase()}${name.substring(1).toLowerCase()}`;
}

export function getClean(name) {
  //return name without trailing and leading spaces
  return name.trim();
}