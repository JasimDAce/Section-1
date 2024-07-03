const books = ['Harry Potter', 'Lord of the Rings', 'Game of Thrones', 'The Hunger Games', 'Dune'];

// // TODO: Print the array 'books' in reverse order without modifying the original array
// for(let i = books.length-1; i>=0;i--){
//     console.log(books[i]);
    
// }

// // TODO: Access the second-to-last element in the array
// console.log(books[books.length -2]);

// // TODO: Find the index of 'The Hunger Games' using findIndex
// console.log(books.indexOf('The Hunger Games'));

// // TODO: Replace 'Game of Thrones' with 'The Silmarillion' using splice
// books.splice(books.indexOf('Game of Thrones'),1,'The Silmarillioni');
// console.log(books);

// // FIXME: Use slice to get the last three elements of the array
// const lastThree = books.slice(-3);
// console.log(lastThree);

// // TODO: Add 'The Witcher' and 'Foundation' to the end of the array using spread operator
// const updatedArray = ['The Wicher','Foundation',...books];
// console.log(updatedArray);
// FIXME: Remove the last element of the array using pop and store it in a variable
// const lastElement = books.pop();
// console.log(lastElement)

// // TODO: Insert 'Percy Jackson' and 'The Maze Runner' at the beginning of the array using unshift
// books.unshift(   'Percy Jackson');
// books.unshift('The Maze Runner');
// console.log(books);

// // FIXME: Remove the element at index 1 and insert 'The Martian' and 'Ender's Game' in its place using splice
// books.splice(0,1,'The Martian','Ender\'s game');
// console.log(books);


// Combining and Manipulating Arrays
const arrayA = [7, 14, 21];
const arrayB = [28, 35, 42];
// Your task: Combine arrayA and arrayB into a single array called combinedArray, then remove any elements greater than 30

// Transforming and Filtering Arrays
const numbers = [11, 22, 33, 44, 55];
// Your task: Map numbers to an array of objects with { id: index, value: element * 2 }, then filter out objects where value is greater than 50

// Reducing Arrays and Extracting Data
const items = [
    { id: 1, quantity: 4, price: 10 },
    { id: 2, quantity: 2, price: 15 },
    { id: 3, quantity: 5, price: 8 }
];
// Your task: Calculate the total cost (quantity * price) of all items using reduce

// Flattening and Sorting Nested Arrays
const nestedArray2 = [[1, 3, [5, 7]], [2, 4, [6, 8]]];
// Your task: Flatten nestedArray2 into a single-level array, then sort it in ascending order

// Checking Conditions with Complex Criteria
const mixedNumbers = [1, 3, 5, 7, 2, 4, 6, 8, 10];
// Your task: Filter out prime numbers, then check if all remaining numbers are even using every

// String and Array Manipulations
const quote = "Practice makes perfect";
// Your task: Reverse each word in quote individually, then map it to an array of reversed words and join them back into a single string

// Array to Object Conversion and Data Aggregation
const employees = [
    { id: 101, name: 'John', salary: 5000 },
    { id: 102, name: 'Jane', salary: 6000 },
    { id: 103, name: 'Doe', salary: 7000 }
];
// Your task: Convert employees array into an object { id: name }, then find the average salary of all employees

// Nested Array Manipulations
const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
// Your task: Calculate the sum of the diagonal elements of the matrix

// Advanced Filtering and Mapping
const orders = [
    { orderId: 1, amount: 250, status: 'shipped' },
    { orderId: 2, amount: 450, status: 'pending' },
    { orderId: 3, amount: 100, status: 'shipped' }
];
// Your task: Filter out orders with status 'shipped', then create a new array with only the 'amount' of those orders

// Array Combination and Deduplication
const arrayX = [1, 2, 3, 4];
const arrayY = [3, 4, 5, 6];
// Your task: Combine arrayX and arrayY into a single array and remove any duplicates
