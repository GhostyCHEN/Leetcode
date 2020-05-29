//冒泡排序

function bubbleSort(arr){
    var len = arr.length;
    for(let i = 0;i < len; i++){
        for(let j = 0; j< len - 1 - i;j++){
            //相邻元素两两对比
            if(arr[j] > arr[j+1]){
                [arr[j],arr[j+1]] = [arr[j+1],arr[j]];
                
            }
        }
    }
    return arr;
}

//测试
console.log(bubbleSort([1,7,2,4,5,8,9,0,2]));
