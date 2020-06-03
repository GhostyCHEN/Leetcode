var obj = { first: "Romeo", last: "Montague" };
// console.log(obj.size);
// var key = Object.getOwnPropertyNames(obj);
var key = Object.keys(obj);
var i = ''
for( i in key){
    console.log(key[i]);
    
}
//获取对象的属性名
console.log(key);
function where(collection, source) {
    var arr = [];
    var arrSource=Object.keys(source);//把source的属性转化为数组
    
    // What's in a name?
    var i='',j=0;
    for(i in collection){//循环collection的元素
      var count=0;
  
      for(j=0;j<arrSource.length;j++){//针对source的属性进行循环，查找这个collection元素中是否有指定的source的属性
        if(collection[i][arrSource[j]]&&source[arrSource[j]]==collection[i][arrSource[j]]){
          count++;
        }
      }
      //判断：如果完全包含，这个collection的元素就被允许添加到里边。
      if(count==arrSource.length){
         arr.push(collection[i]);
      }
    }
    return arr;
  }
console.log(where([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" }));

