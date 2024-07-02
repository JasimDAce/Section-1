// const fruits = ['Mango','Banana','Apple','Orange','Pineapple','Grapes','Guava','Papaya'];


// //TODO: Access all the elements after orange
// console.log(fruits.slice(3));

// //TODO: Remove 3 elements after Banana
// console.log(fruits.splice(2,3));

// //TODO: Insert 2 fruits in second last position
// console.log(fruits.splice(-1,0,'stawberries','dragon'));

// //TODO: Remove Mango 
// console.log(fruits.splice(fruits.indexOf('Mango'),1));

// console.log(fruits);



// //TODO: Practice time

// const books = ['Harry Potter', 'Lord of the Rings', 'Game of Thrones', 'The Hunger Games', 'Dune'];

// // TODO: Print the array 'books'

//     console.log(books);

// // TODO: Access the third element in the array

//     console.log(books[2]);

// // TODO: Find the index of 'Game of Thrones' using indexOf

//     console.log(books.indexOf('Game of Thrones'));

// // TODO: Replace 'The Hunger Games' with 'Twilight'

//     books[books.indexOf('The Hunger Games')] = 'Twilight';

// // FIXME: Use slice to get a subset of the array from index 1 to index 4 (exclusive)

//     console.log(books.slice(1,4));

// // TODO: Add 'The Witcher' to the end of the array using push

//     books.push('The Witcher');

// // FIXME: Remove the first element of the array using shift

//     books.shift();

// // TODO: Insert 'Percy Jackson' at the beginning of the array using unshift

//     books.unshift('Percy Jackson');

// // FIXME: Remove the element at index 2 and insert 'The Martian' in its place using splice

//     books.splice(2,1,'The Martian');


    //console.log(books);

//     //TODO: Level 2 

//     // Initialize an array 'students' with names of your classmates
//     // Access and print the first and last elements of the array

//     const students = ['Mohammad Shadain','Mohd Ali Jasim','Mohammad Saad Aslam' , 'Mohammad Taha', 'Mushahid khisal Ansari'];

//     console.log(`The first element is ${students[0]}`);
//     console.log(`The Last element is ${students[students.length-1]}`);


//     const animals = ['Dog', 'Cat', 'Elephant', 'Lion', 'Tiger', 'Giraffe'];

//     // Find the index of 'Lion' using indexOf

//         console.log(animals.indexOf('Lion'));

//     // Replace 'Tiger' with 'Cheetah'

//         console.log(animals.splice(animals.indexOf('Tiger'),1,'Cheetah'));
//     // Print the modified array

//         console.log(animals)


//     const colors = ['Red', 'Green', 'Blue', 'Yellow', 'Orange'];

//     // Use slice to create a new array with elements from index 1 to 3 (exclusive)

//     const newArray = colors.slice(1,3);

//     // Use splice to remove 'Blue' and 'Yellow' and insert 'Purple' and 'Pink' in their place

//     colors.splice(colors.indexOf('Blue'),1,'Purple');
//     colors.splice(colors.indexOf('Yellow'),1,'Pink');
//     // Print the modified array
//     console.log(colors);



//     const numbers = [10, 20, 30, 40, 50];

// // Add 60 and 70 to the end of the array using push
//     numbers.push(60);
//     numbers.push(70);
// // Remove the last element using pop
//     numbers.pop();
// // Insert 5 and 15 at the beginning of the array using unshift
//     numbers.unshift(5);
//     numbers.unshift(15);
// // Remove the first two elements using splice
//     numbers.splice(0,2);
// // Print the modified array
//     console.log(numbers);


//     const matrix = [
//         [1, 2, 3],
//         [4, 5, 6],
//         [7, 8, 9]
//       ];
      
//       // Access and print the element at the second row, third column (6)
//       console.log(matrix[1][2]);
//       // Replace the element at the third row, second column (8) with 10
//       matrix.splice(matrix.indexOf(8),1,7,10,9);
      
//       // Print the modified matrix
//       console.log(matrix);


      
//       const cities = ['New York', 'Los Angeles', 'Chicago', 'Houston', 'Phoenix'];

