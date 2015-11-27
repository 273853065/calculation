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

function matching(exp, n) {
    var st = new Array(1000); //设置一个栈，用来存放扫描表达式中的括号
    var top = -1;
    var i = 0;
    var tag = 1;
    while (i < n && tag == 1) {
        if (exp[i] == '(' || exp[i] == '[' || exp[i] == '{') //遇到'(''[''{',则将其入栈
        {
            top++;
            st[top] = exp[i];
        }
        if (exp[i] == ')') //遇到')',若栈顶是'(',则继续处理，否则以不配对返回        
            if (st[top] == '(') top--;
            else tag = 0;
        if (exp[i] == ']')
            if (st[top] == '[') top--;
            else tag = 0;
        if (exp[i] == '}')
            if (st[top] == '{') top--;
            else tag = 0;
        i++;
    }
    if (top >= 0) tag = 0; //若栈不空，则不配对
    return tag;
}

function match(exp) {
    var stack = new Stack();
    var i = 0;
    while (i < exp.length) {
        if (stack.length() === 0) {
            if (exp[i] === "(") {
                stack.push([exp[i], i]);
            } else if (exp[i] === ")") {
                return "NO." + (i + 1) + " match error!";
            }
        } else if (stack.length() > 0 && exp[i] === "(") {
            stack.push([exp[i], i]);
        } else if (stack.length() > 0 && 　exp[i] === ")") {
            stack.pop();
        }
        ++i;
    }
    var str = [];
    if (stack.length() > 0) {
        for (var j = 0; j < stack.length(); ++j) {
            str[j] = stack.pop();
        }
        return str;
    } else {
        return "Good Match!";
    }
}

var string = "2.3+23/12+(3.14159*0.24";
var str = string.split("");
print(match(str));