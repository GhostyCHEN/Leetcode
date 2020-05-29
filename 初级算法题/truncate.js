//字符串截取算法

function truncate(str, num) {
    // Clear out that junk in your trunk
    var newStr = '';
    if(str.length<=num){
        return str;
    }else{
        if(num <= 3){
            newStr = str.slice(0,num) + '...';
        }else{
            newStr = str.slice(0,num-3) + '...';
        }
    }
    return newStr;
}

console.log(truncate("A-tisket a-tasket A green and yellow basket", 11));
