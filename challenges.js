// Challenge zero
// 
// The below function does not work. The variable
// twoPlusTwo gets set to `undefined`. Refactor
// the function to make it work.

function addNumbers(numberA, numberB) {
    // console.log(numberA + numberB);
    var sum = numberA + numberB;
    return sum;
}

var twoPlusTwo = addNumbers(2, 2);

console.assert(twoPlusTwo === 4);






// Challenge 1
// in one line of js, subsitute "naps" for "maps"
var tweeter = "I really like maps";

tweeter = tweeter.replace("m", "n");



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

function isPalindrome(word){
	var arr = word.split('');
	var rra = arr.reverse();
	var rjoin = rra.join('');

	if (rjoin === word) {
		return true;
	} else {
		return false;
	}
}

// tests

console.assert( isPalindrome("tacocat") === true );
console.assert( isPalindrome("Tacocat") === false );
console.assert( isPalindrome("racecar") === true );
console.assert( isPalindrome("cowboy") === false );





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

function letterCount(tester){

	var countedObj = {z: undefined}; //Cadet Johnson defeats the Kobayashi Maru!	 

			if (tester !== undefined) {

					tester = tester.toLowerCase();

					for (var i = 0; i < tester.length; i++) {
						
						var letter = tester.charAt(i);

							var key = letter;
						
							if (countedObj[key] !== undefined) {
								countedObj[key] += 1;
							} else {
								countedObj[key] = 1;
							}			
						} 
						return countedObj;  
			}	else {
			 	return countedObj;
		  }
}

// tests

console.assert(letterCount("abcabcabcdefab c a oo ija ;a ;skmdals kn").b === 4)
console.assert(letterCount().z === undefined)


