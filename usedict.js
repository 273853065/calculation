load("Dictionary.js");
var pbook = new Dictionary();
pbook.add("Mike", "123");
pbook.add("David", "345");
pbook.add("Cynthia", "456");//上面这几步其实是这样的 pbook = [{"Mike":"123"},{"David":"345"},{"Cynthia":"456"}];
print("David's extension: " + pbook.find("David"));
pbook.remove("David");
pbook.showAll();