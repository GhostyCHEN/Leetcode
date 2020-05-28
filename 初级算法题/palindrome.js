//回文算法


function palindrome(str) {
    // Good luck!
    //去除空格 转小写
    var regex = /\W|-|_+/g;
    str = str.replace(regex,'').toLowerCase();
    
    function reverseString(str) {
        var arr;
        var len = str.length;
        arr = str.split('');
        str = arr.reverse().join('');
        return str;
    }

    if(str == reverseString(str)){
        return true;
    }else{
        return false;
    }
    
}

console.log(palindrome("A man, a plan, a canal. Panama"));
