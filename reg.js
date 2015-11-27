var input = "1+233*3+(4*5+6)*7";
var  regex  = /(?!$)/;
var array = input.split(regex);
console.log(array);