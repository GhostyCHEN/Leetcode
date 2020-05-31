//返回两个数组的差异

function diff(arr1, arr2) {
    var newArr = [];
    // Same, same; but different.
    var set1 = new Set(arr1);
    var set2 = new Set(arr2);

    var newSet = new Set([...set1].filter(x => !set2.has(x)));
    newArr = [...newSet];
    return newArr;
}
console.log(diff([1, 2, 3, 5], [1, 2, 3, 4, 5]));
