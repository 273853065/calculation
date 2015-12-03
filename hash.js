function HashTable() {
    this.table = new Array(137);
    this.simpleHash = simpleHash;
    this.showDistro = showDistro;//显示散列表中的数据
    this.betterHash = betterHash;
    this.put = put;//将数据存入散列表
    this.get = get;
    this.buildChains = buildChains;
}


//为了避免碰撞，首先要确保散列表中用来存储数据的数组其大小是个质数,与取余有关
//数组的长度应该在 100 以上，这是为了让数据在散列表中分布得更加均匀
//除留余数法
//散列函数的选择依赖于键值的数据类型
//如果键是整型，最简单的散列函数就是以数组的长度对键取余
//解决碰撞的方法：开链法和线性探测法
function simpleHash(data){
    var total = 0;
    for(var i = 0;i < data.length;++ i){
        total += data.charCodeAt(i);//返回每个字符的ASCII码
    }
    print("Hash value: " + data + " -> " + total);
    return total % this.table.length;
}

//霍纳算法
function betterHash(string){
    const H = 37;
    var total = 0;
    for(var i = 0;i < string.length;++ i){
        total += H * total + string.charCodeAt(i);
    }
    total = total % this.table.length;
    print("Hash value: " + string + " -> " + parseInt(total));
    return parseInt(total);
}

//function put(data){
//    var pos = simpleHash(data);
//    var pos = this.betterHash(data);
//    this.table[pos] = data;
//}

//存入key键和data的值
function put(key,data){
    var pos = this.betterHash(key);
    var index = 0;
    if(this.table[pos][index] === undefined){
        this.table[pos][index] = key;
        this.table[pos][index + 1] = data;
        ++ index;
    }else{
        while(this.table[pos][index] !== undefined)
        ++ index;
    }
    this.table[pos][index] = key;
    this.table[pos][index + 1] = data;
    ++ index;
}

//获取key键对应的值
function get(key){
    var index = 0;
    var hash = this.betterHash(key);
    if(this.table[hash][index] === key){
        return this.table[hash][index + 1];
        index += 2;
    }else{
        while(this.table[hash][index] !== key){
            index += 2;
        }
        return this.table[hash][index + 1];
    }
    return undefined;
}

function showDistro(){
    var n = 0;
    for(var i = 0;i < this.table.length;++ i){
        if(this.table[i][0] !== undefined){//开链法这样写
            print(i + ": " + this.table[i]);
        }
    }
}

//开链法解决冲突
function buildChains(){
    for(var i = 0;i < this.table.length;++ i){
        this.table[i] = new Array();
    }
}

//线性探测法
//线性探测法隶属于一种更一般化的散列技术：开放寻址散列
//当发生碰撞时，线性探测法检查散列表中的下一个位置是否为空。如果为空，
//就将数据存入该位置；如果不为空，则继续检查下一个位置，直到找到一个空的位置为止。该技术是基于这样一个事实：每个散列表都会有很多空的单元格，可以使用它们来存储数据。
//当存储数据使用的数组特别大时，选择线性探测法要比开链法好