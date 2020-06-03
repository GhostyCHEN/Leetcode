//遍历一个对象数组并返回一个包含相匹配的属性-值对的
//所有对象的数组
function where(collection, source) {
    var arr = [];
    // var keySource = Object.getOwnPropertyNames(source);
    var keySource = Object.keys(source);
    // What's in a name?
    //错误的一些方法
    // function hasObj(obj){
    //     var key = Object.getOwnPropertyNames(obj);  
    //     for(let i = 0;i < key.length;i++){
    //         for(let j = 0;j < keySource.length;j++){
    //             if()
    //         }
    //     }
    // }
    // function attributeCount(obj){
    //     var count = 0;
    //     for(let i in obj){
    //         if(obj.hasOwnProperty(i)){
    //             count++;
    //         }
    //     }
    //     return count;
    // }
    for(var i in collection){
        var count = 0;
        for(let j = 0;j < keySource.length;j++){ //针对source的属性循环,查找collection元素中是否有指定的source元素
            if(collection[i][keySource[j]]&&source[keySource[j]] == collection[i][keySource[j]]){
                count++;
            }
        }
        if(count == keySource.length){
            arr.push(collection[i]);
        }
    }
    return arr;
}



//测试
console.log(where([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" }));
