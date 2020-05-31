// ROT13密码，字母会移位13个位置。由'A' ↔ 'N', 'B' ↔'O'，
function rot13(str) { // LBH QVQ VG!
    var newStr = '';
    function ex13(num){
        if(num > 77){
            return num - 13;
        }else{
            return num + 13;
        }
    }
    for(let i = 0;i < str.length;i++){
        if(str[i].charCodeAt() < 65){
            newStr += str[i];
        }else{
            newStr += String.fromCharCode(ex13(str[i].charCodeAt()))
        }
    }
    return newStr;
}

//测试
console.log(rot13("SERR PBQR PNZC"));
