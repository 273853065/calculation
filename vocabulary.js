load("hash.js");
var vocu = new HashTable();
vocu.buildChains();
var array = read("vocabulary.txt").split("\n");
for(var i = 0;i < array.length;++ i){
    var arr = array[i].split(" ");
//    print(arr[0]);
//    print(arr[1]);
    vocu.put(arr[0],arr[1]);
}
putstr("Enter a word: ");
var word = vocu.get(readline());
print(word);
vocu.showDistro();