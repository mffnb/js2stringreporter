// js2stringreporter.js

var anyword = prompt('Please enter a word');

console.log('you entered', anyword);
// alert("You entered: " + anyword);
console.log("You entered: " + anyword);
console.log('By the way, here are some facts about what you entered: ');
console.log('1. the fourth character is: '  + anyword.charAt(3));
console.log('2. the number of characters are: '  + anyword.length);
console.log('3. here it is in all upper case: ' + anyword.toUpperCase());
console.log('4. here it is in all lower case: '  + anyword.toLowerCase());
console.log('5. the second through fourth characters are: '  + anyword.substring(1, 4));
console.log('6. the word used in a sentence: The greatest thing in the world used to be '  + anyword);
