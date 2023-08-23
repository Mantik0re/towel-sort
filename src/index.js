
// You should implement your task here.

module.exports = function towelSort (matrix) {
  let result = [];
  for (let i = 0; i < matrix.length; i++) {
    const currentValue = matrix[i];
    if (Array.isArray(currentValue)) {
      result = result.concat(towelSort(currentValue));
    } else {
      result.push(currentValue);
    }
  }
  return result;
}
