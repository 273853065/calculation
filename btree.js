//二叉查找树类
function Node(data, left, right) {
    this.data = data;
    this.left = left;
    this.right = right;
    this.show = show;
}

function show() {
    return this.data;
}

function BST() {
    this.root = null;
    this.insert = insert;
    this.inOrder = inOrder;//中序
    this.preOrder = preOrder;//先序
    this.postOrder = postOrder;
    this.getMin = getMin;
    this.getMax = getMax;
    this.find = find;
}

function find(data){
    var current = this.root;
    while(current !== null){
        if(current.data === data){
            return current;
        }else if(data < current.data){
            current = current.left;
        }else{
            current = current.right;
        }
    }
    return null;
}

function getMax(){
    var current = this.root;
    while(!(current.right === null)){
        current = current.right;
    }
    return current.data;
}

function getMin(){
    var current = this.root;
    while(!(current.left === null)){
        current = current.left;
    }
    return current.data;
}

function postOrder(node){
    if(!(node === null)){
        postOrder(node.left);
        postOrder(node.right);
        putstr(node.show() + " ");
    }
}

function preOrder(node){
    if(!(node === null)){
        putstr(node.show() + " ");
        preOrder(node.left);
        preOrder(node.right);
    }
}

function insert(data) {
    var n = new Node(data, null, null);
    if (this.root === null) {
        this.root = n;
    } else {
        var current = this.root;
        var parent;
        while (true) {
            parent = current;
            if (data < current.data) {
                current = current.left;
                if (current === null) {
                    parent.left = n;
                    break;
                }
            } else {
                current = current.right;
                if (current === null) {
                    parent.right = n;
                    break;
                }
            }
        }
    }
}

function inOrder(node) { //node是起始遍历的节点
    if (!(node === null)) {
        inOrder(node.left);
        putstr(node.show() + " ");
        inOrder(node.right);
    }
}