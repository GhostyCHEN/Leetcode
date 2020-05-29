/*
 * @lc app=leetcode.cn id=739 lang=javascript
 *
 * [739] 每日温度
 */

// @lc code=start
/**
 * @param {number[]} T
 * @return {number[]}
 */
var dailyTemperatures = function(T) {
    let res = new Array(T.length).fill(0);
    if(T.length == 0) return res;
    let stack = [];
    for(let i = 0;i<T.length;i++){
        while(T[stack[stack.length - 1]] < T[i]){
            res[stack[stack.length - 1]] = i - stack[stack.length - 1];
            stack.pop();
        }
        stack.push(i);
    }
    return res;
};
// @lc code=end

