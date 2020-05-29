//插入排序

function insertionSort(arr){
    var len = arr.length;
    var preIndex,current;
    for(var i = 1;i< len;i++){
        preIndex = i - 1;
        current = arr[i];
        while(preIndex >= 0 && arr[preIndex] > current){
            arr[preIndex + 1] = arr[preIndex];
            preIndex --;
        }
        arr[preIndex+1] = current;
    }
    return arr;
}

//测试

console.log(insertionSort([1,7,2,4,5,8,9,0,2]));
