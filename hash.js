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

function put(data){
    var pos = this.betterHash(data);
    if(this.table[pos] !== undefined){
        this.table[pos].push(data);
    }else{
        this.table[pos][0] = data;
    }
}

function get(key){
    return this.table[this.betterHash(key)];
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