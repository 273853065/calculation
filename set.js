//集合类
function Set(){
    this.dataStore = [];
    this.add = add;
    this.remove = remove;
    this.size = size;
    this.union = union;
    this.intersect = intersect;
    this.subset = subset;
    this.difference = difference;
    this.show = show;
}

function add(data){
    if(this.dataStore.indexOf(data) < 0){// indexOf() 检查新加入的元素在数组中是否存在
        this.dataStore.push(data);
        return true;
    }else{
        return false;
    }
}