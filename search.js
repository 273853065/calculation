////顺序查找
//function seqSearch(arr, data) {
//    for (var i = 0; i < arr.length; ++i) {
//        if (arr[i] === data) {
//            return true;
//        }
//    }
//    return false;
//}
//
//function dispArr(arr) {
//    for (var i = 0; i < arr.length; ++i) {
//        putstr(arr[i] + " ");
//        if (i % 10 == 9) {
//            putstr("\n");
//        }
//    }
//    if (i % 10 != 0) {
//        putstr("\n");
//    }
//}
//var nums = [];
//for (var i = 0; i < 100; ++i) {
//    nums[i] = Math.floor(Math.random() * 101);
//}
//dispArr(nums);
//putstr(" 输入一个要查找的数字：");
//var num = parseInt(readline());
//print();
//if (seqSearch(nums, num)) {
//    print(num + " 出现在这个数组中。");
//} else {
//    print(num + " 没有出现在这个数组中。");
//}
//print();
//dispArr(nums);

var nums = [];
for (var i = 0; i < 100; ++i) {
    nums[i] = Math.floor(Math.random() * 101);
}
putstr(" 输入一个要查找的数字：");
var num = readline();
print();
var position = seqSearch(nums, num);
if (position > -1) {
    print(num + " 在这个数组中的索引位置是 " + position);
} else {
    print(num + " 没有出现在这个数组中。");
}
print();
dispArr(nums);