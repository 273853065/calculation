function List() {
    this.listSize = 0; //列表的元素个数
    this.pos = 0; //列表的当前位置
    this.dataStore = []; //存储元素
    this.clear = clear; //清空列表中的所有元素
    this.find = find; //在列表中查找某一元素
    this.toString = toString; //返回列表的字符串形式
    this.insert = insert; //在现有元素中插入新元素
    this.append = append; //在列表末尾添加新元素
    this.remove = remove; //从列表中删除元素
    this.front = front; //将列表的当前位置移动到第一个元素
    this.end = end; //将列表的当前位置移动到最后一个元素
    this.prev = prev; //将当前位置前移一位
    this.next = next; //将当前位置后移一位
    this.length = length; //返回列表中元素的个数
    this.currPos = currPos; //返回列表的当前位置
    this.moveTo = moveTo; //将当前位置移动到指定位置
    this.getElement = getElement; //返回当前位置的元素
    this.length = length; //列表中有多少个元素
    this.contains = contains; //判断给定值是否在列表中
    this.moreInsert = moreInsert;
}

function compareNum(param1, param2) {
    return param1 - param2;
}

function booltrue(param) {
    return param === true;
}

function moreInsert(list, param) {
    var boolist = new List();
    if (isLetter(param)) {
        for (list.front(); list.currPos() < list.length(); list.next()) {
            if (param >= list.getElement()) {
                continue;
            } else {
                print(param + " less than some of the list,can't insert!");
                return;
            }
        }
        list.append(param);
    } else if (isNumber(param)) {
        list.append(param);
        list.dataStore.sort(compareNum);
        var pos = list.find(param);
        print(pos);
        if (pos === list.length - 1) {
            displayList(list);
        } else {
            print(param + " less than some of the list,can't insert!");
            return;
        }
    } else {
        print("输入格式错误！");
    }
}

function lessInsert(list, param) {
    var boolist = new List();
    if (isLetter(param)) {
        for (list.front(); list.currPos() < list.length(); list.next()) {
            if (param >= list.getElement()) {
                print(param + " less than some of the list,can't insert!");
                return;
            } else {
                continue;
            }
        }
        list.append(param);
    } else if (isNumber(param)) {
        list.append(param);
        list.dataStore.sort(compareNum);
        var pos = list.find(param);
        print(pos);
        if (pos === 0) {
            displayList(list);
        } else {
            print(param + " less than some of the list,can't insert!");
            return;
        }
    } else {
        print("输入格式错误！");
    }
}

function isLetter(name) {
    var str = /[a-zA-Z]/;
    if (str.test(name)) {
        return true;
    }
    return false;
}

function isNumber(name) {
    if (name.length == 0)
        return false;
    for (var i = 0; i < name.length; ++i) {
        if (name.charAt(i) < "0" || name.charAt(i) > "9")
            return false;
    }
    return true;
}

function append(element) {
    this.dataStore[this.listSize++] = element;
}

function find(element) {
    for (var i = 0; i < this.dataStore.length; ++i) {
        if (this.dataStore[i] === element) {
            return i;
        }
    }
    return -1;
}

function remove(element) {
    var foundAt = this.find(element);
    if (foundAt > -1) {
        this.dataStore.splice(foundAt, 1);
        --this.listSize;
        return true;
    }
    return false;
}

function length() {
    return this.listSize;
}

function toString() {
    return this.dataStore;
}

function insert(element, after) {
    var insertPos = this.find(after);
    if (insertPos > -1) {
        this.dataStore.splice(insertPos + 1, 0, element);
        ++this.listSize;
        return true;
    }
    return false;
}

function clear() {
    delete this.dataStore;
    this.dataStore = [];
    this.listSize = this.pos = 0;
}

function contains(element) {
    for (var i = 0; i < this.dataStore.length; ++i) {
        if (this.dataStore[i] === element) {
            return true;
        }
    }
    return false;
}

function front() {
    this.pos = 0;
}

function end() {
    this.pos = this.listSize - 1;
}

function prev() {
    if (this.pos > 0) {
        --this.pos;
    }
}

function next() {
    if (this.pos <= this.listSize - 1) {
        ++this.pos;
    }
}

function currPos() {
    return this.pos;
}

function moveTo(position) {
    this.pos = position;
}

function getElement() {
    return this.dataStore[this.pos];
}



//提取文件中的内容并存入数组
function createArr(file) {
    var arr = read(file).split("\n"); //如果用这个方法截取，一定要找到数据的共有特点
    for (var i = 0; i < arr.length; ++i) {
        arr[i] = arr[i].trim();
    }
    return arr;
}

//显示影碟清单
function displayList(list) {
    for (list.front(); list.currPos() < list.length(); list.next()) {
        //对于列表中的每一个元素，都使用 instanceof 操作符判断该元素是否是 Customer 对象。如果是，就使用 name 和 movie 做索引，得到客户检出的相应条目的值；如果不是，返回该元素即可
        if (list.getElement() instanceof Customer) {
            print(list.getElement()['name'] + ", " + list.getElement()['movie']);
        } else {
            print(list.getElement());
        }
    }
}

//Customer类
function Customer(name, movie) {
    this.name = name;
    this.movie = movie;
}

function checkOut(name, movie, filmList, customerList, checkoutlist) {
    if (filmList.contains(movie)) {
        var c = new Customer(name, movie);
        customerList.append(c);
        checkoutlist.append(movie);
        filmList.remove(movie);
    } else {
        print(movie + " is not available.");
    }
}

function checkIn(movie, checkoutList, filmList) {
    if (checkoutList.contains(movie)) {
        filmList.append(movie);
        checkoutList.remove(movie);
    } else {
        print(movie + "is not available.");
    }
}

var movies = createArr("films.txt");
var movieList = new List();
var customers = new List();
var checkList = new List();
for (var i = 0; i < movies.length; ++i) {
    movieList.append(movies[i]);
}
while (true) {
    print("Available movies: \n");
    displayList(movieList);
    putstr("\nEnter your name: ");
    var name = readline();
    putstr("What movie would you like?");
    var movie = readline();
    checkOut(name, movie, movieList, customers, checkList); //这里到底发生了什么，为什么打不出来,因为front没有加（）括号
    print("\nCustomer Rentals: \n");
    displayList(customers);
    print("\nMovies Now Available\n");
    displayList(movieList); //remove为什么会出现undefined的情况
    print("\nCheck-out Box: \n");
    displayList(checkList); //放在这里是可以看到的，只是你没看到
    putstr("\nWhich one you want to return?");
    var back = readline();
    checkIn(back, checkList, movieList);
    print("\nCheck-out Box: \n");
    displayList(checkList);
    print("\nMovies Now Available\n");
    displayList(movieList);
}