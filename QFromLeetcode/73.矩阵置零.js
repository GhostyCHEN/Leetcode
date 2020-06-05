/*
 * @lc app=leetcode.cn id=73 lang=javascript
 *
 * [73] 矩阵置零
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
    var hang = [],lie = [];
    for(let i = 0;i < matrix.length;i++){
        for(let j = 0;j < matrix[i].length;j++){
            if(matrix[i][j] == 0){
                hang.push(i);
                lie.push(j);
            }
        }
    }
    for(let i = 0; i<hang.length;i++){
        for(let j = 0; j < matrix[0].length;j++){
            matrix[hang[i]][j] = 0;
        }
    }
    for(let i = 0;i<lie.length;i++){
        for(let j = 0; j < matrix.length;j++){
            matrix[j][lie[i]] = 0;
        }
    }
    return matrix;
    // return {
    //     hang,lie
    // }
};
// @lc code=end
//测试
console.log(setZeroes([[0,1,2,0],[3,4,5,2],[1,3,1,5]]));
console.log(setZeroes([[1,1,1],[1,0,1],[1,1,1]]));
  

