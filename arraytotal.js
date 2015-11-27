var nums = [];
for(var i = 0;i < 10;++ i){
    nums[i] = i + 1;
}
var samenums = nums;
var nums = [];
for(var i = 0;i < 100;++ i){
    nums[i] = i + 1;
}
var samenums = nums;//浅复制
nums[0] = 400;
print(samenums[0]);

function copy(arr1,arr2){//深复制
    for(var i = 0;i < arr1.length;++ i){
        arr2[i] = arr1[i];
    }
}
var nums = [];
for(var i = 0;i < 100;++ i){
    nums[i] = i + 1;
}
var samenums = [];
copy(nums,samenums);
nums[0] = 400;
print(samenums[0]);
print(nums)