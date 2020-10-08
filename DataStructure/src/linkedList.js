function defaultEquals(a, b) {
    return a === b;
}
class Node {
    constructor(element) {
        this.element = element;
        this.next = undefined;
    }
}
class LinkedList {
    constructor(equalsFn = defaultEquals) { //ES6默认值参数
        this.count = 0;
        this.head = undefined;
        this.equalsFn = equalsFn;
    }
    // 添加元素
    push(element) {
        const node = new Node(element);
        let current;
        if(this.head == null){
            this.head = node;
        } else {
            current = this.head;
            while(current.next != null){
                current = current.next;
            }
            current.next = node;
        }
        this.count += 1;
    }
    // 特定位置移除元素
    removeAt(index) {
        // 检查越界值
        if(index >= 0 && index < this.count){
            let current = this.head;
            
            // 移除第一项
            if(index === 0){
                this.head = current.next;
            } else {
                // let previous;
                // for(let i = 0; i < index; i++){
                //     previous = current;
                //     current = current.next;
                // }
                
                // this.getElementAt()重构removeAt()
                const previous = this.getElementAt(index - 1);
                current = previous.next;
                // 把previous与current的下一项链接起来，跳过current，从而删除current
                previous.next = current.next;
            }
            this.count -= 1;
            return current.element;
        }
        return undefined
    }
    // 迭代到目标位置
    getElementAt(index){
        // 越界判断
        if(index >= 0 && index <= this.count){
            let node = this.head;
            for (let i = 0; i < index && node != null; i++){
                node = node.next;
            }
            return node;
        }
        return undefined;
    }
    // 任意位置插入元素
    insert(element, index){
        // 越界判断
        if(index >= 0 && index <= this.count){
            const node = new Node(element);
            if(index === 0){ //在第一个位置添加
                const current = this.head;
                node.next = current;
                this.head = node;
            } else {
                const previous = this.getElementAt(index - 1);
                const current = previous.next;
                node.next = current;
                previous.next = node;
            }
            this.count += 1;
            return true;
        }
        return false;
    }
    // 返回一个元素的位置
    indexOf(element){
        let current = this.head;
        for(let i = 0; i < this.count && current != null; i++){
            if(this.equalsFn(element,current.element)){
                return i;
            }
            current = current.next;
        }
        return -1;
    }
    // 移除元素
    remove(element) {
        const index = this.indexOf(element);
        return this.removeAt(index);
    }
    size(){
        return this.count;
    }
    isEmpty() {
        return this.count === 0;
    }
    getHead() {
        return this.head;
    }

    toString() {
        if(this.head == null){
            return '';
        }
        let objString = `${this.head.element}`;
        let current = this.head.next;
        for(let i = 1; i < this.count && current != null; i++){
            objString = `${objString}->${current.element}`;
            current = current.next;
        }
        return objString;
    }
}

// 测试
// const list = new LinkedList();
// list.push(15);
// list.push(10);
// list.push(100);
// list.push(88);
// list.push(11);
// list.push(50);
// list.insert('string',3);
// console.log(list.indexOf(100));
// console.log(list.size());
// console.log(list.isEmpty());
// console.log(list.getHead());
// console.log(list.toString());

// 双向链表
class DoublyNode extends Node{
    constructor(element,next,prev){
        super(element,next);
        this.prev = prev;  
    }
}
class DoublyLinkedList extends LinkedList {
    constructor(equalsFn = defaultEquals) {
        super(equalsFn);
        this.tail = undefined;
    }
    insert(element,index){
        // 越界判断
        if(index >= 0 && index <= this.count){
            const node = new DoublyNode(element);
            let current = this.head;
            if(index === 0){
                if(this.head == null){
                    this.head = node;
                    this.tail = node;
                } else {
                    node.next = this.head;
                    current.prev = node;
                    this.head = node;
                }
            } else if (index === this.count){
                current = this.tail;
                current.next = node;
                node.prev = current;
                this.tail = node;
            } else {
                const previous = this.getElementAt(index - 1);
                current = previous.next;
                node.next = current;
                previous.next = node;
                current.prev = node;
                node.prev = previous;
            }
            this.count += 1;
            return true;
        }
        return false;
    }
    // 任意位置移除元素
    removeAt() {
        if(index >= 0 && index < this.count) {
            let current = this.head;
            if(index === 0) {
                this.head = current;
                // 如果只有一项就更新tail
                if(this.count === 1){
                    this.tail = undefined;
                } else {
                    this.head.prev = undefined;
                }
            } else if (index === this.count - 1){  //最后一项
                current = this.tail;
                this.tail = current.prev;
                this.tail.next = undefined;
            } else {
                current = this.getElementAt(index);
                const previous = current.prev;
                // 把previous和current的下一项连接起来，跳过current
                previous.next = current.next;
                current.next.prev = previous;
            }
            this.count -= 1;
            return current.element;
        }
        return undefined;
    }
}

// 循环链表
class CircularLinkedList extends LinkedList {
    constructor(equalsFn = defaultEquals){
        super(equalsFn)
    }
    insert(element,index){
        if(index >= 0 && index <= this.count) {
            const node = new Node(element);
            let current = this.head;
            if (index === 0){
                if (this.head == null){
                    this.head = node;
                    node.next = this.head;
                } else {
                    node.next = current;
                    current = this.getElementAt(this.count);
                    // 更新最后一个元素
                    this.head = node;
                    current.next = this.head;
                }
            } else {
                const previous = this.getElementAt(index - 1);
                node.next = previous.next;
                previous.next = node;
            }
            this.count += 1;
            return true;
        }
        return false;
    }

    removeAt(index) {
        if(index >= 0 && index < this.count){
            let current = this.head;
            if (index === 0){
                if(this.count === 1){
                    this.head = undefined;
                } else {
                    const removed = this.head;
                    current = this.getElementAt(this.count);
                    this.head = this.head.next;
                    current.next = this.head;
                    current = removed;
                }
            } else {
                const previous = this.getElementAt(index - 1);
                current = previous.next;
                previous.next = current.next;
            }
            this.count -= 1;
            return current.element;
        }
        return undefined;
    }
}
// 双向循环链表

// 有序链表
const Compare = {
    LESS_THAN: -1,
    BIGGER_THAN: 1
};

function defaultCompare(a, b){
    if(a === b){
        return 0;
    }
    return a < b ? Compare.LESS_THAN : Compare.BIGGER_THAN;
}

class SortedLinkedList extends LinkedList {
    constructor(equalsFn = defaultEquals, compareFn = defaultCompare) {
        super(equalsFn);
        this.compareFn = compareFn;
    }
    // 有序插入元素
    insert(element, index = 0){
        if(this.isEmpty()){
            return super.insert(element,0)
        }
        const pos = this.getIndexNextSortedElement(element);
        return super.insert(element, pos)
    }
    getIndexNextSortedElement(element){
        let current = this.head;
        let i = 0;
        for(; i < this.count && current; i++){
            const comp = this.compareFn(element,current.element);
            if(comp === Compare.LESS_THAN){
                return i;
            }
            current = current.next;
        }
        return i;
    }
}

// 链表栈
class StackLinkedList {
    constructor() {
        this.items = new DoublyLinkedList();
    }
    push(element) {
        this.items.push(element);
    }
    pop(){
        if(this.isEmpty()){
            return undefined;
        }
        return this.items.removeAt(this.size() - 1);
    }
    // ...
}

// 利用DoublyLinkedList构建 Queue/Deque/...