//栈类
function Stack() {
    this.dataStore = [];
    this.top = 0;
    this.push = push;
    this.pop = pop;
    this.peek = peek;
    this.length = length;
    this.clear = clear;
}

function push(element) {
    this.dataStore[this.top++] = element; //将元素放在当前位置，top再加1
}

function pop() {
    return this.dataStore[--this.top]; //top值始终在最新一个元素的下一位.这一步等于是已经把顶端元素抛弃了
}

function peek() {
    return this.dataStore[this.top - 1];
}

function length() {
    return this.top;
}

function clear() {
    this.top = 0;
}

var Pez = new Stack();
var midStack = new Stack();
var array = [];
var i = 0;
Pez.push("r");
Pez.push("w");
Pez.push("w");
Pez.push("w");
Pez.push("y");
Pez.push("r");
Pez.push("r");
Pez.push("r");
Pez.push("y");
Pez.push("y");
Pez.push("r");
Pez.push("r");
Pez.push("y");
Pez.push("y");
Pez.push("w");
Pez.push("w");
while(Pez.top > 0){
    if(Pez.peek() === "y"){
        Pez.pop();
    }else if(Pez.peek() === "w" || Pez.peek() === "r"){
        midStack.push(Pez.pop());
    }
}
while(midStack.top > 0){
    Pez.push(midStack.pop());
}
while(Pez.top > 0){
    array[i] = Pez.pop();
    ++ i;
}
print(array.reverse());