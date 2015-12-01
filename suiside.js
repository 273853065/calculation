function Node(element) {
    this.element = element;
    this.next = null;
    this.advance = advance;
}

function CLList() {
    this.head = new Node("head");
    this.head.next = this.head;
    this.find = find;
    this.insert = insert;
    this.display = display;
    this.remove = remove;
    this.findPrevious = findPrevious;
    this.advances = advances;
}

function advance(n) {}

//在已知节点之后插入
function insert(newElement, item) {
    var newNode = new Node(newElement);
    var current = this.find(item);
    newNode.next = current.next;
    current.next = newNode;
}

function remove(item) {
    var prevNode = this.findPrevious(item);
    prevNode.next = prevNode.next.next;
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
    while (currNode.next !== this.head) {
        print(currNode.next.element);
        currNode = currNode.next;
    }
}

function find(item) {
    var currNode = this.head;
    while ((currNode.element != item) && currNode.next !== this.head) {
        currNode = currNode.next;
    }
    return currNode;
}

function advances(n) {
    var currNode = this.head;
    var oldlist = new CLList();
    var newlist = new CLList();
    var count = n;
    while (true) {
//        oldlist = this;
        while (count >= 0) {
            if (currNode.next === this.head) {
                currNode = currNode.next;
            } else {
                currNode = currNode.next;
                --count;
            }
        }
        this.remove(currNode.element);
        this.display();
        print("\n\n");
//        newlist = this;
//        if (compare(newlist, oldlist)) {
//            print("success!");
//            this.display();
//            return true;
//        }
        if(this.head === this.head.next.next){
            return true;
        }
        count = n;
    }
}

function compare(lista, listb) {
    var nodea = lista.head;
    var nodeb = listb.head;
    while (nodea.next !== lista.head && nodeb.next !== listb.head) {
        if (nodea.element === nodeb.element) {
            nodea = nodea.next;
            nodeb = nodeb.next;
        } else {
            return false;
        }
    }
    if (nodea.next === lista.head && nodeb.next === listb.head) {
        return true;
    }
}

var people = new CLList();
putstr("Put down the number of people: ");
var n = parseInt(readline());
putstr("Put down the number of leap: ");
var m = parseInt(readline());
if (m > n) {
    print("ERROR!");
} else {
    people.insert(1, "head");
    for (var i = 2; i < n + 1; ++i) {
        people.insert(i, i - 1);
    }
    people.display();
    people.advances(m);
}