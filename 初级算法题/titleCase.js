//首字母大写

function titleCase(str) {
    var arr = str.split(' ');
    for(var i = 0;i < arr.length;i++){
        var simpleArr = arr[i].toLowerCase().split('');
        simpleArr[0] = simpleArr[0].toUpperCase();
        arr[i] = simpleArr.join('');
    }
    return str = arr.join(' ');
}

console.log(titleCase("sHoRt AnD sToUt"));
