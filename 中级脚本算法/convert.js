//给定的数字转罗马数字

function convert(num) {
    var ans = '';
    var k = Math.floor(num / 1000);
    var h = Math.floor((num%1000) / 100);
    var t = Math.floor((num % 100) /10);
    var o = num % 10;

    var one = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX'];
    var ten = ['X', 'XX', 'XXX', 'XL', 'L', 'LX', 'LXX', 'LXXX', 'XC'];
    var hundred = ['C', 'CC', 'CCC', 'CD', 'D', 'DC', 'DCC', 'DCCC', 'CM'];
    var thousand = 'M';

    for(let i = 0;i<k;i++){
        ans += thousand;
    }
    if(h){
        ans += hundred[h - 1];
    }
    if(t){
        ans += ten[t - 1];
    }
    if(o){
        ans += one[o - 1]
    }
    return ans;
}
   
console.log(convert(36));
