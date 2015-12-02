load("Dictionary.js");
var nametel = read("tel.txt").split("\n");
var telBook = new Dictionary();
for (var i = 0; i < nametel.length; ++i) {
    var cutnmtl = nametel[i].split(",");
    telBook.add(cutnmtl[0], cutnmtl[1]);
}
telBook.showAll();
telBook.show("Frank");