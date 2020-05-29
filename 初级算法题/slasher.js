//数组截断算法

function slasher(arr, howMany) {
    // it doesn't always pay to be first
    if(arr.length <= howMany){
        return [];
    }else{
        for(let i = 0; i<howMany;i++){
            arr.shift();
        }
        return arr;
    }
    

}

console.log(slasher([1, 2, 3], 2));
