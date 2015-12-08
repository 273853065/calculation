load("linklistset.js");

function Set() {
    this.dataStore = new LList();
    this.add = add;
    this.removeEle = removeEle;
    this.size = size;
    this.union = union; //并集
    this.intersect = intersect; //交集
    this.subset = subset;//子集
    this.difference = difference;//补集
    this.showSet = showSet;
    this.contains = contains;
}

function showSet() {
    var currNode = this.dataStore.head;
    var tempData = [];
    while (currNode.next !== null) {
        currNode = currNode.next;
        if (currNode.element !== "head") {
            tempData.push(currNode.element);
        }
    }
    print(tempData);
    return tempData;
}

function subset(set) {
    var currNode = set.dataStore.head;
    for (var i = 0; currNode.next !== null; ++i) {
        currNode = currNode.next;
        if (!this.contains(currNode.element)) {
            continue;
        }else{
            return false;
        }
    }
    return true;
}

function intersect(set) {
    var thisSet = new Set();
    var thisNode = thisSet.dataStore.head;
    var currNode = this.dataStore.head;
    var tempSet = new Set();
    var ocurrNode = set.dataStore.head;
    var tempNode = tempSet.dataStore.head;
    for(var j = 0;currNode.next !== null;++ j){//尾插法
        currNode = currNode.next;
        thisSet.add(currNode.element,thisNode.element);
        thisNode = thisNode.next;
    }
    for (var i = 0; ocurrNode.next !== null; ++i) {
        ocurrNode = ocurrNode.next;
        if (thisSet.contains(ocurrNode.element) && ocurrNode !== set.dataStore.head) {
            tempSet.add(ocurrNode.element, tempNode.element);
        }
    }
    thisSet.showSet();
    return tempSet;
}

function difference(set) {
    var currNode = this.dataStore.head;
    var tempSet = new Set();
    var tempNode = tempSet.dataStore.head;
    var thisSet = new Set();
    var thisNode = thisSet.dataStore.head;
    var ocurrNode = set.dataStore.head;
    for (var j = 0; currNode.next !== null; ++j) {
        currNode = currNode.next;
        tempSet.add(currNode.element,tempNode.element);
    }
    for (var i = 0; ocurrNode.next !== null; ++i) {
        ocurrNode = ocurrNode.next;
        if (!tempSet.contains(ocurrNode.element)) {
            thisSet.add(ocurrNode.element,thisNode.element);
        }
    }
    return thisSet;
}

function contains(data) { //数据没有传进来.其实并非数据没有传进来，而是因为条件不全，导致运行过程中崩坏
    var currNode = this.dataStore.head;
    for (var i = 0; currNode.element !== data && currNode.next !== null; ++i) {
        currNode = currNode.next;
    }
    if ((currNode.next === null && currNode.element === data) || (currNode.next !== null && currNode.element === data)) {
        return currNode;
    } else {
        return false;
    }
}

function add(newElement, item) {
    var newNode = new Node(newElement);
    var current = this.contains(item);
    newNode.next = current.next;
    current.next = newNode;
    return newNode;
}

function removeEle(data) {
    var prevNode = this.dataStore.findPrevious(data);
    if (!(prevNode.next === null)) {
        prevNode.next = prevNode.next.next;
    }
}

function size() {
    var currNode = this.dataStore.head;
    for (var i = 0; currNode.next !== null; ++i) {
        currNode = currNode.next;
    }
    return i;
}

function union(set) {
    var thisSet = new Set();
    var thisNode = thisSet.dataStore.head;
    var currNode = this.dataStore.head;
    var ocurrNode = set.dataStore.head;
    for(var k = 0;currNode.next !== null;++ k){
        currNode = currNode.next;
        thisSet.add(currNode.element,thisNode.element);
        thisNode = thisNode.next;
    }
    for (var j = 0; ocurrNode !== null; ++j) {
        if (!thisSet.contains(ocurrNode.element)) {//顺序决定了头插和尾插法
            thisSet.add(ocurrNode.element, thisNode.element);
        }
        ocurrNode = ocurrNode.next;
    }
    return thisSet;
}

var cis = new Set();
var it = new Set();
var uni = new Set();
var inter = new Set();
var diff = new Set();
var sub = "";
cis.add("Clayton", "head");
cis.add("Jennifer", "Clayton");
cis.add("Danny", "Jennifer");
it.add("Bryan", "head");
it.add("Clayton", "Bryan");
it.add("Jennifer", "Clayton");
cis.showSet();
it.showSet();
uni = cis.union(it);
uni.showSet();
inter = cis.intersect(it);
inter.showSet();
diff = cis.difference(it);
diff.showSet();
sub = cis.subset(it);
print(sub);
//print(uni.size());
//uni.removeEle("Bryan");
//uni.showSet();
//print("[" + cis.sho() + "] difference [" + it.sho() + "] -> [" + diff.sho() + "]");