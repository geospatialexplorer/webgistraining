// function clickButton() {
//   //   alert("you clicked button");
//   document.querySelector("p").textContent = "Hello World";
//   document.querySelector("p").style.backgroundColor = "green";
// }

// document.getElementById("btn").addEventListener("click", clickButton);

// const firstName = "Stephen";

// console.log(firstName);

// let name = "Stephen";

// console.log(typeof name);
// let age = 29;
// console.log(typeof age);
// const birthYear = 1995;
// console.log(typeof birthYear);

// let gender;
// console.log(typeof gender);

// //data type

// //string =>
// //Number===> float number
// //boolean ==> true or false
// //undefined==>empty
// //null==>empty

// let isBirthYear1995 = true;
// console.log(typeof isBirthYear1995);
// ES6==> ECMA script
let age = 31;

age = 32;
// console.log(age);
const birthYear = 1995;
// birthYear = 1996;

const PI = 3.14;

// var age = 32;

// // for (){

// // }

// age = 34;

//const country
//population
//
//display the variable type

//syntax for creating variable

// keyword  variableName = value
//const     country      = "India"
//let       population   =1000000

let x = 5;
let y = 6;

let multiplication = x * y;
let addition = x + y;
let substraction = x - y;

console.log(multiplication, "This is multiplication result");
console.log(addition, "This is addition result");
console.log(substraction, "This is substraction result");

console.log(x * y, "the result");

//assignment

// two variables you need to create
// const name="Stephen"
// let age= 29
// age="29"
// let x=10
//let y='20'

//1) if you add name with age ? what is the result
//2) add name with string age ? What is the result
//3) perform addition,substraction,multiplication,division
//4) if you get error findout the reason
//5) operator precedence

let a = 10;
let b = 20;

let c = a + b;

console.log(c);

let d = 89;
let e = 64;

let f = d + e;

console.log(f);

//syntax for the function

// function functionName(parameter1, parameter2) {
//   //write code here
//   let number1 = parameter1;
//   let number2 = parameter2;

//   console.log(number1 + number2);
// }

// let number1 = prompt("Enter the Number 1");
// let number2 = prompt("Enter the Number 2");

function calculator() {
  let number1 = Number(prompt("Enter the Number 1"));
  let number2 = Number(prompt("Enter the Number 2"));
  addNumbers();
}
//sample code for the funtion
function addNumbers() {
  console.log(
    "The addition of " + number1 + " and " + number2 + " is",
    number1 + number2
  );
}

//assignment

// multiplication

// division

//calculator application

// addNumbers(8, 6);
// addNumbers(19, 6);
// addNumbers(8, 30);
// addNumbers(8, 54);
