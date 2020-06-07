/*
 * @lc app=leetcode.cn id=53 lang=javascript
 *
 * [53] 最大子序和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    var max = -Number.MAX_VALUE,sum = 0;
    for(let i = 0;i < nums.length;i++){
        for(let j = i;j < nums.length;j++){
            sum += nums[j];
            if(max < sum){
                max = sum;
            }
        }
        sum = 0;
    }
    return max;
};
// @lc code=end

//测试
console.log(maxSubArray([-1]));
