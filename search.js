//load("sort.js");
//////顺序查找
////function seqSearch(arr, data) {
////    for (var i = 0; i < arr.length; ++i) {
////        if (arr[i] === data) {
////            return true;
////        }
////    }
////    return false;
////}
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
////var nums = [];
////for (var i = 0; i < 100; ++i) {
////    nums[i] = Math.floor(Math.random() * 101);
////}
////dispArr(nums);
////putstr(" 输入一个要查找的数字：");
////var num = parseInt(readline());
////print();
////if (seqSearch(nums, num)) {
////    print(num + " 出现在这个数组中。");
////} else {
////    print(num + " 没有出现在这个数组中。");
////}
////print();
////dispArr(nums);
//
//function findMin(arr) {
//    var min = arr[0];
//    for (var i = 1; i < arr.length; ++i) {
//        if (arr[i] < min) {
//            min = arr[i];
//        }
//    }
//    return min;
//}
//
//function findMax(arr) {
//    var max = arr[0];
//    for (var i = 1; i < arr.length; ++i) {
//        if (arr[i] > max) {
//            max = arr[i];
//        }
//    }
//    return max;
//}
//
////自组织搜索数据的方法
//function seqSearch(arr, data) {
//    for (var i = 0; i < arr.length; ++i) {
//        if (arr[i] === data) {
//            if (i > 0) {
//                swap(arr, i, i - 1);
//            }
//            return true;
//        }
//    }
//    return false;
//}
//
////更好的自组织搜索
//function seqSearchBest(arr, data) {
//    for (var i = 0; i < arr.length; ++i) {
//        if (arr[i] === data && i > (arr.length * 0.2)) {
//            swap(arr, i, 0);
//            return true;
//        } else if (arr[i] === data) {
//            return true;
//        }
//    }
//    return false;
//}
//
//function swap(arr, index, index1) {
//    var temp = arr[index];
//    arr[index] = arr[index1];
//    arr[index1] = temp;
//}
//
////var nums = [];
////for (var i = 0; i < 100; ++i) {
////    nums[i] = Math.floor(Math.random() * 101);
////}
////putstr(" 输入一个要查找的数字：");
////var num = readline();
////print();
////var position = seqSearch(nums, num);
////if (position > -1) {
////    print(num + " 在这个数组中的索引位置是 " + position);
////} else {
////    print(num + " 没有出现在这个数组中。");
////}
////print();
////dispArr(nums);
////
////var nums = [];
////for (var i = 0; i < 100; ++i) {
////    nums[i] = Math.floor(Math.random() * 101);
////}
////var minValue = findMin(nums);
////dispArr(nums);
////print();
////print(" 最小值是：" + minValue);
////
////var nums = [];
////for (var i = 0; i < 100; ++i) {
////    nums[i] = Math.floor(Math.random() * 101);
////}
////var minValue = findMin(nums);
////dispArr(nums);
////print();
////print();
////print(" 最小值是：" + minValue);
////var maxValue = findMax(nums);
////print();
////print(" 最大值是：" + maxValue);
//
////var nums = [];
////for (var i = 0; i < 10; ++i) {
////    nums[i] = Math.floor(Math.random() * 11);
////}
////dispArr(nums);
////print();
////putstr(" 输入一个要查找的值：");
////var val = parseInt(readline());
////if (seqSearchBest(nums, val)) {
////    print(" 找到了元素：");
////    print();
////    dispArr(nums);
////} else {
////    print(val + " 没有出现在这个数组中。");
////}
//
//function binSearch(arr, data) {
//    var upperBound = arr.length - 1;
//    var lowerBound = 0;
//    while (lowerBound <= upperBound) {
//        var mid = Math.floor((upperBound + lowerBound) / 2);
//        if (arr[mid] < data) {
//            lowerBound = mid + 1;
//        } else if (arr[mid] > data) {
//            upperBound = mid - 1;
//        } else {
//            return mid;
//        }
//    }
//    return -1;
//}
//
//function count(arr, data) {
//    var count = 0;
//    var position = binSearch(arr, data);
//    if (position > -1) {
//        ++count;
//        for (var i = position - 1; i > 0; --i) {
//            if (arr[i] == data) {
//                ++count;
//            } else {
//                break;
//            }
//        }
//        for (var i = position + 1; i < arr.length; ++i) {
//            if (arr[i] == data) {
//                ++count;
//            } else {
//                break;
//            }
//        }
//    }
//    return count;
//}
//
//var nums = [];
//for (var i = 0; i < 100; ++i) {
//    nums[i] = Math.floor(Math.random() * 101);
//}
//insertionSort(nums); //需要插入排序,这个插入排序得重写，与sort中的无关
//dispArr(nums);
//print();
//putstr(" 输入一个要查找的值：");
//var val = parseInt(readline());
//var retVal = binSearch(nums, val);
//if (retVal >= 0) {
//    print(" 已找到 " + val + " ，所在位置为：" + retVal);
//} else {
//    print(val + " 没有出现在这个数组中。");
//}


function binSearch(arr, data) {
    var upperBound = arr.length - 1;
    var lowerBound = 0;
    while (lowerBound <= upperBound) {
        var mid = Math.floor((upperBound + lowerBound) / 2);
        if (arr[mid] < data) {
            lowerBound = mid + 1;
        } else if (arr[mid] > data) {
            upperBound = mid - 1;
        } else {
            return mid;
        }
    }
    return -1;
}

function insertionsort(arr) {
    var temp, inner;
    for (var outer = 1; outer <= arr.length - 1; ++outer) {
        temp = arr[outer];
        inner = outer;
        while (inner > 0 && (arr[inner - 1] >= temp)) {
            arr[inner] = arr[inner - 1];
            --inner;
        }
        arr[inner] = temp;
    }
}
var words = read("words.txt").split(" ");
insertionsort(words);
var word = "rhetoric";
var start = new Date().getTime();
var position = binSearch(words, word);
var stop = new Date().getTime();
var elapsed = stop - start;
if (position >= 0) {
    print(" 单词 " + word + " 被找的位置在： " + position + "。");
    print(" 二分查找消耗了 " + elapsed + " 毫秒。");
} else {
    print(word + " 这个单词没有出现在这个文件内容中。");
}