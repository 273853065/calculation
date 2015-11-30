//Node节点类
function Node(element){
    this.element = element;
    this.next = null;//next好像直接就能用的样子
}

//linklist类
function LList(){
    this.head = new Node("head");
    this.find = find;
    this.insert = insert;
    this.remove = remove;
    this.display = display;
    this.findPrevious = findPrevious;
}

//找到的是item元素本身
function find(item){
    var currNode = this.head;
    while(currNode.element != item){
        currNode = currNode.next;
    }
    return currNode;
}

//在已知节点之后插入
function insert(newElement,item){
    var newNode = new Node(newElement);
    var current = this.find(item);
    newNode.next = current.next;
    current.next = newNode;
}

function display(){
    var currNode = this.head;
    while(!(currNode.next === null)){
        print(currNode.next.element);
        currNode = currNode.next;
    }
}

function findPrevious(item){
    var currNode = this.head;
    while(!(currNode.next === null) && (currNode.next.element !== item)){
        currNode = currNode.next;
    }
    return currNode;
}

function remove(item){
    var prevNode = this.findPrevious(item);
    if(!(prevNode.next === null)){
        prevNode.next = prevNode.next.next;
    }
}

var cities = new LList();
cities.insert("Conway","head");
cities.insert("Russellville","Conway");
cities.insert("Alma","Russellville");
cities.insert("Carlisle","Alma");
cities.display();
print("\n\n");
cities.remove("Alma");
cities.display();