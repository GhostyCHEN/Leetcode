//寻找数组中最大值
function largestOfFour(arr) {
    // You can do this!
    function arrLargest(arr){
        var max = 0;
        for(let i = 0; i< arr.length;i++){
            if(max < arr[i]){
                max = arr[i];
            }
        }
        return max;
    }
    var largerArr = [];
    for(let i = 0;i < arr.length;i++){
        largerArr.push(arrLargest(arr[i]));
    }
    return largerArr;
}

//测试
console.log(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]));
