class Queue {
    constructor() {
        this.count = 0;
        this.lowestCount = 0;
        this.items = {};
    }
    // 添加元素
    enqueue(element) {
        this.items[this.count] = element;
        this.count += 1;
    }
    // 移除元素
    dequeue() {
        if(this.isEmpty()){
            return undefined;
        }
        const result = this.items[this.lowestCount];
        delete this.items[this.lowestCount];
        this.lowestCount += 1;
        return result;
    }
    // 查看队列头元素
    peek() {
        if(this.isEmpty()){
            return undefined;
        }
        return this.items[this.lowestCount];
    }
    // 队列是否为空
    isEmpty(){
        return this.count - this.lowestCount === 0;
    }
    // 队列长度
    size() {
        return this.count - this.lowestCount;
    }
    // 清空队列
    clear() {
        this.count = 0;
        this.lowestCount = 0;
        this.items = {};
    }
    
    toString() {
        if(this.isEmpty()) {
            return '';
        }
        let objString = `${this.items[this.lowestCount]}`;
        for(let i = this.lowestCount + 1; i < this.count; i++){
            objString = `${objString},${this.items[i]}`;
        }
        return objString;
    }
}

// 测试
// const queue = new Queue();
// console.log(queue.isEmpty());
// queue.enqueue('A');
// queue.enqueue('B');
// console.log(queue.toString());
// queue.dequeue();
// console.log(queue.toString());