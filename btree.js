//二叉查找树类
function Node(data, left, right) {
    this.data = data;
    this.left = left;
    this.right = right;
    this.show = show;
    this.count = 1;
}

function show() {
    return this.data;
}

function BST() {
    this.root = null;
    this.insert = insert;
    this.inOrder = inOrder; //中序
    this.preOrder = preOrder; //先序
    this.postOrder = postOrder;
    this.getMin = getMin;
    this.getMax = getMax;
    this.find = find;
    this.remove = remove;
    this.update = update;
    this.getSmallest = getSmallest;
}

function getSmallest(node) {
    var current = node;
    if (!(current === node)) {
        current = current.left;
    }
    return current;
}

function update(data) { //更新节点出现的次数
    var grade = this.find(data);
    grade.count++;
    return grade;
}

function prArray(arr) {
    for (var i = 0; i < arr.length; ++i) {
        putstr(arr[i] + ' ');
        if ((i + 1) % 10 === 0)  {
            putstr("\n");
        }
    }
}

function remove(data) { //如果待删除节点包含两个子节点，正确的做法有两种：要么查找待删除节点左子树上的最大值，要么查找其右子树上的最小值。
    removeNode(this.root, data);//我觉得很奇怪的是，他是怎么删除的节点，难道只是赋给root就是删除，这根本不可能
}

function removeNode(node, data) { //我们需要一个查找子树上最小值的方法，后面会用它找到的最小值创建一个临时节点。将临时节点上的值复制到待删除节点，然后再删除临时节点
    if (node === null) {
        return false;
    }
    if (data === node.data) {
        //没有子节点的节点
        if (node.left === null && node.right === null) {
            node = null;
            return true;
        }
        //没有左子节点的节点
        if (node.left === null) {
            node = node.right;
            node.right = null;
            return true;
        }
        //没有右子节点的节点
        if (node.right === null) {//我该如何找到它的父节点
            node = node.left;
            node.left = null;
            return true;
        }
        //有两个子节点的节点,找到其右子树上的最小值
        var tempNode = this.getSmallest(node.right);
        node.data = tempNode.data;
        removeNode(node.right, tempNode.data);
        return true;
    } else if (data < node.data) {
        node = node.left;
        removeNode(node, data);
    } else {
        node = node.right;
        removeNode(node, data);
    }
}

function find(data) {
    var current = this.root;
    while (current !== null) {
        if (current.data === data) {
            return current;
        } else if (data < current.data) {
            current = current.left;
        } else {
            current = current.right;
        }
    }
    return null;
}

function getMax() {
    var current = this.root;
    while (!(current.right === null)) {
        current = current.right;
    }
    return current.data;
}

function getMin() {
    var current = this.root;
    while (!(current.left === null)) {
        current = current.left;
    }
    return current.data;
}

function postOrder(node) {
    if (!(node === null)) {
        postOrder(node.left);
        postOrder(node.right);
        putstr(node.show() + " ");
    }
}

function preOrder(node) {
    if (!(node === null)) {
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