import { capitalize, reverseString, countVowels } from "./stringHelper.js";

let text = "hello world";

let capitalized = capitalize(text);
let reversed = reverseString(text);
let vowels = countVowels(text);

console.log("Original String:", text);
console.log("Capitalized String:", capitalized);
console.log("Reversed String:", reversed);
console.log("Number of Vowels:", vowels);