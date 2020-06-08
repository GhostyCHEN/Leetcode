/*
 * @lc app=leetcode.cn id=1033 lang=javascript
 *
 * [1033] 移动石子直到连续
 */

// @lc code=start
/**
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {number[]}
 */
var numMovesStones = function(a, b, c) {
    let result = [];
    let param = [a,b,c];
    param.sort((a,b) => a - b);
    //找到最大的次数
    let max = param[2] - param[0] -2;
    let min = 0;
    //找到最小的次数
    if(param[2] - param[1] === 1 && param[1] - param[0] === 1){
        min = 0;
    }else if(param[2] - param[1] < 3 || param[1] - param[0] < 3){
        min = 1;
    }else{
        min = 2;
    }


    result.push(min);
    result.push(max);

    return result;

};
// @lc code=end
//测试
console.log(numMovesStones(1,7,5));
console.log(numMovesStones(4,5,6));


