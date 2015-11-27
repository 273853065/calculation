//push()
var nums = [1, 2, 3, 4, 5];
print(nums);
nums.push(6);
print(nums);
//用length方法插入数据
var nums = [1, 2, 3, 4, 5];
print(nums);
nums[nums.length] = 6;
print(nums);
//从头插入元素到数组
var nums = [2, 3, 4, 5];
var newnum = 1;
var N = nums.length;
for (var i = N; i >= 0; --i) {
    nums[i] = nums[i - 1];
}
nums[0] = newnum;
print(nums);
//使用unshift()方法更加有效
var nums = [2, 3, 4, 5];
print(nums);
var newnum = 1;
nums.unshift(newnum);
print(nums);
nums = [3, 4, 5];
nums.unshift(newnum, 1, 2);
print(nums);
//删除数组元素
var nums = [1, 2, 3, 4, 5, 9];
nums.pop();
print(nums);
//从头删除元素
var nums = [9, 1, 2, 3, 4, 5];
print(nums);
for (var i = 0; i < nums.length; ++i) {
    nums[i] = nums[i + 1];
}
print(nums);
//shift方法可以简单地解决从头删除元素
var nums = [9, 1, 2, 3, 4, 5];
nums.shift();
print(nums);
//删除第一个插入到最后
var nums = [6, 1, 2, 3, 4, 5];
var first = nums.shift();
nums.push(first);
print(nums);


//从数组中间位置插入元素
var nums = [1, 2, 3, 7, 8, 9];
var newElements = [4, 5, 6];
nums.splice(3, 0, newElements); //还可以这样写：nums.splice(3,0,4,5,6);
print(nums);
//从数组中间位置删除元素
var nums = [1, 2, 3, 100, 200, 300, 400, 4, 5];
nums.splice(3, 4);
print(nums);

//为数组排序
var nums = [1, 2, 3, 4, 5];
nums.reverse(); //翻转数组
print(nums);
//按字母排序
var names = ["David", "Mike", "Cynthia", "Clayton", "Bryan", "Raymond"];
names.sort(); //按字典顺序排序，数字不好使
print(names);
//sort()方法对数字的排序并不理想
var nums = [3, 1, 2, 100, 4, 200];
nums.sort();
print(nums); //1,100,2,200,3,4
//为了让 sort() 方法也能排序数字类型的元素，可以在调用方法时传入一个大小比较函数，排序时， sort() 方法将会根据该函数比较数组中两个元素的大小，从而决定整个数组的顺序
//对于数字类型，该函数可以是一个简单的相减操作，从一个数字中减去另外一个数字。如果结果为负，那么被减数小于减数；如果结果为 0，那么被减数与减数相等；如果结果为正，那么被减数大于减数。
function compare(num1, num2) {
    return num1 - num2;
}
var nums = [3, 1, 2, 100, 4, 200];
nums.sort(compare);
print(nums);



//不生成新数组的迭代器方法
function square(num) {
    print(num, num * num);
}
var nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
nums.forEach(square);
//every方法
function isEven(num) {
    return num % 2 == 0;
}
var nums = [2, 4, 5, 8, 10];
var even = nums.every(isEven);
if (even) {
    print("all numbers are even");
} else {
    print("not all number are even");
}
//some方法
function isEven(num) {
    return num % 2 == 0;
}
var nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var someEven = nums.some(isEven);
if (someEven) {
    print("some numbers are even");
} else {
    print("no numbers are even");
}
nums = [1, 3, 5, 7, 9];
someEven = nums.some(isEven);
if (someEven) {
    print("some numbers are even");
} else {
    print("no numbers are even");
}
//reduce()函数求和
function add(runningTotal, currentValue) {
    return runningTotal + currentValue;
}
var nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var sum = nums.reduce(add);
print(sum);
//reduce方法将数组中的元素量程一个长的字符串
function concat(accumulatedString, item) {
    return accumulatedString + item;
}
var words = ["the ", "quick ", "brown ", "fox "];
var sentence = words.reduce(concat);
print(sentence);
//reduceRight()倒叙插入
function concat(accumulatedString, item) {
    return accumulatedString + item;
}
var words = ["the ", "quick ", "brown ", "fox "];
var sentence = words.reduceRight(concat);
print(sentence);
//生成新数组的迭代方法
//有两个迭代器方法可以产生新数组： map() 和 filter() 。 map() 和 forEach() 有点儿像，对数组中的每个元素使用某个函数。两者的区别是 map() 返回一个新的数组，该数组的元素是对原有元素应用某个函数得到的结果。
//map()方法
//操作数字数组
function curve(grade) {
    return grade += 5;
}
var grades = [77, 65, 81, 92, 83];
var newGrades = grades.map(curve);
print(newGrades);
//操作字符串数组
function second(word) { //为什么写first为函数名就会报错
    return word[0];
}
var words = ["for", "your", "information"];
var acronym = words.map(second);
print(acronym.join("")); // 显示 "fyi"
//filter() 和 every() 类似，传入一个返回值为布尔类型的函数。
//当对数组中的所有元素应用该函数，结果均为 true 时，该方法并不返回 true ，而是返回一个新数组，该数组包含应用该函数后结果为 true 的元素。
function isEven(num) {
    return num % 2 == 0;
}

