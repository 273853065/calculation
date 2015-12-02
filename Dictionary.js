function Dictionary() {
    this.add = add;
    this.datastore = new Array();
    this.find = find;
    this.remove = remove;
    this.showAll = showAll;
}

function add(key, value) {
    this.datastore[key] = value;
}

function find(key) {
    return this.datastore[key];
}

function remove(key) {
    delete this.datastore[key];
}

//function showAll() {
//    for (var key in Object.keys(this.datastore)) {
//        print(key + " -> " + this.datastore[key]);
//    }
//}

function  showAll() {
    var  keys = Object.keys(this.datastore);
    //将数组this.datastore中不为空的下标返回给数组
    //调用Object.keys后返回的是key数组，然后下面的for in遍历的的key是数组下标
    //返回一数组，其中包含有Dictionary对象的所有现存键。
    //Object.keys() 方法会返回一个由给定对象的所有可枚举自身属性的属性名组成的数组，数组中属性名的排列顺序和使用for-in循环遍历该对象时返回的顺序一致(两者的主要区别是 for-in 还会遍历出一个对象从其原型链上继承到的可枚举属性)。
    //Object.keys(obj)  obj返回该对象的所有可枚举自身属性的属性名。
    //Object.keys 返回一个所有元素为字符串的数组，其元素来自于从给定的对象上面可直接枚举的属性。这些属性的顺序与手动遍历该对象属性时的一致。
    for (var  index  in  keys) {//index还是从0开始自增的数字        
        print(keys[index]  +  " -> "  +  this.datastore[keys[index]]);    
    }
}