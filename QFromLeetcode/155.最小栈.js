/*
 * @lc app=leetcode.cn id=155 lang=javascript
 *
 * [155] 最小栈
 */

// @lc code=start
/**
 * initialize your data structure here.
 */
var MinStack = function() {
    this.minStack = [];
    this.min = null;
};

/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
    if(!this.minStack.length) this.min = x;
    this.min = Math.min(x,this.min);
    this.minStack.push(x);
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    let num = this.minStack.pop();
    this.min = Math.min(...this.minStack);
    return num;
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    if(!this.minStack.length) return null;
    return this.minStack[this.minStack.length - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    return this.min;
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
// @lc code=end

