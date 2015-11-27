function factorial(number){
    var product = 1;
    for(var i = number;i >= 1;-- i){
        product *= i;
    }
    return product;
}
print(factorial(4));
print(factorial(5));
print(factorial(10));