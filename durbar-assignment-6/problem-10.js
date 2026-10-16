//Sum the Main and Secondary Diagonals

function diagonalSums(matrix) {
    let n = matrix.length;
    let main = 0;
    let secondary = 0;

    for (let i = 0; i < n; i++) {
        main = main + matrix[i][i];
        secondary = secondary + matrix[i][n - 1 - i];
    }

    return {
        main: main,
        secondary: secondary
    };
}
console.log(diagonalSums([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]))
console.log(diagonalSums([
    [1, 2],
    [3, 4]
]))