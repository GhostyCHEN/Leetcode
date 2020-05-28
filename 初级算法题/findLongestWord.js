//寻找最长单词
function findLongestWord(str) {
    var arr = str.split(' ');
    var max = 0;
    for(var i = 0;i <= arr.length - 1;i++){
        
        if(max < arr[i].length){
            max = arr[i].length;
        }

    }
    return max;

}
console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));
