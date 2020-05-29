function destroyer(arr) {
    // Remove all the values
    var i = 0;
    while(arguments[i+1] != undefined){
        arr = arr.filter(x => x != arguments[i+1]);
        i++;
    }
    return arr;
}

console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));
