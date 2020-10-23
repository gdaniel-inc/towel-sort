module.exports = function towelSort(matrix) {
  if (matrix == undefined) {
    return []
  }
  else {
    let result = [];

    for (let i = 0; i < matrix.length; i++) {
      if (i == 0) {
        for (let j = 0; j < matrix[i].length; j++) {
          result = result.concat(matrix[i][j]);
        }
      }
      else if (i % 2 != 0) {
        for (let j = matrix[i].length - 1; j >= 0; j--) {
          result = result.concat(matrix[i][j]);
        }
      }
      else if (i % 2 == 0) {
        for (let j = 0; j < matrix[i].length; j++) {
          result = result.concat(matrix[i][j]);
        }
      }
    }
    return result;
  }
};
