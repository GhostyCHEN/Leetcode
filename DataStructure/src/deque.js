// 双端队列
class Deque {
    constructor() {
        this.count = 0;
        this.lowestCount = 0;
        this.items = {};
    }
    // 清空队列
    clear() {
        this.count = 0;
        this.lowestCount = 0;
        this.items = {};
    }
    // 队列长度
    size() {
        return this.count - this.lowestCount;
    }
    // 队列是否为空
    isEmpty() {
        return this.size() === 0;
    }
    
    toString() {
        if(this.isEmpty()){
            return '';
        }
        let objString = `${this.items[this.lowestCount]}`;
        for(let i = this.lowestCount + 1; i < this.count; i++ ){
            objString = `${objString},${this.items[i]}`
        }
        return objString;
    }
    //  前端增加元素
    addFront(element) {
        if(this.isEmpty()){
            this.addBack(element);
        }else if(this.lowestCount > 0) {
            this.lowestCount -= 1;
            this.items[this.lowestCount] = element;
        }else {
            // lowestCount === 0;所以元素右移一位
            for(let i = this.count; i > 0; i--){
                this.items[i] = this.items[ i - 1 ];
            }
            this.count += 1;
            this.lowestCount = 0;
            this.items[0] = element;
        }
    }
    // 后端增加元素
    addBack(element){
        this.items[this.count] = element;
        this.count += 1;
    }
    // 前端移除一个元素
    removeFront() {
        if(this.isEmpty()) {
            return undefined;
        }
        const result = this.items[this.lowestCount];
        delete this.items[this.lowestCount];
        this.lowestCount += 1;
        return result;
    }
    // 后端移除一个元素
    removeBack() {
        if(this.isEmpty()) {
            return undefined;
        }
        const result = this.items[this.count - 1]
        delete this.items[this.count - 1];
        this.count -= 1;
        return result;
    }
    // 返回前端第一个元素
    peekFront() {
        return this.items[this.lowestCount];
    }
    // 返回后端第一个元素
    peekBack() {
        return this.items[this.count - 1]
    }
}

// 测试
const deque = new Deque();
console.log(deque.isEmpty());
deque.addBack('John');
deque.addBack('Jack');
console.log(deque.toString());
deque.addFront('Same');
deque.removeBack();
console.log(deque.toString());