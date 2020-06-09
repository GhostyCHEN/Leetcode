/*
 * @lc app=leetcode.cn id=28 lang=javascript
 *
 * [28] 实现 strStr()
 */

// @lc code=start
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    if(needle.length === 0) return 0;
    for(let i = 0;i < haystack.length;i++){
        if(haystack[i] === needle[0]){
            let count = 0;
            for(let j = 0;j < needle.length;j++){
                if(j + i === haystack.length) return -1;
                if(haystack[i+j] !== needle[j]) break;
                count++;
            }
            if(count === needle.length){
                return i;
            }
        }
        
    }
    return -1
};
// @lc code=end

