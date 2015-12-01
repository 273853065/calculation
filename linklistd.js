function Node(element) {
    this.element = element;
    this.next = null;
    this.previous = null;
    this.back = back;
}

function LList() {
    this.head = new Node("head");
    this.find = find;
    this.insert = insert;
    this.display = display;
    this.remove = remove;
    this.findLast = findLast;
    this.dispReverse = dispReverse;
}

function back(n) {
    var currNode = this;
    while (n > 0 && currNode.previous !== "head") {
        currNode = currNode.previous;
        --n;
    }
    print(currNode.element);
}

//在已知节点之后插入
function insert(newElement, item) {
    var newNode = new Node(newElement);
    var current = this.find(item);
    newNode.next = current.next;
    newNode.previous = current;
    current.next = newNode;
    if (newNode.next !== null) { //如果next为空，则不需要考虑newNode.next.previous = newNode
        newNode.next.previous = newNode;
    }
}

function remove(item) {
    var currNode = this.find(item);
    if (!(currNode.next === null)) {
        currNode.previous.next = currNode.next;
        currNode.next.previous = currNode.previous;
        currNode.next = null;
        currNode.previous = null;
    }
}

function findLast() {
    var currNode = this.head;
    while (!(currNode.next === null)) {
        currNode = currNode.next;
    }
    currNode.back(1);
    return currNode;
}

function dispReverse() {
    var currNode = this.head;
    currNode = this.findLast();
    while (!(currNode.previous === null)) {
        print(currNode.element);
        currNode = currNode.previous;
    }
}

function display() {
    var currNode = this.head;
    while (!(currNode.next === null)) {
        print(currNode.next.element);
        currNode = currNode.next;
    }
}

function find(item) {
    var currNode = this.head;
    while (currNode.element != item) {
        currNode = currNode.next;
    }
    return currNode;
}

var cities = new LList();
cities.insert("Conway", "head");
cities.insert("Russellville", "Conway");
cities.insert("Carlisle", "Russellville");
cities.insert("Alma", "Russellville");
print("\n\n");
cities.display();
print("\n\n");
cities.findLast();
print("\n\n");
cities.remove("Carlisle");
cities.display();
print();
cities.dispReverse();