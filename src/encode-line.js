/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */

function encodeLine(str) {
  let encoded = '';
  for (let index = 0; index < str.length;) {
    let end = index + 1;
    while (end < str.length && str[end] === str[index]) end += 1;
    const count = end - index;
    encoded += (count > 1 ? count : '') + str[index];
    index = end;
  }
  return encoded;
}

module.exports = {
  encodeLine
};
