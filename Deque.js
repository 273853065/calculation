function Deque() {
    this.dataStore = [];
    this.enqueh = enqueh; //方法向队头添加一个元素
    this.dequeh = dequeh; //方法删除队头的元素
    this.enquer = enquer; //方法向队尾添加一个元素
    this.dequer = dequer; //方法删除队尾的元素
    this.front = front; //读取队首
    this.back = back; //读取队尾
    this.toString = toString; //显示队列内的所有元素
    this.empty = empty; //判断队列是否为空
}

function enqueh(element) {
    this.dataStore.unshift(element);
}

function dequeh() {
    return this.dataStore.shift();
}

function dequer() {
    return this.dataStore.pop();
}

function enquer(element) {
    return this.dataStore.push(element);
}

function front() {
    return this.dataStore[0];
}

function back() {
    return this.dataStore[this.dataStore.length - 1];
}

function toString() {
    var retStr = "";
    for (var i = 0; i < this.dataStore.length; ++i) {
        retStr += this.dataStore[i] + "\n";
    }
    return retStr;
}

function empty() {
    if (this.dataStore.length === 0) {
        return true;
    } else {
        return false;
    }
}

function Palindrome(params) {
    var deque = new Deque();
    var array = params.split("");
    var array1 = [];
    var tag = false;
    print(array);
    for (var i = 0; i < array.length; ++i) {
        deque.enquer(array[i]);
    }
    while (!deque.empty()) {
        array1.push(deque.dequer());
        print(array1);
    }
    if (array.length === array1.length) {
        for (var j = 0; j < array.length; ++j) {//如何判断两个数组是否相同？
            if (array[j] === array1[j]) {
                tag = true;
            } else {
                tag = false;
                break;
            }
            print(tag);
        }
        if (tag === true) {
            return "palindrome!";
        } else {
            return "not palindrome!";
        }
    } else {
        return "not palindrome!";
    }
    print(array === array1);
    if (array === array1) {
        return "palindrome!";
    } else {
        return "not palindrome!";
    }
}

var q = new Deque();
q.enquer("Meredith");
q.enquer("Cynthia");
q.enquer("Jennifer");
q.enquer("seddfx");
q.enquer("eesdf");
print(q.toString());
q.enqueh("11231");
print(q.toString());
q.dequeh();
print(q.toString());
q.dequer();
print(q.toString());
q.enquer("kljhlh");
print(q.toString());
print("Front of queue: " + q.front());
print("Back of queue: " + q.back());
var voca = "";
putstr("Enter a vocabulary: ");
name = readline();
print(Palindrome(name));