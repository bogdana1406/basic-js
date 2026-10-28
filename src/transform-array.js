/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }

  const commands = new Set(['--discard-next', '--discard-prev', '--double-next', '--double-prev']);
  const counts = arr.map((value) => commands.has(value) ? 0 : 1);

  arr.forEach((value, index) => {
    if (!commands.has(value)) return;
    const target = value.endsWith('next') ? index + 1 : index - 1;
    if (target < 0 || target >= arr.length || counts[target] === 0) return;
    counts[target] += value.startsWith('--double') ? 1 : -1;
  });

  return arr.flatMap((value, index) => Array(counts[index]).fill(value));
}

module.exports = {
  transform
};
