function Queue() {
    this.dataStore = [];
    this.enqueue = enqueue; //方法向队尾添加一个元素
    this.dequeue = dequeue; //方法删除队首的元素
    this.front = front; //读取队首
    this.back = back; //读取队尾
    this.toString = toString; //显示队列内的所有元素
    this.empty = empty; //判断队列是否为空
}

function enqueue(element) {
    this.dataStore.push(element);
}

function dequeue() {
    return this.dataStore.shift();
}

function front() {
    return this.dataStore[0];
}

function back() {
    return this.dataStore[this.dataStore.length - 1];
}

function toString() {
    var retStr = "";
    for (var i = 0; i < this.dataStore.length; ++i) {
        retStr += this.dataStore[i] + "\n";
    }
    return retStr;
}

function empty() {
    if (this.dataStore.length === 0) {
        return true;
    } else {
        return false;
    }
}

function distribute(nums,queues,n,digit){
    for(var i = 0;i < n;++ i){
        if(digit === 1){
            queues[nums[i] % 10].enqueue(nums[i]);//个位排序
        }else{
            queues[Math.floor(nums[i] / 10)].enqueue(nums[i]);//十位排序
        }
    }
}

function collect(queues,nums){
    var i = 0;
    for(var digit = 0;digit < 10;++ digit){
        while(!queues[digit].empty()){
            nums[i ++] = queues[digit].dequeue();
        }
    }
}

function dispArray(arr){
    for(var i = 0;i < arr.length;++ i){
        putstr(arr[i] + " ");
    }
}

//主程序
var queues = [];
for(var i = 0;i < 10;++ i){
    queues[i] = new Queue();
}
var nums = [];
for(var i = 0;i < 10;++ i){
    nums[i] = Math.floor(Math.floor(Math.random() * 101));
}
print("Before radix sort: ");
dispArray(nums);
distribute(nums,queues,10,1);
collect(queues,nums);
distribute(nums,queues,10,10);
collect(queues,nums);
print("\n\nAfter radix sort: ");
dispArray(nums);