putstr("Enter a month number:");
var monthNum = readline();
var monthName;
switch(monthNum){
    case "1":
        monthName = "January";
        print(monthName);
        break;
    case "2":
        monthName = "February";
        print(monthName);
        break;
    case "3":
        monthName = "March";
        print(monthName);
        break;
    case "4":
        monthName = "April";
        print(monthName);
        break;
    case "5":
        monthName = "May";
        print(monthName);
        break;
    case "6":
        monthName = "June";
        print(monthName);
        break;
    case "7":
        monthName = "July";
        print(monthName);
        break;
    case "8":
        monthName = "August";
        print(monthName);
        break;
    case "9":
        monthName = "September";
        print(monthName);
        break;
    case "10":
        monthName = "October";
        print(monthName);
        break;
    case "11":
        monthName = "November";
        print(monthName);
        break;
    case "12":
        monthName = "December";
        print(monthName);
        break;
    default:
        print("Bad input");
}