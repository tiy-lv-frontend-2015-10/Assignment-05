// Challenge zero
// 
// The below function does not work. The variable
// twoPlusTwo gets set to `undefined`. Refactor
// the function to make it work.

function addNumbers (numberA, numberB) {
    var total = (numberA + numberB);
    return total;
}

var twoPlusTwo = addNumbers(2, 2);
console.log(twoPlusTwo);
/*console.assert(twoPlusTwo === 4);
assert is false, statement is true!*/




// Challenge 1
// in one line of js, subsitute "naps" for "maps"
var tweeter = "I really like maps";

//if variable has already been declared
tweeter = "I really like naps";

//if variable has not been delcared
var tweeter = "I really like naps";

//text replace -- global replacement
var tweeter = text.replace (/maps/g, "naps");
//text replace -- not global

var tweeter = text.replace ("maps", "naps");


// Challenge 2
// Write a function isPalindrome(x)
// that returns true if x is a palindrome,
// otherwise false.
// 
// Palindromes are words that are the same
// going forwards and backwards. Examples:
// 
// i
// dod
// meeteem
// TrickirT
function main() {
  return 'Hello, World!';
}
/*I know this checks the string going forwards, but that's all I got. It needs to go backwards too.*/
main();
var z = "trickirt";

function isPalindrome(){
    for (var i = 0; i < z.length; i++) {
        if (z.slice(i, i + 12) === "trickirt") {
            var x = true;
        } else {
            var y = false;
        }
    }
}

// tests

console.assert( isPalindrome("tacocat") === true )
console.assert( isPalindrome("Tacocat") === false )
console.assert( isPalindrome("racecar") === true )
console.assert( isPalindrome("cowboy") === false )





// Write a function letterCount() that takes a
// string and returns an object with the count
// of each letter that is in the string. 
// 
// An example:
// 
// letterCount("hello world")
// 
// --> {
//      h: 1,
//      e: 1,
//      l: 3,
//      o: 2,
//      w: 1,
//      r: 1,
//      d: 1
// }
// 
// Note that the space is not counted. All 
// letters should also be converted to lower
// case when counting them.

/* I'm sure this isn't it. Probably needs an array with some type of reversal string check code. Hopefully you will cover this in class one day. */
var hello = "Hello World";
hello = hello.toLowerCase();
        
function letterCount(hello){
    var totalLetters = hello.length;
    return total;
}
var totalHello = totalLetters;
console.log(totalHello);

// tests

console.assert(letterCount("abcabcabcdefab c a oo ija ;a ;skmdals kn").b === 4)
console.assert(letterCount().z === undefined)
//Why use console assert if it only looks for false values? On this specific question, anyways.


