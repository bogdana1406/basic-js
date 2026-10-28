/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  const blocked = new Set();
  let sum = 0;
  matrix.forEach((row) => row.forEach((value, column) => {
    if (value === 0) blocked.add(column);
    else if (!blocked.has(column)) sum += value;
  }));
  return sum;
}

module.exports = {
  getMatrixElementsSum
};
