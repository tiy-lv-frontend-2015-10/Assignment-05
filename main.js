/*=========================================================
    Part 1: Variables
*/
var givenName;
// Q: What does `givenName` equal right now?
// A:undefined


givenName = "Tim";
// Q: What is `givenName` set to right now?
// A:"Tim"


givenName = "JD";
// Q: What is `givenName` set to right now?
// A:"JD"


var greeting = "Hello, how are you?";
// Q: What is `greeting` set to?
// A:"Hello, how are you?"


/*=========================================================
     Part 2: Simple Math
*/

var high = 50;
var low  = 10;


var math = high - low;
// Q: What is `math` set to?
// A:40

math = high - "5";
// Q: What is `math` set to?
// A:45
//JavaScript automatically guesses at what you want. (I think!)


/* =========================================================
     Part 3: Expressions
*/

// Create a variable to calculate Tim's age
// The answer should read "Tim is 32 years old"
// The answer shoud not be written in a comment.
var born = 1983;
var today = 2015;

// Answers Below:
var yearsAlive = today - born;
var timsAge = yearsAlive;
if (timsAge === 32) {
    console.log("Tim is 32 years old");
}


// Store some information following in variables.
var yourName = "Kristie";
var instructorName = "Mike";

// Update the variables above so the expression reads correctly.
// Answers Below:
var yourName = "Kristie";
var instructorName = "Mike";
var statement = yourName + " is taking a class at The Iron Yard, my instructor's name is " + instructorName;
console.log(statement);

// Final Statement
var statement = yourName + " is taking a class at The Iron Yard, my instructor's name is " + instructorName;
