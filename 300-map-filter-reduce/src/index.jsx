import emojipedia from "./emojipedia";

var numbers = [3, 56, 2, 48, 5];

//Map -Create a new array by doing something with each item in an array.
function double(x) {
    return x * 2;
}
const newNumbers = numbers.map(double);
console.log(`Doubled numbers array using map: ${newNumbers}`);

//Filter - Create a new array by keeping the items that return true.
const filteredNumbers = numbers.filter(function (num) {
    return num > 10
});
console.log (`Our filtered numbers: ${filteredNumbers}`);
//Reduce - Accumulate a value by doing something to each item in an array.
var ReducedSum = numbers.reduce(function (accumulator, currentNumber) {
    console.log(`Accumulator value is: ${accumulator}`);
    console.log(`Current number value is : ${currentNumber}`);
    return accumulator + currentNumber;
})
console.log(`The sum with Reduce is: ${ReducedSum}`);
//Find - find the first item that matches from an array.
const foundNumber = numbers.find(function (num) {
    return num > 10;
})
console.log(`First found number greater than 10 in the array is ${foundNumber}`);
//FindIndex - find the index of the first item that matches.
const Index = numbers.findIndex(function (num) {
    return num > 10;
})
console.log(`Index of the first found number greater than 10 in the array is ${Index}`);

const newEmojipedia = emojipedia.map(function(emojiEntry) {
    return emojiEntry.meaning.substring(0, 100);
})

console.log(newEmojipedia);