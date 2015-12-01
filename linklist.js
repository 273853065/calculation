//Node节点类
function Node(element) {
    this.element = element;
    this.next = null; //next好像直接就能用的样子
    this.advance = advance; //advance和show都是节点的属性，不能放在llist中
    this.show = show;
}

//linklist类
function LList() {
    this.head = new Node("head");
    this.find = find;
    this.insert = insert;
    this.remove = remove;
    this.display = display;
    this.findPrevious = findPrevious;
}

function advance(n) {
    var currNode = this;
    while (n > 0 && currNode.next !== null) {
        currNode = currNode.next;
        --n;
    }
    print(currNode.element);
}

function show() {
    var currNode = this.element;
    print(currNode);
}

//找到的是item元素本身
function find(item) {
    var currNode = this.head;
    while (currNode.element != item) {
        currNode = currNode.next;
        currNode.show();
    }
    currNode.advance(1);
    return currNode;
}

//在已知节点之后插入
function insert(newElement, item) {
    var newNode = new Node(newElement);
    var current = this.find(item);
    newNode.next = current.next;
    current.next = newNode;
}

function display() {
    var currNode = this.head;
    while (!(currNode.next === null)) {
        print(currNode.next.element);
        currNode = currNode.next;
    }
}

function findPrevious(item) {
    var currNode = this.head;
    while (!(currNode.next === null) && (currNode.next.element !== item)) {
        currNode = currNode.next;
    }
    return currNode;
}

function remove(item) {
    var prevNode = this.findPrevious(item);
    if (!(prevNode.next === null)) {
        prevNode.next = prevNode.next.next;
    }
}

var cities = new LList();
cities.insert("Conway", "head");
cities.insert("Russellville", "Conway");
cities.insert("Alma", "Russellville");
cities.insert("Carlisle", "Alma");
print("\n\n");
cities.display();
print("\n\n")
cities.find("Alma");
print("\n\n");
cities.remove("Alma");
cities.display();