/*function ListNode(x){
    this.val = x;
    this.next = null;
}*/

/**
 * 输入一个链表，反转链表后，输出新链表的表头。
 * @param {NodeList} pHead 
 */


function ReverseList(pHead){
    let prev = null;
    let curr = pHead;
    let next = null;
    while( curr !== null){
        next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
    }
    return prev;
}