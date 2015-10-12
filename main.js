/*=========================================================
    Part 1: Variables
*/
var givenName;
// Q: What does `givenName` equal right now?
// A: A blank location in memory (= undefined)


givenName = "Tim";
// Q: What is `givenName` set to right now?
// A: "Tim" (console would ouput Tim with no quotes). A string.


givenName = "JD";
// Q: What is `givenName` set to right now?
// A: "JD"


var greeting = "Hello, how are you?";
// Q: What is `greeting` set to?
// A: "Hello, how are you?" (string).


/*=========================================================
     Part 2: Simple Math
*/

var high = 50;
var low  = 10;


var math = high - low;
// Q: What is `math` set to?
// A: 40 

math = high - "5";
// Q: What is `math` set to?
// A: 45 (typeof math returns 'number')


/* =========================================================
     Part 3: Expressions
*/

// Create a variable to calculate Tim's age
// The answer should read "Tim is 32 years old"
// The answer shoud not be written in a comment.
var born = 1983;
var today = 2015;

// Answers Below:
var age = today - born;
var tims_age = "Tim is " + age + "years old";
console.log(tims_age);


// Store some information following in variables.
var yourName;
var instructorName;

// Update the variables above so the expression reads correctly.
// Answers Below:
var yourName = "Ralph";
var instructorName = "Mike";
var yourGender = "male";


function fixThisSentence(gender) {
	var posAdj = "";
	if (gender === "male") {
		posAdj = "his";
	} else if (gender === "female") {
		posAdj = "her";
	} else {
		posAdj = "Bender's"
	}
	return posAdj;
}

var fix = fixThisSentence(yourGender);

// Final Statement
var statement = yourName + " is taking a class at The Iron Yard, " + fix + " instructor's name is " + instructorName;

console.log(statement);