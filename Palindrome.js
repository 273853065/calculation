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

function isPalindrome(word) {
    var s = new Stack();
    for (var i = 0; i < word.length; ++i) {
        s.push(word[i]);
    }
    var rword = "";
    while (s.length() > 0) {
        rword += s.pop();//相当于字符串粘连
    }
    if (word == rword) {
        return true;
    } else {
        return false;
    }
}

var word = "hello";
if (isPalindrome(word)) {
    print(word + " is a palindrome.");
} else {
    print(word + " is not a palindrome.");
}

word = "racecar"
if (isPalindrome(word)) {
    print(word + " is a palindrome.");
} else {
    print(word + " is not a palindrome.");
}