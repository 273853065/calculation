function CArray(numElements) {
    this.gaps = [5, 3, 1];
    this.dataStore = [];
    this.pos = 0;
    this.numElements = numElements;
    this.insert = insert;
    this.toString = toString;
    this.clear = clear;
    this.setData = setData;
    this.swap = swap; //交换函数
    this.bubbleSort = bubbleSort; //冒泡排序
    this.selectionSort = selectionSort; //选择排序
    this.insertionSort = insertionSort; //插入排序
    this.shellsort1 = shellsort1; //希尔排序1
    this.shellsort = shellsort; //希尔排序
    this.mergeSort = mergeSort; //归并排序
    this.mergeArrays = mergeArrays;
    this.qSort = qSort;//快速排序
    for (var i = 0; i < numElements; ++i) {
        this.dataStore[i] = i;
    }
}

function setGaps(arr) {
    this.gaps = arr;
}

function setData() {
    for (var i = 0; i < this.numElements; ++i) {
        this.dataStore[i] = Math.floor(Math.random() * (this.numElements + 1));
    }
}

function clear() {
    for (var i = 0; i < this.dataStore.length; ++i) {
        this.dataStore[i] = 0;
    }
}

function insert(element) {
    this.dataStore[this.pos++] = element;
}

function toString() {
    var restr = "";
    for (var i = 0; i < this.dataStore.length; ++i) {
        restr += this.dataStore[i] + " ";
        if (i > 0 & i % 10 === 0) {
            restr += "\n";
        }
    }
    return restr;
}

function swap(arr, index1, index2) {
    var temp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = temp;
}

function bubbleSort() {
    var numElements = this.dataStore.length;
    var temp;
    for (var outer = numElements; outer >= 2; --outer) {
        for (var inner = 0; inner <= outer - 1; ++inner) {
            if (this.dataStore[inner] > this.dataStore[inner + 1]) {
                swap(this.dataStore, inner, inner + 1);
            }
        }
        print(this.toString());
    }
}

function selectionSort() {
    var min, temp;
    for (var outer = 0; outer <= this.dataStore.length - 2; ++outer) {
        min = outer;
        for (var inner = outer + 1; inner <= this.dataStore.length - 1; ++inner) {
            if (this.dataStore[inner] < this.dataStore[min]) {
                min = inner;
            }
            swap(this.dataStore, outer, min);
        }
    }
}

function insertionSort() {
    var temp, inner;
    for (var outer = 1; outer <= this.dataStore.length - 1; ++outer) {
        temp = this.dataStore[outer];
        inner = outer;
        while (inner > 0 && (this.dataStore[inner - 1] >= temp)) {
            this.dataStore[inner] = this.dataStore[inner - 1];
            --inner;
        }
        this.dataStore[inner] = temp;
    }
}

function shellsort() {
    for (var g = 0; g < this.gaps.length; ++g) {
        for (var i = this.gaps[g]; i < this.dataStore.length; ++i) {
            var temp = this.dataStore[i];
            for (var j = i; j >= this.gaps[g] && this.dataStore[j - this.gaps[g]] > temp; j -= this.gaps[g]) {
                this.dataStore[j] = this.dataStore[j - this.gaps[g]];
            }
            this.dataStore[j] = temp;
        }
    }
}

function shellsort1() {
    var N = this.dataStore.length;
    var h = 1;
    while (h < N / 3) {
        h = 3 * h + 1;
    }
    while (h >= 1) {
        for (var i = h; i < N; i++) {
            for (var j = i; j >= h && this.dataStore[j] < this.dataStore[j - h]; j -= h) {
                swap(this.dataStore, j, j - h);
            }
        }
        h = (h - 1) / 3;
    }
}

// 其他函数的定义在这里
function mergeArrays(arr, startLeft, stopLeft, startRight, stopRight) {
    var rightArr = new Array(stopRight - startRight + 1);
    var leftArr = new Array(stopLeft - startLeft + 1);
    k = startRight;
    for (var i = 0; i < (rightArr.length - 1); ++i) {
        rightArr[i] = arr[k];
        ++k;
    }
    k = startLeft;
    for (var i = 0; i < (leftArr.length - 1); ++i) {
        leftArr[i] = arr[k];
        ++k;
    }
    rightArr[rightArr.length - 1] = Infinity; // 哨兵值
    leftArr[leftArr.length - 1] = Infinity; // 哨兵值
    var m = 0;
    var n = 0;
    for (var k = startLeft; k < stopRight; ++k) {
        if (leftArr[m] <= rightArr[n]) {
            arr[k] = leftArr[m];
            m++;
        } else {
            arr[k] = rightArr[n];
            n++;
        }
    }
    print("left array - ", leftArr);
    print("right array - ", rightArr);
}

function mergeSort() {
    if (this.dataStore.length < 2) {
        return;
    }
    var step = 1;
    var left, right;
    while (step < this.dataStore.length) {
        left = 0;
        right = step;
        while (right + step <= this.dataStore.length) {
            mergeArrays(this.dataStore, left, left + step, right, right + step);
            left = right + step;
            right = left + step;
        }
        if (right < this.dataStore.length) {
            mergeArrays(this.dataStore, left, left + step, right, this.dataStore.length);
        }
        step *= 2;
    }
}

function qSort(arr) {
    if (arr.length == 0) {
        return [];
    }
    var left = [];
    var right = [];
    var pivot = arr[0];
    for (var i = 1; i < arr.length; i++) {
        print(" 基准值：" + pivot + " 当前元素：" + arr[i]);
        if (arr[i] < pivot) {
            print(" 移动 " + arr[i] + " 到左边 ");
            left.push(arr[i]);
        } else {
            print(" 移动 " + arr[i] + " 到右边 ");
            right.push(arr[i]);
        }
    }
    return qSort(left).concat(pivot, qSort(right));
}
var a = [];
for (var i = 0; i < 10; ++i) {
    a[i] = Math.floor((Math.random() * 100) + 1);
}

print(a);
print();
print(qSort(a));

//var numElements = 10;
//var mynums = new CArray(numElements);
//mynums.setData();
//print(mynums.toString());
//mynums.bubbleSort();
//print();
//print(mynums.toString());
//var numElements = 10000;
//var nums = new CArray(numElements);
//nums.setData();
//var start = new Date().getTime();
//nums.bubbleSort();
//var stop = new Date().getTime();
//var elapsed = stop - start;
//print(numElements + " spend " + elapsed + " s.");
//start = new Date().getTime();
//nums.selectionSort();
//stop = new Date().getTime();
//elapsed = stop - start;
//print(numElements + " spend " + elapsed + " s.");
//start = new Date().getTime();
//nums.insertionSort();
//stop = new Date().getTime();
//elapsed = stop - start;
//print(numElements + " spend " + elapsed + " s.");

//var nums = new CArray(10);
//nums.setData();
//print("shellsort: \n");
//print(nums.toString());
//print("\n shellsorting: \n");
//nums.shellsort1();
//print("\n shellsorted: \n");
//print(nums.toString());

var nums = new CArray(10);
nums.setData();
print(nums.toString());
nums.mergeSort();
print(nums.toString());