function Queue() {
    this.dataStore = [];
    this.enqueue = enqueue; //方法向队尾添加一个元素
    this.dequeue = dequeue; //方法删除队首的元素
    this.front = front; //读取队首
    this.back = back; //读取队尾
    this.toString = toString; //显示队列内的所有元素
    this.empty = empty; //判断队列是否为空
}

function Patient(name, code) {
    this.name = name;
    this.code = code;
}

function enqueue(element) {
    this.dataStore.push(element);
}

function dequeue() {
    var priority = this.dataStore[0].code;
    var j = 0;
    for (var i = 1; i < this.dataStore.length; ++i) {
        if (this.dataStore[i].code > priority) {
            priority = this.dataStore[i].code;
            j = i;
        }
    }
    return this.dataStore.splice(j, 1);
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
        retStr += this.dataStore[i].name + " code: " + this.dataStore[i].code + "\n";
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

var p = new Patient("Smith", 5);
var ed = new Queue();
ed.enqueue(p);
p = new Patient("Jones", 4);
ed.enqueue(p);
p = new Patient("Fehrenbach", 6);
ed.enqueue(p);
p = new Patient("Brown", 1);
ed.enqueue(p);
p = new Patient("Ingram", 1);
ed.enqueue(p);
print("a.waiting in room\nb.being treated\nc.waiting\nplease choose: ");
var tocken = readline();
if (tocken === "a") {
    var seen = ed.dequeue();
    print("Patient being treated: " + seen[0].name);
} else {
    if (tocken === "b") {
        print("Patients waiting to be seen: ");
        print(ed.toString());
    }
}
print(ed.toString());

print("Patients waiting to be seen: ");
print(ed.toString());
var seen = ed.dequeue();
print("Patient being treated: " + seen[0].name);
print("Patients waiting to be seen: ")
print(ed.toString());
var seen = ed.dequeue();
print("Patient being treated: " + seen[0].name);
print("Patients waiting to be seen: ")
print(ed.toString());