load("hash.js");
var words = new HashTable();
var array = read("message.txt").replace(/[\ |\~|\`|\!|\@|\#|\$|\%|\^|\&|\*|\(|\)|\-|\_|\+|\=|\||\\|\[|\]|\{|\}|\;|\:|\"|\'|\,|\<|\.|\>|\/|\?]/g, " "); // /g表示全局匹配，将所有标点符号替换
//filter()方法适用于数组
//print(array);
array = array.split(" ");
//print(array);
for (var i = 0; i < array.length; ++i) {
   if (array[i] === "") {
      continue;
   } else {
      words.put(array[i]);
   }
}
var b = words.get('May');
print(b);
words.showDistro();