/*
 * @lc app=leetcode.cn id=66 lang=javascript
 *
 * [66] 加一
 */

// @lc code=start
/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    if(digits[0] === 0){
        digits[0] = 1;
        return digits;
    }
    num = BigInt(digits.join(''));
    num++;
    return newDigits = num.toString().split('');
    
};
// @lc code=end
//测试
console.log(plusOne([6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3]));

