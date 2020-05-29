//希尔排序
function shellSort(arr){
    var len = arr.length;
    var gap = 1;
    while(gap < len/3){
        gap = gap * 3 + 1;
    }
    for(gap;gap>0;gap = Math.floor(gap/3)){
        for(let i = gap;i<len;i++){
            let temp = arr[i];
            for(var j = i - gap;j >= 0 && arr[j] > temp; j-=gap){
                arr[j+gap] = arr[j];
            }
            arr[j+gap] = temp;
        }
    }
    return arr;
}

//测试
console.log(shellSort([1,7,2,4,5,8,9,0,2]));
