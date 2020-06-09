/*
 * @lc app=leetcode.cn id=58 lang=javascript
 *
 * [58] 最后一个单词的长度
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    let newS = s.trim();
    
    var arr = newS.split(' ');
    return arr[arr.length - 1].length;
};
// @lc code=end
//测试
console.log(lengthOfLastWord("Hello World"));
console.log(lengthOfLastWord('a '));


