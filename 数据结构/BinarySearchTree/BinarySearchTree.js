/*Binary Search Tree */
class Node {
    constructor(data, left=null,right=null){
        this.data = data;
        this.left = left;
        this.right = right;
    }
}

class BST {
    constructor(){
        this.root = null;
    }
    add(data){
        const node = this.root;
        if(node === null){
            this.root = new Node(data);
            return;
        }else{
            const searchTree = function(node){
                if(data < node.data){
                    if(node.left === null){
                        node.left = new Node(data);
                        return;
                    }else if(node.left !== null){
                        return searchTree(node.left); //递归 
                    }
                }else if(data > node.data){
                    if(node.right === null){
                        node.right = new Node(data);
                        return;
                    }else if(node.right !== null){
                        return searchTree(node.right);
                    }
                }else {
                    return null;
                }
            };
            return searchTree(node);
        }
    }
    findMin(){
        let Min = this.root;
        while(Min.left !== null){
            Min = Min.left;    
        }
        return Min.data;
    }
    findMax(){
        let Max = this.root;
        while(Max.right !== null){
            Max = Max.right;
        }
        return Max.data;
    }
    find(data){
        let current = this.root;
        while(current.data !== data){
            if(data < current.data){
                current = current.left;
            }else{
                current = current.right;
            }
            if(current === null){
                return null;
            }
        }
        return current;
    }
    isPresent(data){
        let current = this.root;
        while(current){
            if(data === current.data){
                return true;
            }
            if(data < current.data){
                current = current.left;
            }else{
                current = current.right;
            }
        }
        return false;
    }
    remove(data){
        const removeNode = function(node,data){
            if(node == null){
                return null;
            }
            if(data == node.data){
                //node has no children
                if(node.left == null && node.right == null){
                    return null;
                }
                //node has no left children
                if(node.left == null){
                    return node.right;
                }
                //node has no right children
                if(node.right == null){
                    return node.left;
                }
                //node has two children
                var tempNode = node.right;
                while(tempNode.left !== null){
                    tempNode = tempNode.left;
                }
                node.data = tempNode.data;
                node.right = removeNode(node.right,tempNode.data);
                return node;
            }else if(data < node.data){
                node.left = removeNode(node.left,data);
                return node;
            }else{
                node.right = removeNode(node.right,data);
                return node;
            }
        }
        this.root = removeNode(this.root,data)
    }
    /* Traversal & Height */
    isBalanced(){
        return(this.findMinHeight() >= this.findMaxHeight() - 1);
    }
    findMinHeight(node = this.root){
        if(node == null){
            return -1;
        }
        let left = this.findMinHeight(node.left);
        let right = this.findMinHeight(node.right);
        if(left < right){
            return left + 1;
        }else{
            return right + 1;
        }
    }
    findMaxHeight(node = this.root){
        if(node == null){
            return -1;
        }
        let left = this.findMaxHeight(node.left);
        let right = this.findMaxHeight(node.right);
        if(left > right){
            return left + 1;
        }else{
            return right + 1;
        }
    }
    inOrder(){
        if(this.root == null){
            return null;
        }else{
            var result = new Array();
            function traverseInOrder(node){
                node.left && traverseInOrder(node.left);
                result.push(node.data);
                node.right && traverseInOrder(node.right)
            }
            traverseInOrder(this.root);
            return result;
        }
    }
    preOrder(){
        if(this.root == null){
            return null;
        }else{
            var result = new Array();
            function traverseInOrder(node){
                result.push(node.data);
                node.left && traverseInOrder(node.left);
                node.right && traverseInOrder(node.right)
            }
            traverseInOrder(this.root);
            return result;
        }
    }
    postOrder(){
        if(this.root == null){
            return null;
        }else{
            var result = new Array();
            function traverseInOrder(node){
                node.left && traverseInOrder(node.left);
                node.right && traverseInOrder(node.right);
                result.push(node.data);
            }
            traverseInOrder(this.root);
            return result;
        }
    }
    levelOrder(){
        let result = [];
        let Q = []; //queue
        if(this.root != null){
            Q.push(this.root);
            while(Q.length > 0){
                let node = Q.shift();
                result.push(node.data);
                if(node.left != null){
                    Q.push(node.left);
                };
                if(node.right != null){
                    Q.push(node.right);
                };
            };
            return result;
        }else{
            return null;
        }
    }
    
}

// const bst = new BST();

// bst.add(4);
// bst.add(2);
// bst.add(6);
// bst.add(1);
// bst.add(3);
// bst.add(5);
// bst.add(7);
// bst.remove(4);
// console.log(bst.findMin());
// console.log(bst.findMax());
// bst.remove(6);
// console.log(bst.findMax());
// console.log(bst.isPresent(4));



const bst = new BST();
bst.add(9);
bst.add(4);
bst.add(17);
bst.add(3);
bst.add(6);
bst.add(22);
bst.add(5);
bst.add(7);
bst.add(20);
console.log(bst.findMinHeight());
console.log(bst.findMaxHeight());
console.log(bst.isBalanced());
bst.add(10);
console.log(bst.preOrder());
console.log(bst.inOrder());
console.log(bst.postOrder());
console.log(bst.levelOrder());















