/*
 * @lc app=leetcode.cn id=752 lang=javascript
 *
 * [752] 打开转盘锁
 */

// @lc code=start
/**
 * @param {string[]} deadends
 * @param {string} target
 * @return {number}
 */
var openLock = function(deadends, target) {
    let deadSet = new Set(deadends);
    let queue = [];
    queue.push('0000');
    queue.push('');

    let seen = new Set();
    seen.add('0000');

    var depth = 0;
    while(queue.length != 0){
        let node = queue.shift();
        if(node === ''){
            depth++;
            //如果不判断queue的长度，死锁时会发生死循环
            if(queue.length > 0){
                queue.push('');
            }
        }else if(node === target){
            return depth;
        }else if(!deadSet.has(node)){
            for(let i = 0;i<4;i++){
                for(let d = -1; d <= 1; d+=2){
                    let y = (Number(node.charAt(i)) + d + 10) % 10;
                    let newStr = node.substring(0,i) + y + node.substring(i + 1);
                    if(!seen.has(newStr)){
                        seen.add(newStr);
                        queue.push(newStr);
                    }
                }
            }
        }
    }
    return -1;
};
// @lc code=end

