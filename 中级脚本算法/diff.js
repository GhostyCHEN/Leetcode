//返回两个数组的差异

// function diff(arr1, arr2) {
//     var newArr = [];
//     // Same, same; but different.
//     var set1 = new Set(arr1);
//     var set2 = new Set(arr2);
//     if(set1.size >= set2.size){
//         var newSet = new Set([...set1].filter(x => !set2.has(x)));
//         newArr = [...newSet];
//     }else{
//         var newSet = new Set([...set2].filter(x => !set1.has(x)));
//         newArr = [...newSet];
//     }
    
//     return newArr;
// }
//利用集合方法失败
function diff(arr1,arr2){
    var newArr = [];
    for(let i = 0;i < arr1.length;i++){
        if(arr2.indexOf(arr1[i]) === -1){
            newArr.push(arr1[i]);
        }
    }
    for(let i = 0; i < arr2.length; i++){
        if(arr1.indexOf(arr2[i]) === -1){
            newArr.push(arr2[i]);
        }
    }
    
    return newArr;
}
console.log(diff([1, 2, 3, 5], [1, 2, 3, 4, 5]));
console.log(diff(["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]));

// var a = [1,2,3,4,5];
//Array.prototype.slice()
// var b = a.slice(2,3);
// console.log(b);

//Array.prototype.indexOf()
// var b = a.indexOf(3);
// console.log(b);


