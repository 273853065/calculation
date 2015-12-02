load("Dictionary.js");
var words = new Dictionary();
putstr("Put down a sentence: ");
 var array = readline().replace(/[\ |\~|\`|\!|\@|\#|\$|\%|\^|\&|\*|\(|\)|\-|\_|\+|\=|\||\\|\[|\]|\{|\}|\;|\:|\"|\'|\,|\<|\.|\>|\/|\?]/g," "); // /g表示全局匹配，将所有标点符号替换
array = array.split(" ");
var num = 0;
for (var i = 0; i < array.length; ++i) {
    if (words.count() === 0 || words.find(array[i]) === undefined) {
        words.add(array[i], 1);
    } else {
        words.dataStore[array[i]] += 1;
    }
}
words.showAll();