//     // Use slice to create a new array with the first 3 elements
//       const newArray2 = cities.slice(0,3);
//     // Use splice to remove 'Chicago' and 'Houston' and insert 'Dallas' and 'Seattle' in their place
//       cities.splice(cities.indexOf('Chicago'),1,'Dallas');
//       cities.splice(cities.indexOf('Houston'),1,'Seattle');
//     // Print the modified array
//     console.log(cities);


//     const fruits = ['Apple', 'Orange', 'Banana', 'Mango', 'Pineapple'];

//     // Sort the array in alphabetical order
//       let sortedArray = [];
//       let findPos = ((element,arr)=>{
//         let n = arr.length;
//         for(let i = 0; i < arr.length ; i++){
//             if(element[0]<arr[i][0]){
//                 arr.splice(i,0,element);
//                 break;
//             }
//         }
//         if(arr.length == n){
//             arr.push(element);
//         }

//       })

//       fruits.forEach((element)=>{
//         findPos(element,sortedArray);
//       })
//     // Reverse the order of elements in the array
//       let ReversedArray = [];
//       fruits.forEach((element)=>{
//         ReversedArray.unshift(element);
//       });
//     // Print the sorted and reversed array
//     console.log(sortedArray);
//     console.log(ReversedArray);


//     //FIXME: the simplified way of above question 

//     const sortedAry = fruits.slice().sort();
//     const rev = fruits.slice().reverse();

//     console.log(sortedAry);
//     console.log(rev);


//TODO: Level 3

// // Combining Arrays
// const array1 = ['a', 'b', 'c'];
// const array2 = ['d', 'e', 'f'];

// // Combine array1 and array2 into a new array
//  let combined = array1.splice();
//  array2.forEach(element => {
//     combined.push(element);
//  });

// // Finding Elements
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// // Find the first number greater than 5 using find()
//  const firstNum = numbers.find(num => num > 5);
//  console.log(firstNum);
// // Filtering Arrays
// const mixedArray = [1, 'two', 3, 'four', 5, 'six', 7, 'eight', 9, 'ten'];

// // Filter out only the number elements from mixedArray using filter()
//  const newArray = mixedArray.filter(num => typeof num === 'number');
//  console.log(newArray);

// // Mapping Arrays
// const nums10 = [1, 2, 3, 4, 5];

// // Create a new array with each element squared using map()
// const newArray3 = nums.map(num => num **2);
// console.log(newArray3);

// // Reducing Arrays
// const nums2 = [1, 2, 3, 4, 5];

// // Find the sum of all elements in the numbers array using reduce()
// let sum  = nums2.reduce((acc,num)=> acc+ num,0);
// console.log(sum);

// // Flattening Arrays
// const nestedArray = [1, [2, 3], [4, [5, 6]], 7, [8, 9]];

// // Flatten the nestedArray to a single-level array using flat()
// console.log(nestedArray.flat(2));

// // Checking Conditions
// const numbers2 = [1, 2, 3, 4, 5];

// // Check if all elements in the numbers array are positive using every()
// console.log(numbers2.every(num => num > 0));

// // Check if any element in the numbers array is greater than 4 using some()
// console.log(numbers2.some(num => num > 4));

// // Removing Duplicates
// const duplicatesArray = [1, 2, 2, 3, 4, 4, 5];

// // Remove duplicates from duplicatesArray


// // Reversing Words
// const sentence = 'Hello World!';

// // Reverse the order of words in the sentence
// let newSentence ;

// // Finding the Longest String
// const strings = ['short', 'longer', 'longest', 'tiny'];

// // Find the longest string in the strings array
// let largest = strings[0].length;
// let largestElement = strings[0];
// strings.forEach((element) => {
//     if(element.length>largest){
//         largest = element.length;
//         largestElement = element;
//     }
// })
//console.log(largestElement);

 const nums = [36,19,10,2,6,13,48];
// for(let i = 0; i<nums.length;i++){
//     console.log(nums[i]);
// }


//For of 

// for(let n of nums){
//     console.log(n);
// }

//TODO: callback function are 
// nums.forEach((element, index,wholeArray,forth) =>{
//     console.log(forth);
//     //console.log(index);
// })

// console.log(nums.map(num => num*num));


const newArray = nums.filter(num => num%2 == 0);
let newArray2 = [];

console.log(newArray);

// nums.forEach( (a) => {
//     if(a%2 == 0){
//        newArray2.push(a);  
//     }
// })

// console.log(newArray2)
