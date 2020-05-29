/*
 * @lc app=leetcode.cn id=150 lang=javascript
 *
 * [150] 逆波兰表达式求值
 */

// @lc code=start
/**
 * @param {string[]} tokens
 * @return {number}
 */
const SIGN = {
    '*':(a,b) => a * b,
    '/':(a,b) => Math.trunc(a / b),
    '+':(a,b) => parseInt(a) + parseInt(b),
    '-':(a,b) => a - b
}
var evalRPN = function(tokens) {
    const stack = [];
    for(var i = 0 ; i<tokens.length;i++){
        if(tokens[i] in SIGN){
            const b = stack.pop();
            const a = stack.pop();
            const res = SIGN[tokens[i]](a,b);
            stack.push(res);
        }else{
            stack.push(tokens[i]);
        }
    }
    return stack.pop();
};
// @lc code=end

