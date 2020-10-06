/**
 * 基于JavaScript对象的Stack类
 */
class Stack {
    constructor() {
        this.count = 0;
        this.items = {};
    }
    // 栈中插入
    push(element) {
        this.items[this.count] = element;
        this.count += 1;
    }
    // 栈大小
    size() {
        return this.count;
    }
    // 栈是否为空
    isEmpty() {
        return this.count === 0;
    }
    // 弹出元素
    pop() {
        if(this.isEmpty()){
            return undefined;
        }
        this.count -= 1;
        const result = this.items[this.count];
        delete this.items[this.count];
        return result;
    }
    // 查看栈顶
    peek() {
        if(this.isEmpty()){
            return undefined;
        }
        return this.items[this.count - 1];
    }
    // 清空栈
    clear() {
        this.items = {};
        this.count = 0;
    }
    // toString方法 方便调试
    toString() {
        if(this.isEmpty()){
            return '';
        }
        let objString = `${this.items[0]}`;
        for(let i = 1; i < this.count; i++){
            objString = `${objString},${this.items[i]}`
        }
        return objString;
    }
}

// 测试
// const stack = new Stack();
// console.log(stack.isEmpty());
// stack.push(5);
// stack.push(8);
// stack.push(10);
// stack.push(99);
// console.log(stack.peek());
// console.log(stack.toString());