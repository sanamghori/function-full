function gareat(name) {
    return "hello,".concat(name);
}
console.log(gareat("hina"));
console.log(gareat("sana"));
console.log(gareat("anaya paari"));
function aadd(a, b, c) {
    return (a + b + c);
}
console.log(aadd(5, 5, 5));
console.log(aadd(10, 10, 10));
//basic function
function birthday(name) {
    console.log("hello ".concat(name, " welcome to my party"));
}
birthday("wamiq");
birthday("anaya");
birthday("wali");
birthday("abu bakar");
function great(name) {
    if (name) {
        console.log("hello ".concat(name));
    }
    else {
        console.log("hello friend");
    }
}
great("anya");
great();
//optional perameters
function addtion(x, y) {
    if (x) {
        console.log(23);
    }
    else {
        console.log(24);
    }
}
addtion();
addtion(1);
//example 2
function guests(name) {
    return "welcome ".concat(name);
}
var myGuests = guests("anaya");
console.log(myGuests);
//24/4/2024
function marrige(choice) {
    if (choice === void 0) { choice = 'ammi ki choice'; }
    console.log(choice);
}
marrige("mere choice");
marrige("father ki marzi sy");
function guest(userName) {
    if (userName === void 0) { userName = "guest1234"; }
    console.log(userName);
}
guest();
guest("ali");
guest("sidra");
function add(digit, digit2) {
    if (digit === void 0) { digit = 10; }
    if (digit2 === void 0) { digit2 = 10; }
    console.log(digit * digit2);
}
add();
add(2, 3);
add(6 * 2, 3 * 2);
//                             defulte perameter hota hy jab value day day yhan
function game(userName) {
    if (userName === void 0) { userName = "1234"; }
    console.log(userName);
}
game();
game("sana");
function subtract(didgit3, digit4) {
    if (didgit3 === void 0) { didgit3 = 5; }
    if (digit4 === void 0) { digit4 = 2; }
    console.log(didgit3 + digit4);
}
subtract();
subtract(1 + 5); //defult ki second value add hokr 8 ay ga answer
subtract(4); //ak value de or second value 2 add hoi to 6 answer
function greet(name, age, car) {
    return "my name is ".concat(name, " my age is ").concat(age, " and my car ").concat(car);
}
console.log(greet("sana", 22, "parado"));
function person(name, age, colour) {
    return "my name is ".concat(name, " i am ").concat(age, " years old my colour is ").concat(colour);
}
console.log(person("anaya", 2, "fair"));
//yahanpory function ko type asgine ki hy
function nam(name) {
    return "pakistan";
}
console.log(nam("name"));
// jab koch return nhi hota to void type hote
function home() {
    console.log("hello");
}
home();
//arrow function
var hello = function (digit) {
    console.log(digit);
};
hello(20);
var isEven = function (digit) {
    if (digit % 2 == 0) {
        console.log("even");
    }
    else {
        console.log("odd");
    }
};
isEven(23);
isEven(22);
var calcultor = function (digit, digit2, sign) {
    if (sign == "+") {
        console.log(digit + digit2);
    }
    else if (sign == "-") {
        console.log(digit - digit2);
    }
    else if (sign == "*") {
        console.log(digit * digit2);
    }
};
calcultor(5, 10, "+");
calcultor(10, 5, "-");
calcultor(2, 2, "*");
