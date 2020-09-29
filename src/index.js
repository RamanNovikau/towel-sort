// You should implement your task here.

module.exports = function towelSort(matrix) {
    if (!matrix) return [];
    if (!matrix.length) return [];
    var towel = matrix[0];
    for (let i = 1; i < matrix.length; i++) {
        if (i % 2 !== 0) {
            towel = towel.concat(matrix[i].reverse());
        }else{
          towel = towel.concat(matrix[i]);
        }
    }
    return towel;
};
