function Node(element) {
    this.element = element;
    this.next = null;
}

function LList() {
    this.head = new Node("head");
    this.head.next = this.head;
    this.find = find;
    this.insert = insert;
    this.display = display;
    this.remove = remove;
    this.findPrevious = findPrevious;
}

//在已知节点之后插入
function insert(newElement, item) {
    var newNode = new Node(newElement);
    var current = this.find(item);
    newNode.next = current.next;
    newNode.previous = current;
    current.next = newNode;
    if (newNode.next !== null) {//如果next为空，则不需要考虑newNode.next.previous = newNode
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

function findPrevious(item) {
    var currNode = this.head;
    while (currNode.next.element !== item) {
        currNode = currNode.next;
    }
    return currNode;
}

function display() {
    var currNode = this.head;
    while (!(currNode.next === null) && !(currNode.next.element === "head")) {
        print(currNode.next.element);
        currNode = currNode.next;
    }
}

function find(item) {
    var currNode = this.head;
    while ((currNode.element != item) && !(currNode.next.element === "head")) {
        currNode = currNode.next;
    }
    return currNode;
}

var cities = new LList();
cities.insert("Conway", "head");
cities.insert("Russellville", "Conway");
cities.insert("Carlisle", "Russellville");
cities.insert("Alma", "Russellville");
cities.display();
print();
cities.remove("Carlisle");
cities.display();
print();
cities.dispReverse();