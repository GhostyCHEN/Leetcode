//区间qiu'zhi
function sumAll(arr) {
    var a = arr[0],
        b = arr[1];
    var min = Math.min(a,b),
        max = Math.max(a,b);
    var allArr = [];
    for(let i = min; i <= max;i++){
        allArr.push(i);
    }
    return allArr.reduce((a,b) => a+b);
}


//测试
console.log(sumAll([1, 4]));
