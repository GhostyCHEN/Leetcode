// 集合类
class Set {
    constructor() {
        this.items = {};
    }
    // has(element){
    //     return element in items;
    // }
    has(element){
        return Object.prototype.hasOwnProperty.call(this.items , element);
    }

    add(element){
        if(!this.has(element)){
            this.items[element] = element;
            return true;
        }
        return false;
    }

    delete(element){
        if(this.has(element)){
            delete this.items[element];
            return true;
        }
        return false;
    }
    
    clear(){
        this.items = {};
    }

    size() {
        return Object.keys(this.items).length;
    }
    
    // 等价上
    sizeLegacy() {
        let count = 0;
        for(let key in this.items){
            if(this.items.hasOwnProperty(key)){
                count += 1;
            }
        }
        return count;
    }
}

// 测试
const set = new Set();
set.add(1);
set.add(2);
console.log(set);
console.log(set.size());