// charAt()
// - Returns the character in a string at the given index
// Spacetime complexity is O(1), since we are given the index directly.
console.log("Show me the letter oh".charAt(19))

// at()
// - Same as above, but allows you to use negative indexes to move backwards (ES2022).
// Spacetime complexity is O(1), since we are given the index directly.
console.log("Show me the letter oh".at(-2))

// charCodeAt()
// - Returns the Unicode value of the character at the given index.
// Spacetime complexity is O(1), since we are given the index directly.
console.log("Show me the number 83 for 'S'".charCodeAt(0))

// concat()
// - Combines two strings together.
// Since strings in js are implemented as characters in sequence, this is O(n) time complexity.
// Note that if strings were implemented as Ropes, then this would be O(1) or O(log(n)) time complexity.
console.log("I'm a".concat(" ", "sentence now!"))

// includes()
// - Returns true if the given string is found in the string, false otherwise.
// Time complexity is O(n), since we have to iterate through the string to find the substring.
console.log("I was always a sentence!".includes("sentence"))

// indexOf()
// - Returns the index of the first occurence of the given substring, or -1 if not found.
// Time complexity is O(n), since we have to iterate through the string to find the substring.
console.log("I'm still a sentence!".indexOf("sentence"))

// match()
// - Returns an array of matches, or null if no matches.
// Providing a string will match only the first result. Using regex will match all results.
// Time complexity is O(n), since we have to iterate through the string to find the substring.
console.log("I'm tired of being just one sentence!".match(/sentence/g))

// repeat()
// - Returns a string that is the given string repeated n times.
// Time complexity is O(1), since we are given the number of times to repeat.
console.log("I'll be three sentences now!".repeat(3))

// replace()
// - Returns a new string with the first occurence of the given substring replaced with the given replacement.
// - If the given substring is a regex, then it will replace all occurences.
// Time complexity is O(n), since we have to iterate through the string to find the substring.
console.log("I'm a sentence, but I'm not a sentence anymore!".replace("sentence", "paragraph"))

// search()
// - Returns the index of the first occurence of the given substring, or -1 if not found.
// Time complexity is O(n), since we have to iterate through the string to find the substring.
console.log("I'm back to being a sentence, but I'm gonna give you a number.".search("sentence"))

// slice()
// - Returns a new string that is a slice of the given string (a copy).
// Time complexity is o(n), where n is the length of the slice.
console.log("I'm a sentence, but my copy isn't going to be.".slice(0, 10))

// split()
// - Returns an array of substrings that are split by the given separator.
// Time is O(n), since we have to iterate through the string to find the separator.
console.log("I'm a sentence, but I'm gonna split myself.".split(" "))

// substr()
// - Returns a new string that is a slice of the given string (a copy).
// Note this is a deprecated method that shouldn't be used as several browsers don't support it anymore.
// Use slice() instead.
// Time complexity is O(n), where n is the length of the slice.
console.log("Take a slice from me the old-school way.".substr(0, 10))

// toLowerCase()
// - Returns a new string that is the given string in all lowercase.
// Time complexity is O(n), since we have to iterate through the string to convert each character.
console.log("I'm a sentence, but I'm NOT SHOUTING.".toLowerCase())

// toUpperCase()
// - Returns a new string that is the given string in all uppercase.
// Time complexity is O(n), since we have to iterate through the string to convert each character.
console.log("I'm a sentence, but I wish I was shouting.".toUpperCase())

// trim()
// - Returns a new string that is the given string with whitespace removed from the beginning and end.
// Time complexity is O(n), since we have to iterate through the string to find the whitespace.
// "n" could be the entire length of the string if the entire string is whitespace.
console.log("              I'm a sentence, but I'm not a very pretty one.           ".trim())