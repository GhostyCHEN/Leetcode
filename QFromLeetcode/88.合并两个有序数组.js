/*
 * @lc app=leetcode.cn id=88 lang=javascript
 *
 * [88] 合并两个有序数组
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    let len = nums1.length;
    for(let i = 0; i < len - m;i++){
        nums1.pop();
    }
    for(let j = 0;j < n;j++){
        nums1.push(nums2[j]);
    }
    nums1.sort((a,b) => a - b)
    
};
// @lc code=end

//测试
console.log(merge([1,2,3,0,0,0],3,[2,5,6],3));


