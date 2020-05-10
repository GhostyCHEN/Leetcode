/*
 * @lc app=leetcode.cn id=279 lang=javascript
 *
 * [279] 完全平方数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var numSquares = function(n) {
    let queue = [n];
    let visited = {};
    let level = 0;

    while(queue.length > 0){
        level++;
        let len = queue.length;
        for(let i = 0; i < len;i++){
            let current = queue.shift();
            for(let j = 1;j*j <= current;j++){
                let tmp = current - j*j;
                if(tmp === 0){
                    return level;
                }
                if(!visited[tmp]){
                    queue.push(tmp);
                    visited[tmp] = true;
                }
            }
        }
        
    }
    return level;
};
// @lc code=end