function isOdd(num) {
    return num % 2 != 0;
}
var nums = [];
for (var i = 0; i < 20; ++i) {
    nums[i] = i + 1;
}
var evens = nums.filter(isEven);
print("Even numbers: ");
print(evens);
var odds = nums.filter(isOdd);
print("Odd numbers: ");
print(odds);
//用filter()过滤成绩
function passing(num) {
    return num >= 60;
}
var grades = [];
for (var i = 0; i < 20; ++i) {
    grades[i] = Math.floor(Math.random() * 101);
}
var passGrades = grades.filter(passing);
print("All grades: ");
print(grades);
print("Passing grades: ");
print(passGrades);
//使用 filter() 方法过滤字符串数组
function afterc(str) {
    if (str.indexOf("cie") > -1) {
        return true;
    }
    return false;
}
var words = ["recieve", "deceive", "percieve", "deceit", "concieve"];
var misspelled = words.filter(afterc);
print(misspelled);


//二维数组创建方法matrix
Array.matrix = function (numrows, numcols, initial) {
    var arr = [];
    for (var i = 0; i < numrows; ++i) {
        var columns = [];
        for (var j = 0; j < numcols; ++j) {
            columns[j] = initial;
        }
        arr[i] = columns;
    }
    return arr;
};
var nums = Array.matrix(5, 5, 0);
print(nums[1][1]);
var names = Array.matrix(3, 3, "");
names[1][2] = "Joe";
print(names[1][2]);
var grades = [[89, 77, 78], [76, 82, 81], [91, 94, 89]]; //对于小规模的数据，这是创建二维数组最简单的方式。
print(grades[2][2]); // 显示 89



//处理二维数组中的元素，有两种最基本的方式：按列访问和按行访问。
//按行循环
var grades = [[89, 77, 78], [76, 82, 81], [91, 94, 89]];
var total = 0;
var average = 0.0;
for (var row = 0; row < grades.length; ++row) {
    for (var col = 0; col < grades[row].length; ++col) {
        total += grades[row][col];
    }
    average = total / grades[row].length;
    print("Student " + parseInt(row + 1) + " average: " + average.toFixed(2));
    total = 0;
    average = 0.0;
}
//按列循环
var grades = [[89, 77, 78], [76, 82, 81], [91, 94, 89]];
var total = 0;
var average = 0.0;
for (var col = 0; col < grades.length; ++col) {
    for (var row = 0; row < grades[col].length; ++row) {
        total += grades[row][col];
    }
    average = total / grades[col].length;
    print("Test " + parseInt(col + 1) + " average: " +
        average.toFixed(2));
    total = 0;
    average = 0.0;
}
//我的想法：如何求数组的深度？上面两个把数组写死了，行列长度相同
//参差不齐的数组
var grades = [[89, 77], [76, 82, 81], [91, 94, 89, 99]];
var total = 0;
var average = 0.0;
for (var row = 0; row < grades.length; ++row) {
    for (var col = 0; col < grades[row].length; ++col) {
        total += grades[row][col];
    }
    average = total / grades[row].length;
    print("Student " + parseInt(row + 1) + " average: " + average.toFixed(2));
    total = 0;
    average = 0.0;
}
//对象数组
function Point(x, y) {
    this.x = x;
    this.y = y;
}

function displayPts(arr) {
    for (var i = 0; i < arr.length; ++i) {
        print(arr[i].x + ", " + arr[i].y);
    }
}
var p1 = new Point(1, 2);
var p2 = new Point(3, 5);
var p3 = new Point(2, 8);
var p4 = new Point(4, 4);
var points = [p1, p2, p3, p4];
for (var i = 0; i < points.length; ++i) {
    print("Point " + parseInt(i + 1) + ": " + points[i].x + ", " + points[i].y);
}
var p5 = new Point(12, -3);
points.push(p5);
print("After push: ");
displayPts(points);
points.shift();
print("After shift: ");
displayPts(points);
//对象中的数组
function weekTemps() {
    this.dataStore = [];
    this.addd = addd;
    this.averages = averages;
}

function addd(temp) {
    this.dataStore.push(temp);
}

function averages() {
    var total = 0;
    for (var i = 0; i < this.dataStore.length; ++i) {
        total += this.dataStore[i];
    }
    return total / this.dataStore.length;
}
var thisWeek = new weekTemps();
thisWeek.addd(52);
thisWeek.addd(55);
thisWeek.addd(61);
thisWeek.addd(65);
thisWeek.addd(55);
thisWeek.addd(50);
thisWeek.addd(52);
thisWeek.addd(49);
print(thisWeek.averages());//如果函数名叫做add和average就会和上面的函数重名，造成错误