function getRandomInt(min,max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function genStuData(arr){
    for(var i = 0;i < arr.length;++ i){
        var num = "";//num是一个字符串
        for(var j = 1;j <= 9;++ j){//for的作用是向num中添加10位数字
            num += Math.floor(Math.random() * 10);//产生0-10之间的小数，向下取整
        }
        num += getRandomInt(50,100);//在10位数字中添加两位成绩
        arr[i] = num;
    }
}

load("hash.js");
var numStudents = 10;
//var arrSize = 97;
//var idLen = 9;
var students = new Array(numStudents);
genStuData(students);
print("Student data: \n");
for(var i = 0;i < students.length;++ i){
    print(students[i].substring(0,8) + " " + students[i].substring(9));
}
print("\n\n Data distribution: \n");
var hTable = new HashTable();
for(var i = 0;i < students.length;++ i){
    hTable.put(students[i]);
}
hTable.showDistro();