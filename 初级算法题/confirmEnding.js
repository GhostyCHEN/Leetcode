//确认末尾字符算法

function confirmEnding(str, target) {
    // "Never give up and good luck will find you."
    var arr = str.split('');
    var len = target.length;
    var ending =  arr.splice(arr.length - len,len);
    if(ending.join('') == target){
        return true;
    }
    return false;
}

//测试
console.log(confirmEnding("Bastian", "n"));
console.log(confirmEnding("He has to give me a new name", "name"));
