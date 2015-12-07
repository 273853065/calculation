load("linklist.js");
function Set() {
    this.dataStore = new LList();
    this.add = add;
    this.remov = remov;
    this.size = size;
    this.union = union; //并集
    this.intersect = intersect; //交集
    this.subset = subset;
    this.difference = difference;
    this.sho = sho;
    this.contains = contains;
}

function sho(){
    return this.dataStore.display();
}

function difference(set) {
    var currNode = this.dataStore.head;
    var tempSet = new Set();
    for (var i = 0; currNode !== null; ++i) {
        if (!set.contains(currNode)) {
            tempSet.add(currNode);
        }
    }
    return tempSet;
}

function intersect(set) {
    var currNode = this.dataStore.head;
    var tempSet = new Set();
    var otempSet = new Set();
    for (var i = 0; currNode.next !== null; ++i) {
        tempSet.add(currNode);
    }
    var ocurrNode = set.dataStore.head;
    for (var i = 0; ocurrNode !== null; ++i) {
        if (tempSet.contains(ocurrNode)) {
            otempSet.add(ocurrNode);
        }
    }
    return otempSet;
}

function subset(set) {
    var currNode = this.dataStore.head;
    var tempSet = new Set();
    var otempSet = new Set();
    for (var i = 0; currNode.next !== null; ++i) {
        tempSet.add(currNode);
    }
    var ocurrNode = set.dataStore.head;
    for (var i = 0; ocurrNode !== null; ++i) {
        if (tempSet.contains(ocurrNode)) {
            otempSet.add(ocurrNode);
        } else {
            return false;
        }
    }
    return otempSet;
}

function contains(data) {
    return this.dataStore.find(data);
}

function add(newElement, item) {
    this.dataStore.insert(newElement, item);
}

function remov(data) {
    this.dataStore.remove(data);
}

function size() {
    var currNode = this.dataStore.head;
    for (var i = 0; currNode.next !== null; ++i) {
        currNode = currNode.next;
    }
    return i;
}

function union(set) {
    var tempSet = new Set();
    var currNode = this.dataStore.head;
    for (var i = 0; currNode.next !== null; ++i) {
            tempSet.add(currNode);
    }
    var ocurrNode = set.dataStore.head;
    for (var i = 0; ocurrNode.next !== null; ++i) {
        if (!tempSet.contains(ocurrNode)) {
            tempSet.add(currNode);
        }
    }
    return tempSet;
}

var cis = new Set();
var it = new Set();
cis.add("Clayton","head");
cis.add("Jennifer","Clayton");
cis.add("Danny","Jennifer");
it.add("Bryan","head");
it.add("Clayton","Bryan");
it.add("Jennifer","Clayton");
print(it.size());
var data = it.contains("Clayton");
print(data);
//print("[" + cis.sho() + "] difference [" + it.sho() + "] -> [" + diff.sho() + "]");
