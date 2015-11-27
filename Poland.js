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

//计算逆波兰表达式的值  
function calculate(RPolishArray) {      
    var  result  = 0;      
    var  tempArray  = new  Array(100);      
    var  tempNum  = -1;      
    for (var i  = 0; i  < RPolishArray.length; i++) {          
        if (RPolishArray[i].match(/\d/)) {              
            tempNum++;              
            tempArray[tempNum]  = RPolishArray[i];          
        } else {              
            switch (RPolishArray[i]) {                  
            case  '+':
                result  = (tempArray[tempNum - 1]  * 1)  + (tempArray[tempNum]  * 1);                      
                tempNum--;                      
                tempArray[tempNum]  = result;                      
                break;                  
            case  '-':
                result  = (tempArray[tempNum - 1]  * 1)  - (tempArray[tempNum]  * 1);                      
                tempNum--;                      
                tempArray[tempNum]  = result;                      
                break;                  
            case  '*':
                result  = (tempArray[tempNum - 1]  * 1)  * (tempArray[tempNum]  * 1);                      
                tempNum--;                      
                tempArray[tempNum]  = result;                      
                break;                  
            case  '/':
                result  = (tempArray[tempNum - 1]  * 1)  / (tempArray[tempNum]  * 1);                      
                tempNum--;                      
                tempArray[tempNum]  = result;                      
                break;              
            }          
        }      
    }      
    result  = tempArray[tempNum];          
    return  result;    
} 

