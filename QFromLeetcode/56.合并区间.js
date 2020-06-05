/*
 * @lc app=leetcode.cn id=56 lang=javascript
 *
 * [56] 合并区间
 */

// @lc code=start
/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    // for(let i = 0 ;i < intervals.length-1;i++){
    //     if(intervals[i][1] >= intervals[i+1][0]){

    //     }
    // }
    //应该while
    intervals.sort((arr1,arr2) => arr1[0] - arr2[0]);
    var i = 0;
   while(i < intervals.length){
       if(i === intervals.length-1) break;
       if(intervals[i][1] >= intervals[i+1][0] || intervals[i][0] >= intervals[i+1][0]){
           intervals[i][0] = Math.min(intervals[i][0],intervals[i+1][0]);
           intervals[i][1] = Math.max(intervals[i][1],intervals[i+1][1])
           intervals.splice(i+1,1);
       }else{
            i++;
       } 
       
      
   }
   return intervals;
};
// @lc code=end
//测试
// console.log(merge([[1,3],[2,6],[8,10],[15,18]]));
// console.log(merge([[1,4],[0,4]]));



