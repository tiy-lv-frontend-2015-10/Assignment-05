// Challenge zero
// 
// The below function does not work. The variable
// twoPlusTwo gets set to `undefined`. Refactor
// the function to make it work.


function addNumbers(numberA, numberB) {
   return (numberA + numberB);
}


var twoPlusTwo = addNumbers(2 , 2);



console.assert(twoPlusTwo === 4);






// Challenge 1
// in one line of js, subsitute "naps" for "maps"
var tweeter = "I really like maps";

var res = tweeter.replace("maps", "naps");




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

function isPalindrome(str) {

	var i = 0;
	for (i = 0; i < str.length / 2; i++) {
		if (str[i] != str[str.length - i - 1]) {
			return false;
		}
	}
	return true;
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

function letterCount(str) {

	str = str.toLowerCase();
	var counts = {};

	var i = 0
	for(i = 0; i < str.length; i++){
		var currentLetter = str[i];
		if (currentLetter in counts) {
			counts[currentLetter] += 1;	
		}
		else {
			counts[currentLetter] = 0;
		}
	}
    
}

// tests

console.assert(letterCount("abcabcabcdefab c a oo ija ;a ;skmdals kn").b === 4)
console.assert(letterCount().z === undefined)






