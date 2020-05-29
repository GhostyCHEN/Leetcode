//数组查询算法
function mutation(arr) {
    var first = arr[0].toLowerCase();
    var second = arr[1].toLowerCase();
    for(let i = 0;i < second.length;i++){
        if(first.indexOf(second[i]) === -1){
            return false;
        }
    }
    return true;
}

console.log(mutation(["hello", "hey"]));
console.log(mutation(["floor", "for"]));

