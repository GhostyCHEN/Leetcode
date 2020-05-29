//数组分隔算法
function chunk(arr, size) {
    // Break it up.
    var newArr = [];
    var returnArr = [];
    
    for(let i = 0; i < arr.length; i++){
        newArr.push(arr[i]);
        if(newArr.length === size || i === arr.length-1){
            
            returnArr.push(newArr);
            newArr = [];
        }
        
    }
    return returnArr;
}

//测试
console.log(chunk(["a", "b", "c", "d"], 2));