//把普通算术表达式转换为逆波兰表达式  
function  toRPolish(input) {      
    var  regex  = /(\(|\)|\+|\-|\*|\/)+/; //匹配(、)、+、-、*、/一个或多个      
    var  array  = input.split(regex); //将输入算式用regex这个正则表达式分隔开 
    //    print(array);
    var  RPolish  = ""; //初始化逆波兰表达式(后缀表达式)      
    var  isI  = false; //isI是干什么的？      
    var num  = 0; //array数组自增累加变量      
    var  SymbolArray  = new  Array(100); //运算符栈      
    var  SymbolNum  = -1; //自增算符的数量      
    for (var j  = 0; j  < input.length; j++) {               
        if (input.charAt(j).match(/\d/)) {  //charAt() 方法可返回指定位置的字符,若匹配的是数字             
            if (isI  == false) {                  
                RPolish  += ',';                  
                RPolish  +=  array[num];                  
                num++;                  
                isI  = true;              
            }          
        } else {              
            if (SymbolNum  == -1) {                       
                SymbolNum++;                      
                SymbolArray[SymbolNum]  = input.charAt(j);              
            } else {                  
                if (input.charAt(j).match(/\(/)  ||  SymbolArray[SymbolNum].match(/\(/)) {                          
                    SymbolNum++;                          
                    SymbolArray[SymbolNum]  =  input.charAt(j);                  
                } else  if (input.charAt(j).match(/\)/)) {                      
                    while (!SymbolArray[SymbolNum].match(/\(/)) {                          
                        RPolish  += ',';                                               
                        RPolish  += SymbolArray[SymbolNum];                          
                        SymbolNum--;                      
                    }                      
                    SymbolNum--;                  
                } else  if (compare(input.charAt(j), SymbolArray[SymbolNum])) {                          
                    SymbolNum++;                          
                    SymbolArray[SymbolNum]  = input.charAt(j);                  
                } else  if (!compare(input.charAt(j), SymbolArray[SymbolNum])) {                          
                    RPolish  += ',';                           
                    RPolish  += SymbolArray[SymbolNum];                          
                    SymbolNum--;                          
                    if (SymbolNum  >= 0) {                              
                        if (SymbolArray[SymbolNum].match(/\(/)) {                                  
                            SymbolNum++;                                  
                            SymbolArray[SymbolNum]  = input.charAt(j);                              
                        } else  if (!compare(input.charAt(j), SymbolArray[SymbolNum])) {                                  
                            RPolish  += ',';                                  
                            RPolish  += SymbolArray[SymbolNum];                                  
                            SymbolArray[SymbolNum]  = input.charAt(j);                              
                        } else {                                  
                            SymbolNum++;                                  
                            SymbolArray[SymbolNum]  = input.charAt(j);                              
                        }                          
                    } else {                              
                        SymbolNum++;                              
                        SymbolArray[SymbolNum] = input.charAt(j);                          
                    }                  
                }              
            }              
            isI  = false;          
        }      
    }                 
    while (SymbolNum  >= 0) {          
        RPolish +=  ',';          
        RPolish +=  SymbolArray[SymbolNum];          
        SymbolNum--;      
    }      
    regex  = /,/;      
    var RPolishArray  = RPolish.split(regex);      
    return  RPolishArray;  
}

function toRPoland(input) {
    var  regex  = /(\(|\)|\+|\-|\*|\/)/; //必然是会分割空字符的
    var array = input.split(regex);
    for (var k = 0; k < array.length; ++k) {
        if (array[k] === "") {
            array.splice(k, 1);
        }
    }
    print(array);
    var RPolish = [];
    var num = 0;
    var opStack = new Stack();
    for (var i = 0; i < array.length; ++i) {
        if (array[i].match(/\d/)) {
            RPolish[num] = array[i];
            ++num;
        } else {
            if (opStack.top === 0) {
                opStack.push(array[i]);
            } else {
                if (array[i].match(/\)/)) {
                    while (opStack.peek() !== "(") {
                        RPolish[num] = opStack.pop();
                        ++num;
                    }
                    opStack.pop();
                } else {
                    if (array[i].match(/\+/) || array[i].match(/\-/) || array[i].match(/\*/) || array[i].match(/\//)) {
                        if (compare(array[i], opStack.peek())) {
                            opStack.push(array[i]);
                        } else {
                            while (compare(opStack.peek(), array[i])) {
                                RPolish[num] = opStack.pop();
                                ++num;
                            }
                            opStack.push(array[i]);
                        }
                    } else {
                        if (array[i].match(/\(/)) {
                            opStack.push(array[i]);
                        }
                    }
                }
            }
        }
    }
    while (opStack.top > 0) {
        RPolish[num] = opStack.pop();
        ++num;
    }
    return RPolish;
}
/*
中缀转后缀流程:
1、定义正则表达式
var  regex  = /(\(|\)|\+|\-|\*|\/)/;
用来切割算式的运算数和运算符，将切割好的数组赋给array，定义RPolish为存贮最终后缀表达式的数组，定义num为自增RPolish角标，定义opStack为存放运算符的栈
2、开始转换，如果array[i]为数字，直接入栈；若不是进入3
3、若栈为空或者栈顶为“（”，array[i]直接入栈，若不是进入4
4、若array[i]为“（”，直接入栈，若不是进入5
5、若array[i]为“)”,进入循环，将栈中运算符依次弹出赋给RPolish，直到栈顶为“（”停止，弹出“（”，若不是进入6
6、若array[i]为“+”或“-”或“*”或“/”其中一项，则进入循环，判断array[i]与栈顶元素的优先级，若array[i]优先级大于栈顶，则直接入栈，若小于或者等于，则依次弹出栈顶大于或等于array[i]的运算符赋给RPolish，然后将array[i]压入栈
7、重复2-6，直到循环结束，判断栈是否为空，若为空，返回RPolish的值，若不为空，将栈中的值依次弹出赋给RPolish，返回RPolish的值
*/
function toRPoland(input) {
    var  regex  = /(\(|\)|\+|\-|\*|\/)/; //必然是会分割空字符的
    var array = input.split(regex);
    for (var k = 0; k < array.length; ++k) { //去除空白元素
        if (array[k] === "") {
            array.splice(k, 1);
        }
    }
    print(array);
    var RPolish = [];
    var num = 0;
    var opStack = new Stack();
    for (var i = 0; i < array.length; ++i) {
        if (array[i].match(/\d/)) {
            RPolish[num] = array[i];
            ++num;
        } else {
            if (opStack.top === 0　 || opStack.peek() === "(") {
                opStack.push(array[i]);
            } else {
                if (array[i].match(/\(/)) {
                    opStack.push(array[i]);
                } else {
                    if (array[i].match(/\)/)) {
                        while (opStack.peek() !== "(") {
                            RPolish[num] = opStack.pop();
                            ++num;
                        }
                        opStack.pop();
                    } else {
                        if (array[i].match(/\+/) || array[i].match(/\-/) || array[i].match(/\*/) || array[i].match(/\//)) {
                            while (compare(opStack.peek(), array[i])) {
                                RPolish[num] = opStack.pop();
                                print(opStack.dataStore);
                                ++num;
                            }
                            while (compareS(opStack.peek(), array[i])) {
                                RPolish[num] = opStack.pop();
                                print(opStack.dataStore);
                                ++num;
                            }
                            opStack.push(array[i]);
                        }
                    }
                }
            }
        }
    }
    while (opStack.top > 0) {
        RPolish[num] = opStack.pop();
        ++num;
    }
    return RPolish;
}

//优先级大于
function  compare(a, b) {      
    if ((a.match(/\*/) || a.match(/\//)) && (b.match(/\+/) || b.match(/\-/))) {          
        return  true;      
    } else {          
        return  false;      
    } 
}

//优先级等于
function  compareS(c, d) {      
    if ((c === "*" || c === "/") && (d === "*" || d === "/") || ((c === "+" || c === "-") && (d === "+" || d === "-"))) {           //为什么在这里写正则表达式匹配会出现undefined错误
        return  true;      
    } else {          
        return  false;      
    } 
}

//后缀表达式求值
/*
算法流程：
1、定义存放运算数的栈numstack，定义暂存结果的变量result，定义暂存出栈运算符的变量numa，numb
2、进入循环，如果params[i]为数字，则直接入栈，若不是进入3
3、将栈顶的两个元素出栈分别赋给numb和numa，若params[i]为相应+或-或*或/，相应运算，并将运算结果压栈
4、重复2-3，直到循环结束弹出栈顶元素
*/
function calculation(params) {
    var numstack = new Stack();
    var result = 0;
    var numa = 0;
    var numb = 0;
    for (var i = 0; i < params.length; ++i) {
        if (params[i].match(/\d/)) {
            numstack.push(params[i]);
        } else {
            numa = parseFloat(numstack.pop());//如果不这样写，出栈的元素会被认为是字符，导致计算错误
            numb = parseFloat(numstack.pop());
//            print(params[i]);
//            print(numa);
//            print(numb);
            switch (params[i]) {
            case "+":
                result = numa + numb;
                break;
            case "-":
                result = numb - numa;
                break;
            case "*":
                result = numa * numb;
                break;
            case "/":
                result = numb / numa;
                break;
            }
//            print(result);
            numstack.push(result);
        }
    }
    return numstack.pop();
}

//括号匹配
/*
算法流程：
1、定义存放括号的栈stack
2、定义自增变量i = 0，循环条件为i < exp.length,进入循环
3、若栈为空，若exp[i]为左括号，则入栈，否则进入4
4、若exp[i]为右括号，则报错退出程序
5、若栈不空，且exp[i]为左括号，则直接入栈；若为右括号，将栈顶元素弹出
6、从夫2-5步，直到循环结束
7、定义空数组str，若栈非空，则弹出栈中所有元素，这些都是未匹配的括号；若为空则返回good match
*/
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


var a = '1+2/3+(4*5+6)*7';
print(match(a));
var b = toRPoland(a);
print(b);
print(calculation(b));