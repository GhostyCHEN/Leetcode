//重复操作算法
function repeat(str, num) {
    // repeat after me
    if(num < 0){
        return '';
    }else{
        var repeatStr = '';
        for(let i = 0;i < num; i++){
            repeatStr += str;
        }
        return repeatStr;
    }
}
//测试
console.log(repeat("abc", 3));
