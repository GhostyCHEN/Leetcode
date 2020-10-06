// 基于数组的栈类
class Stack {
    constructor(){
        this.items = [];
    }
    // 入栈
    push(element) {
        this.items.push(element);
    }
    // 出栈
    pop(){
        return this.items.pop();
    }
    // 查看栈顶元素
    peek(){
        return this.items[this.items.length - 1];
    }
    // 检查是否为空
    isEmpty() {
        return this.items.length === 0;
    }
    // 栈大小
    size() {
        return this.items.length;
    }
    // 清空栈
    clear() {
        this.items = [];
    }
}
// 测试
// const stack = new Stack();
// console.log(stack.isEmpty());
// stack.push(5);
// stack.push(8);
// console.log(stack.peek());
