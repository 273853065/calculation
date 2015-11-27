//创建这样一个对象，它将字母存储在一个数组中，并且用一个方法可以将字母连在一起，显示成一个单词。
var words = ["l","o","v","e"];
var vocabulary = words.join("");//如果直接调用 toString() 方法，就会显示出这个逗号。使用 join() 方法，为其传入一个空字符串作为参数，则可以帮助我们解决这个问题。
print(vocabulary);