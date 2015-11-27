function Checking(amount){
    this.balance = amount;//总额
    this.deposit = deposit;//存入款额
    this.withdraw = withdraw;//取出金额
    this.toString = toString;//字符串显示
}
function deposit(amount){
    this.balance += amount;
}
function withdraw(amount){
    if(amount <= this.balance){
        this.balance -= amount;
    }
    if(amount > this.balance){
        print("Insufficient funds");
    }
}
function toString(){
    return "Balance:" + this.balance;
}
var account = new Checking(500);
account.deposit(1000);
print(account.toString());
account.withdraw(750);
print(account.toString());
account.withdraw(800);
print(account.toString());