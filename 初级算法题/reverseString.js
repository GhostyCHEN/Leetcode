//翻转字符串算法
function reverseString(str) {
    var arr;
    var len = str.length;
    arr = str.split('');
    str = arr.reverse().join('');
    return str;
}
//测试

console.log(reverseString("hello"));
