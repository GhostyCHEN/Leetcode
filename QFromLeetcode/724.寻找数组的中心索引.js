/*
 * @lc app=leetcode.cn id=724 lang=javascript
 *
 * [724] 寻找数组的中心索引
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
    // let i = 1,j = 1;
    // let left = 0,right = 0;
    // left += nums[i-1];
    // right += nums[nums.length - j];
    // while( i + j < nums.length){
    //     if(left === right && (i+j+1 === nums.length)){
    //         return i;
    //     }
    //     if(left < right){
    //         left += nums[i];
    //         i++;
    //     }else{
    //         j++;
    //         right += nums[nums.length - j]
    //     }
        

    // }
    // return -1;
    if(nums.length === 0) return -1;
    if(nums.length === 1) return 0;
    const newArr = [];
    let sum = 0;
    for(let i = 0; i < nums.length;i++){
        sum += nums[i];
        newArr.push(sum);
    }
    let j = 0;
    while( j < newArr.length ){
        if(newArr[newArr.length -1 ] - newArr[j] === (newArr[j - 1] || 0)){
            return j;
        }
        j++;
    }
    return -1
};

//测试
// console.log(pivotIndex([3, 2, 3]));

// @lc code=end

