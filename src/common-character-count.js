/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */

function getCommonCharacterCount(s1, s2) {
  const counts = new Map();
  for (const character of s1) counts.set(character, (counts.get(character) || 0) + 1);

  let common = 0;
  for (const character of s2) {
    const remaining = counts.get(character) || 0;
    if (remaining > 0) {
      common += 1;
      counts.set(character, remaining - 1);
    }
  }
  return common;
}

module.exports = {
  getCommonCharacterCount
};
