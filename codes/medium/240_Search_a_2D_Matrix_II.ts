function searchMatrix(matrix: number[][], target: number): boolean {
    //边界判断
    if (matrix === null || matrix.length === 0 || matrix[0] === null || matrix[0].length === 0) return false
    //计算行数m，列数n
    let m = matrix.length
    let n = matrix[0].length
    let i = 0 //行游标
    let j = n - 1 //列游标

    while (i < m && j >= 0) {
        if(matrix[i][j] > target) j-- //排除列
        else if(matrix[i][j] < target) i++ //排除行
        else if(matrix[i][j] === target)return true
    }
    return false
}