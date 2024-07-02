// // Combining Arrays
// const array1 = [1, 2, 3];
// const array2 = [4, 5, 6];
// // Your task: Combine array1 and array2 into a single array called combinedArray
// const combinedArray = array1.concat(array2);
// // Finding Elements
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// // Your task: Find and print the first number greater than 5 from the numbers array
// console.log(numbers.find((num) => {return num>5}));
// console.log('\n\n\n');
// // Filtering Arrays
// const numbersToFilter = [2, 7, 3, 8, 1, 6, 4];
// // Your task: Filter out numbers less than 5 from numbersToFilter into filteredArray
// const filteredArray = numbersToFilter.filter((num) => {return num<5});
// // Mapping Arrays
// const numbersToSquare = [2, 4, 6, 8];
// // Your task: Square each number in numbersToSquare and store them in squaredArray
// const squaredArray = numbersToSquare.map((num) => {return num*num});
// // Reducing Arrays
// const numbersToSum = [1, 2, 3, 4, 5];
// // Your task: Find the sum of all elements in numbersToSum using reduce
// const sum = numbersToSum.reduce((acc, num) => {return acc+num}); //TODO: chat explain me the working of the reduce function in detail
// // Flattening Arrays
// const nestedArray = [1, [2, 3], [4, [5, 6]], 7];
// // Your task: Flatten nestedArray into a single-level array using flat
// const flattenArray = nestedArray.flat(2); //TODO: chat explain me the working of the reduce function in detail
// // Checking Conditions
// const numbersToCheck = [2, 7, 3, 8, 1, 6, 4];
// // Your task: Check if all numbers in numbersToCheck are positive using every
// const isAllPositive = numbersToCheck.every((num) => {return num>0});
// // Your task: Check if any number in numbersToCheck is greater than 4 using some
// const isNumGreaterThan4 = numbersToCheck.some((num) => { return num>4});
// // Removing Duplicates
// const duplicatesArray = [1, 2, 2, 3, 4, 4, 5];
// // Your task: Remove duplicates from duplicatesArray and store unique values in uniqueArray
// const uniqueArray = [...new Set(duplicatesArray)];
// console.log(uniqueArray); //Explain this again I m unable to solve this again
// // Reversing Words
// const sentence = "Hello World!";
// // Your task: Reverse the words in sentence and print the reversed sentence
// let str = (sentence.split(' ')).reverse().join(' ');
// console.log(str);
// // Finding the Longest String
// const strings = ['short', 'longer', 'longest', 'tiny'];
// // Your task: Find and print the longest string in strings
// const longest = strings.reduce((long,curr) => curr.length>long.length?curr:long,strings[0]);
// console.log(longest);
// // Sorting Arrays
// const unsortedNumbers = [4, 2, 9, 1, 5, 6];
// // Your task: Sort the unsortedNumbers array in ascending order
// console.log(unsortedNumbers.sort());
// // Transforming Arrays with Map
// const numbersToDouble = [1, 2, 3, 4, 5];
// // Your task: Create a new array doubledNumbers where each number in numbersToDouble is doubled
// const doubledNumbers = numbersToDouble.map((num) => {return 2*num});
// // Sum of Array Elements
// const numbersToSum2 = [1, 2, 3, 4, 5];
// // Your task: Find the sum of all elements in numbersToSum2 using a for loop
// let sum2 = 0;
// numbersToSum2.forEach((num)=>{
//     sum2+= num;
// });
// // Finding the Minimum Value
// const numbersToFindMin = [6, 3, 9, 2, 10, 1];
// // Your task: Find and print the minimum value in numbersToFindMin
// let mini = Math.min(...numbersToFindMin);
// console.log(mini);
// const arrayToReverse = [1, 2, 3, 4, 5];
// // Your task: Reverse arrayToReverse and store the result in reversedArray
// const reversedArray = arrayToReverse.reverse();

const array1 = [1, 3, 5];
const array2 = [2, 4, 6];
// Your task: Combine array1 and array2 into a single array called combinedArray
const combinedArray = array1.concat(array2);
// Filter out numbers greater than 4 from combinedArray into filteredArray
const filteredArray = combinedArray.filter((num) => {return num>4});
const numbers = [10, 20, 30, 40, 50];
// Your task: Map numbers to an array of objects with { id: index, value: element }
const obj = numbers.map((num,index) => {return {id:index,value:num}});
console.log(obj);
// Then, find the sum of all 'value' properties using reduce
const sum = numbers.reduce((acc ,num) => {return acc + num});
console.log(sum);

const nestedArray = [[1, 2], [3, 4], [5, 6]];
// Your task: Flatten nestedArray into a single-level array, then sort it in descending order
const flattenArray = nestedArray.flat(2);


const numbers2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// Your task: Filter out prime numbers, then check if all remaining numbers are even using every
const filteredArray2 = numbers2.filter((num) => {
    let prime = true;
    for(let i = 2; i < num; i++){
        if(num%i == 0){
            prime = false;
        }
    }
    if(num === 1) prime = false;
    return prime;
});
console.log(filteredArray2.every((num) => {return num%2==0}));

const sentence = "JavaScript is awesome";
// Your task: Reverse each word in sentence, then map it to an array of reversed words
const newSentence = (sentence.split(' ')).reverse().join(' ');
console.log(newSentence);

const students = [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' },
    { id: 3, name: 'Charlie' }
  ];
  // Your task: Convert students array into an object { id: name }, then find total length of all names
  


