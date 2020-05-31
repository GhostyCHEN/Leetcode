//数组排序并插入值
function where(arr, num) {
    // Find my place in this sorted array.
    arr.sort(function(a,b){
        return a - b;
    })
    for(let i = 0; i < arr.length;i++){
        if(num <= arr[i]){
            return i;
        }
    }
    return arr.length;
}

//测试
console.log(where([40, 60,50,30,10,1,2], 50));
