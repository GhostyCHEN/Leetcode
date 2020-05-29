//选择排序
function selectionSort(arr){
    var len = arr.length;
    var minIndex;
    for(let i = 0;i < len - 1;i++){
        minIndex = i;
        for(let j = i + 1; j < len;j++){
            if(arr[j] < arr[minIndex]){  //寻找最小的数
                minIndex = j;  //将最小的数的索引保存
            }
        }
        [arr[i],arr[minIndex]] = [arr[minIndex],arr[i]];
    }
    return arr;
}

//测试
console.log(selectionSort([1,7,2,4,5,8,9,0,2]));
