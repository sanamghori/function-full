function gareat(name:string) {
    return `hello,${name}`;
}
console.log(gareat("hina"));
console.log(gareat("sana"));
console.log(gareat("anaya paari"));

function aadd(a:number,b:number,c:number) {
    return (a+b+c)
}
console.log(aadd(5,5,5));
console.log(aadd(10,10,10));
//basic function
function birthday(name:string) {
    console.log(`hello ${name} welcome to my party`);
    
}
birthday("wamiq");
birthday("anaya");
birthday("wali");
birthday("abu bakar");

function great(name?:string) {
    if (name){
        console.log(`hello ${name}`);
        
    } else {
        console.log(`hello friend`);
    }
}
    
great("anya");
great();

//optional perameters
function addtion(x?:number,y?:number) {
    if (x){
        console.log(23);
        
}
else {
    console.log(24);
}
}
addtion()
addtion(1)

//example 2

function guests(name:string) {
    return `welcome ${name}`
}
let myGuests:string=guests("anaya");
console.log(myGuests);
//24/4/2024

function marrige(choice:string='ammi ki choice') {
    console.log(choice);
}
marrige("mere choice")
marrige("father ki marzi sy")

function guest(userName:string="guest1234") {
    console.log(userName);
    
}
guest()
guest("ali")
guest("sidra")

function add (digit:number=10 , digit2:number=10){
    console.log(digit*digit2);
    
}
add()
add(2,3)
add(6*2,3*2)
//                             defulte perameter hota hy jab value day day yhan
function game(userName:string="1234") {
    console.log(userName);
    
}
game()
game("sana")

function subtract(didgit3:number=5,digit4:number=2){
console.log(didgit3+digit4);

}
subtract()
subtract(1+5)//defult ki second value add hokr 8 ay ga answer
subtract(4)//ak value de or second value 2 add hoi to 6 answer

function greet(name:string,age:number,car:string) {
    return`my name is ${name} my age is ${age} and my car ${car}`;}


console.log(greet("sana",22,"parado"));


function person(name:string,age:number,colour:string) {
    return`my name is ${name} i am ${age} years old my colour is ${colour}`
}
console.log(person("anaya",2,"fair"));

//yahanpory function ko type asgine ki hy
function nam (name:string):string {
    return `pakistan`
}
console.log(nam("name"));
// jab koch return nhi hota to void type hote

function home():void {
    console.log("hello");
    
}
home()

//arrow function
const hello =(digit:number) => {
    console.log(digit);
    
}
hello(20)


const isEven = ( digit:number ) => {

    if(digit%2==0){
        console.log("even");
        
    }
    else{
        console.log("odd");
        
    }
}
isEven(23)
isEven(22)

const calcultor=(digit:number,digit2:number,sign:string)=>{
    if(sign=="+"){
        console.log(digit+digit2);
    }else if(sign=="-"){
        console.log(digit-digit2);
    }else if(sign=="*"){
        console.log(digit*digit2);
        
    }
}

calcultor(5,10,"+")
calcultor(10,5,"-")
calcultor(2,2,"*")